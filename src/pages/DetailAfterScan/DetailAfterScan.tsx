import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useMemo } from 'react'
import { colors } from '../../config/colors'
import { GetKanitFont } from '../../config/fonts'
import { SafeAreaView } from 'react-native-safe-area-context'
import globleStyles from '../../config/globleStyles'
import images from '../../config/img'
import { heightOfWindow, widthOfWindow } from '../../utils/getDimension'
import AntDesign from 'react-native-vector-icons/AntDesign'
import StatusModal from './components/StatusModal'
import { BlurView } from '@react-native-community/blur'
import ChangeLocation from './components/ChangeLocation'
import axios from 'axios'
import configAxios from '../../axios/configAxios'
import { API } from '../../axios/swr/endpoint'
import AsyncStorage from '@react-native-async-storage/async-storage'


const DetailAfterScan = (props: any) => {

  const navigation = props.navigation;

  const [showModal, setShowModal] = React.useState(false);

  const itemShow = props?.route?.params.getproduct || [""];
  console.log('itemmmmmmm==', itemShow,);


  //Set Status
  let statusItem;
  if (itemShow.status_item == true) {
    statusItem = "ปกติ";
  } else if (itemShow.status_item == false) {
    statusItem = "ชำรุด";
  }


  const onClickCheckStatus = () => {
    setShowModal(true);
  };
  const onClose = () => {
    setShowModal(false);
    // setShowConfirmModal(false)
  };


  const onConfirm = async () => {
    setShowModal(false);
  };

  const [open, setOpen] = useState({
    showModalStatus: false,
    showExpanded: false,
  });


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>

      <StatusModal
        showModal={showModal}
        onClose={onClose}
        // onConfirm={onConfirm}
        setShowModal={setShowModal}

      />
      {showModal
        && (
          <BlurView
            style={styles.absolute}
            blurType="dark"
            blurAmount={1}
            reducedTransparencyFallbackColor="gray" />
        )}

      <ScrollView>
        <View style={globleStyles.headers}>
          <Text style={globleStyles.texthead}>รายละเอียดครุภัณฑ์</Text>
        </View>

        {/* ---content--- */}

        {/* image */}
        <View style={{ flex: 2, alignItems: 'center' }}>
          <View style={{ backgroundColor: colors.white, flex: 1, width: widthOfWindow * 0.9, height: heightOfWindow * 0.3, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={images.monitor} style={{ width: widthOfWindow * 0.8, height: heightOfWindow * 0.3 }} />
          </View>
        </View>


        <View style={{ alignItems: 'center' }}>
          <View style={{ backgroundColor: '#000', flex: 6, width: widthOfWindow * 0.95, borderRadius: 25 }}>
            {/* <View style={{ backgroundColor: colors.Gray, padding: 3, margin: 10, marginHorizontal: 150, borderRadius: 20 }}></View> */}

            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <View style={{ flex: 1, margin: 20, }}>
                <Text style={globleStyles.fontTitleDT}>{itemShow?.name}</Text>

              </View>

              {/* status */}
              <View style={{ flex: 0, width: widthOfWindow * 0.3, alignItems: 'center' }}>
                <View style={{
                  width: widthOfWindow * 0.135, height: heightOfWindow * 0.07,
                  backgroundColor:
                    itemShow?.status_item
                      ? colors.greenConfirm
                      : colors.red,
                  borderRadius: 60
                }}></View>
                <Text style={globleStyles.fontstatus}>{statusItem}</Text>
              </View>
            </View>

            <View style={globleStyles.line}></View>
            <View style={{ marginHorizontal: 15 }}>
              <View style={{ marginVertical: 5 }}>
                <Text style={globleStyles.fonts}>ผู้ดูแล : {itemShow?.profile.firstname} {itemShow?.profile.lastname}</Text>
              </View>
              <View style={{ marginVertical: 5 }}>
                <Text style={globleStyles.fonts}>รหัสครุภัณฑ์ : {itemShow?.code}</Text>
              </View>
              <View style={{ marginVertical: 5 }}>
                <Text style={globleStyles.fonts}>หมวดหมู่ครุภัณฑ์ : {itemShow?.typeItem.name} </Text>
              </View>
            </View>

            {/* รายละเอียดเพิ่มเติม */}
            <View style={{ flex: 1 }}>
              <View style={styles.item_BoxDetail}>
                <View style={styles.rowDetail}>
                  <Text style={globleStyles.fonts}>รายละเอียดครุภัณฑ์ : {itemShow?.description} </Text>
                </View>
                <View style={styles.rowDetail}>
                  <Text style={globleStyles.fonts}>วันที่รับเข้า : {itemShow?.up_Date_Statuses[0].inspected_at}</Text>
                </View>

                <View style={styles.rowDetail}>
                  <Text style={globleStyles.fonts}>สถานที่ : {itemShow?.location.nameTH} </Text>
                </View>
                <View style={styles.rowDetail}>
                  <Text style={globleStyles.fonts}>ตรวจสอบครั้งล่าสุด : {itemShow?.up_Date_Statuses[0].updatedAt} </Text>
                </View>
                <View style={styles.rowDetail}>
                  <Text style={globleStyles.fonts}>หมายเหตุ : {itemShow?.up_Date_Statuses[0].note}</Text>
                </View>

                {/* เปลี่ยนสถานที่ */}
                <ChangeLocation />

              </View>

            </View>

          </View>
        </View>

        {/* button */}
        <View>
          <TouchableOpacity
            onPress={onClickCheckStatus}
            style={{ backgroundColor: colors.Gray, padding: 20, marginHorizontal: 40, margin: 10, borderRadius: 10 }}>
            <Text style={{ fontSize: 20, ...GetKanitFont('medium'), textAlign: 'center', color: '#000' }}>ตรวจสอบสถานะครุภัณฑ์</Text>
          </TouchableOpacity>
        </View>










      </ScrollView>

    </SafeAreaView>
  )
}

export default DetailAfterScan

const styles = StyleSheet.create({
  item_BoxDetail: {
    marginBottom: 5,
    marginHorizontal: 15,
    // padding: 15,
    // backgroundColor: "red",
  },
  rowDetail: {
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  view_containerNote: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 5,
    borderColor: colors.Gray,
  },
  fontShow: {
    fontSize: 16,
    color: "gray",
    ...GetKanitFont("regular"),
  },
  titleProblem: {
    fontSize: 16,
    marginBottom: 10,
    ...GetKanitFont("regular"),
  },
  rowImages: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputDetailProblem: {
    height: 65,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: colors.Gray,
    ...GetKanitFont("regular"),
  },
  iconCancelImage: {
    position: "absolute",
    right: 10,
    zIndex: 10,
    top: 3,
  },
  imageCamera: {
    backgroundColor: colors.Gray,
    width: 100,
    height: 100,
    elevation: 3,
    borderRadius: 10,
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 999,
  },
})