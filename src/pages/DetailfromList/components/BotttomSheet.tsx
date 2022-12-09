import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { widthOfWindow, heightOfWindow } from '../../../utils/getDimension';
import { colors } from '../../../config/colors';
import ListPage from '../../ListPage/ListPage';
import { items } from '../../../assets/json/items';
import { GetKanitFont } from '../../../config/fonts';
import globleStyles from '../../../config/globleStyles';



const BottomSheet = (props: any) => {
  const itemShow = props?.route?.params.item || [""];
  const ref = useRef();

  //Set Status
  let statusItem: string;
  if (itemShow.item_status_to_s == "true") {
    statusItem = "ปกติ";
  } else if (itemShow.item_status_to_s == "false") {
    statusItem = "ชำรุด";
  }



  return (
    <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}>
      <TouchableOpacity
        onPress={() => this.Scrollable.open()}
        style={styles.touchOpen}
      >
        <Text style={styles.textTitle}>MONITOR</Text>
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
            height: 400,
          }

        }}

      >
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1, margin: 15, }}>
            <Text style={globleStyles.fontTitleDT}>MONITOR</Text>
            <Text style={globleStyles.textID}>#0001</Text>
          </View>
          <View style={{ flex: 0, width: widthOfWindow * 0.3 }}>
            <View style={[globleStyles.status, {
              backgroundColor:
                itemShow.item_status_to_s == "true"
                  ? colors.greenConfirm
                  : colors.greenConfirm &&
                    itemShow.item_status_to_s == "false"
                    ? colors.red
                    : colors.red
            }]}></View>
            <Text style={globleStyles.fontstatus}>ชำรุด</Text>
          </View>
        </View>
        <View style={styles.line}></View>

        <View style={{ marginHorizontal: 15 }}>
          <View style={{ marginVertical: 5 }}>
            <Text style={globleStyles.fonts}>ผู้ดูแล : </Text>
          </View>
          <View style={{ marginVertical: 5 }}>
            <Text style={globleStyles.fonts}>รหัสครุภัณฑ์ : </Text>
          </View>
          <View style={{ marginVertical: 5 }}>
            <Text style={globleStyles.fonts}>หมวดหมู่ครุภัณฑ์ :  </Text>
          </View>
          <View style={{ marginVertical: 5 }}>
            <Text style={globleStyles.fonts}>วันที่รับเข้า :  </Text>
          </View>
          <View style={{ marginVertical: 5 }}>
            <Text style={globleStyles.fonts}>สถานที่ : </Text>
          </View>
          <View style={{ marginVertical: 5 }}>
            <Text style={globleStyles.fonts}>ตรวจสอบครั้งล่าสุด : </Text>
          </View>
          <View style={{ marginVertical: 5 }}>
            <Text style={globleStyles.fonts}>หมายเหตุ : </Text>
          </View>





        </View>



      </RBSheet>
    </View>
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
    width: widthOfWindow * 0.16,
    height: heightOfWindow * 0.08,
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
  textTitle:{
    fontSize: 20, 
    textAlign: 'left', 
    color: '#fff',
    ...GetKanitFont('medium')
  },
  textDetail:{
    fontSize: 16, 
    textAlign: 'right', 
    color: '#fff' ,
    ...GetKanitFont('regular')

  },
  touchOpen:{
    borderRadius: 15, 
    backgroundColor: colors.black,
    padding: 30, 
    width: widthOfWindow * 0.97, 
  },
  fontTitleDT:{
    fontSize: 24,
    ...GetKanitFont('medium')
    , color: '#fff' 
  },
  textID:{
    fontSize: 18, color: '#fff' ,
    ...GetKanitFont('regular')
  }
});

export default BottomSheet;