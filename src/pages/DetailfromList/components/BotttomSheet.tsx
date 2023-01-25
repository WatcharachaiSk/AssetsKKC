import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { widthOfWindow, heightOfWindow } from '../../../utils/getDimension';
import { colors } from '../../../config/colors';
import ListPage from '../../ListPage/ListPage';
import { items } from '../../../assets/json/items';
import { GetKanitFont } from '../../../config/fonts';
import globleStyles from '../../../config/globleStyles';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { baseURL, PATH_IMAGE_ITEM, PATH_IMAGE_ITEM_DAMAGED } from '../../../axios/config';
import { chackStatusItemColor,chackStatusItem } from '../../../config/chackItemStatus';

import Moment from 'react-moment';

const { height } = Dimensions.get("window");


const BottomSheet = (props: any) => {
  const { itemShow } = props;
  const [currentDate, setCurrentDate] = useState('');
  const [createdAtdate, setCreatedAtDate] = useState('');
  //console.log(itemShow.item_id);



  //Set Status
  let statusItem;
  // if (itemShow?.status_item == true) {
  //   statusItem = "ปกติ";
  // } else if (itemShow?.status_item == false) {
  //   statusItem = "ชำรุด";
  // } else if (itemShow?.status_item == 2) {
  //   statusItem = "รอจำหน่าย";
  // } else if (itemShow?.status_item == 3) {
  //   statusItem = "จำหน่ายเเล้ว";
  // }

  // format วันที่ตรวจสอบล่าสุด
  useEffect(() => {
    var date = new Date(itemShow?.up_date_statuses[0]?.inspected_at).getDate(); //Current Date
    var month = new Date(itemShow?.up_date_statuses[0]?.inspected_at).getMonth() + 1; //Current Month
    var year = new Date(itemShow?.up_date_statuses[0]?.inspected_at).getFullYear()+543; //Current Year
    var hours = new Date(itemShow?.up_date_statuses[0]?.inspected_at).getHours(); //Current Hours
    var min = new Date(itemShow?.up_date_statuses[0]?.inspected_at).getMinutes(); //Current Minutes
    var sec = new Date(itemShow?.up_date_statuses[0]?.inspected_at).getSeconds(); //Current Seconds
    setCurrentDate(
      'วันที่ ' + date + '/' + month + '/' + year
      + '  ' + 
      '\nเวลา ' + hours + ':' + min + ' น.'
    );


  }, []);


  // format วันที่รับเข้า
  useEffect(() => {
    var date = new Date(itemShow?.createdAt).getDate(); //Current Date
    var month = new Date(itemShow?.createdAt).getMonth() + 1; //Current Month
    var year = new Date(itemShow?.createdAt).getFullYear() + 543; //Current Year
    var hours = new Date(itemShow?.createdAt).getHours(); //Current Hours
    var min = new Date(itemShow?.createdAt).getMinutes(); //Current Minutes
    var sec = new Date(itemShow?.createdAt).getSeconds(); //Current Seconds
    setCreatedAtDate(
      'วันที่ ' + date + '/' + month + '/' + year
      + '  ' + '\nเวลา ' + hours + ':' + min + ' น.'
    );
 
  }, []);

  //console.log(currentDate);



  return (

    <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}>
      <TouchableOpacity
        onPress={() => this.Scrollable.open()}
        style={styles.touchOpen}
      >
        <Text style={styles.textTitle}>{itemShow?.name}</Text>
        <Text style={styles.textDetail}>ดูรายละเอียดเพิ่มเติม</Text>
      </TouchableOpacity>

      <RBSheet

        ref={ref => {
          this.Scrollable = ref;
        }}
        closeOnDragDown
        animationType='slide'
        customStyles={{
          container: {
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: '#000',
            height: height > 600 ? 500 : 400,
          }

        }}

      >

        <View style={{ flexDirection: 'row' }}>

          <View style={{ flex: 1, margin: 15, }}>
            <Text style={globleStyles.fontTitleDT}>{itemShow?.name}</Text>

          </View>
          <View style={{ flex: 0, width: widthOfWindow * 0.3 }}>
            <View style={[styles.status, {
              backgroundColor: chackStatusItemColor(itemShow?.status_item)
            }]}></View>
            <Text style={globleStyles.fontstatus}>{chackStatusItem(itemShow?.status_item)}</Text>
          </View>
        </View>

        <View style={styles.line}></View>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

          <View style={{ marginHorizontal: 15 }}>
            <View style={{ marginVertical: 5, flexDirection: 'row' }}>
              <Text style={globleStyles.fonts}>ผู้ดูแล : {itemShow?.profile?.firstname} {itemShow.profile?.lastname}</Text>

            </View>
            <View style={{ marginVertical: 5 }}>
              <Text style={globleStyles.fonts}>รหัสครุภัณฑ์ : {itemShow?.code} </Text>
            </View>
            <View style={{ marginVertical: 5 }}>
              <Text style={globleStyles.fonts}>หมวดหมู่ครุภัณฑ์ :
                {itemShow?.typeitem == null
                  ? "-"
                  : itemShow?.typeitem.name} </Text>
            </View>
            <View style={{ marginVertical: 5 }}>
              <Text style={globleStyles.fonts}>วันที่รับเข้า : {itemShow?.typeitem == null
                ? "-"
                : createdAtdate} </Text>
            </View>
            <View style={{ marginVertical: 5 }}>
              <Text style={globleStyles.fonts}>สถานที่ : {itemShow?.location.nameTH} </Text>
            </View>
            <View style={{ marginVertical: 5 }}>

              <Text style={globleStyles.fonts}>ตรวจสอบครั้งล่าสุด : {itemShow?.up_date_statuses[0]?.inspected_at != null ? currentDate : "-"} </Text>



            </View>
            <View style={{ marginVertical: 5 }}>
              <Text style={globleStyles.fonts}>หมายเหตุ : {itemShow?.up_date_statuses[0]?.note} </Text>
            </View>

            <View style={{ margin: 10, marginBottom: 10, alignItems: 'center', justifyContent: 'flex-end' }}>
              <Image style={{ width: height > 600 ? widthOfWindow * 0.5 : widthOfWindow * 0.5, height: height > 600 ? heightOfWindow * 0.25 : heightOfWindow * 0.3, flex: 0 }}
                source={{ uri: `${baseURL}${PATH_IMAGE_ITEM_DAMAGED}${itemShow?.name_image_damaged}` }} />


            </View>


          </View>

        </ScrollView>



      </RBSheet >

    </View >

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  line: {
    padding: 0.5,
    width: widthOfWindow * 0.9,
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginVertical: 10
  },
  status: {

    borderRadius: 50,
    width: height > 600 ? 60 : 45,
    height: height > 600 ? 60 : 45,
    alignSelf: 'center'
  },
  fontstatus: {
    fontSize: 18, color: '#fff',
    textAlign: 'center',
    ...GetKanitFont('regular')
  },
  fonts: {
    fontSize: 16, color: '#fff',
    ...GetKanitFont('regular')
  },
  textTitle: {
    fontSize: RFPercentage(3.1),
    textAlign: 'left',
    color: '#fff',
    ...GetKanitFont('medium')
  },
  textDetail: {
    fontSize: RFPercentage(2.5),
    textAlign: 'right',
    color: colors.yellow,
    ...GetKanitFont('regular')

  },
  touchOpen: {
    borderRadius: 15,
    backgroundColor: colors.black,
    padding: heightOfWindow * 0.05,
    width: widthOfWindow * 0.97,
  },
  fontTitleDT: {
    fontSize: 24,
    ...GetKanitFont('medium')
    , color: '#fff'
  },
  textID: {
    fontSize: 18, color: '#fff',
    ...GetKanitFont('regular')
  }
});

export default BottomSheet;