import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { widthOfWindow, heightOfWindow } from '../../../utils/getDimension';
import { colors } from '../../../config/colors';
import ListPage from '../../ListPage/ListPage';
import { items } from '../../../assets/json/items';



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
        style={{ borderRadius: 15, backgroundColor: '#000', padding: 30, width: widthOfWindow * 0.97, }}
      >
        <Text style={{ fontSize: 20, textAlign: 'left', color: '#fff', fontWeight: 'bold' }}>MONITOR</Text>
        <Text style={{ fontSize: 16, textAlign: 'right', color: '#fff' }}>ดูรายละเอียดเพิ่มเติม</Text>
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
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#fff' }}>MONITOR</Text>
            <Text style={{ fontSize: 18, color: '#fff' }}>#0001</Text>
          </View>
          <View style={{ flex: 0, width: widthOfWindow * 0.3 }}>
            <View style={[styles.status, {
              backgroundColor:
                itemShow.item_status_to_s == "true"
                  ? colors.greenConfirm
                  : colors.greenConfirm &&
                    itemShow.item_status_to_s == "false"
                    ? colors.red
                    : colors.red
            }]}></View>
            <Text style={styles.fontstatus}>ชำรุด</Text>
          </View>
        </View>
        <View style={styles.line}></View>

        <View style={{ marginHorizontal: 15 }}>
          <View style={{ marginVertical: 5 }}>
            <Text style={styles.fonts}>ผู้ดูแล : </Text>
          </View>
          <View style={{ marginVertical: 5 }}>
            <Text style={styles.fonts}>รหัสครุภัณฑ์ : </Text>
          </View>
          <View style={{ marginVertical: 5 }}>
            <Text style={styles.fonts}>หมวดหมู่ครุภัณฑ์ : </Text>
          </View>
          <View style={{ marginVertical: 5 }}>
            <Text style={styles.fonts}>วันที่รับเข้า : </Text>
          </View>
          <View style={{ marginVertical: 5 }}>
            <Text style={styles.fonts}>สถานที่ : </Text>
          </View>
          <View style={{ marginVertical: 5 }}>
            <Text style={styles.fonts}>ตรวจสอบครั้งล่าสุด : </Text>
          </View>
          <View style={{ marginVertical: 5 }}>
            <Text style={styles.fonts}>หมายเหตุ : </Text>
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
    fontSize: 18, color: '#fff', textAlign: 'center'
  },
  fonts: {
    fontSize: 18, color: '#fff',
  }
});

export default BottomSheet;