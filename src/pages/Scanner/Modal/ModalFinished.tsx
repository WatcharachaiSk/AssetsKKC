import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Pressable,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import React, { useState, useEffect } from "react";
import { colors } from "../../../config/colors";
import { RFPercentage } from "react-native-responsive-fontsize";
import LottieView from "lottie-react-native";
import json from "../../../config/json";
import { GetKanitFont } from "../../../config/fonts";
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { heightOfWindow, widthOfWindow } from "../../../utils/getDimension";
import { chackStatusItemColor, chackStatusItem } from "../../../config/chackItemStatus";

const { height } = Dimensions.get("window");
const ModalFinished = (props: any) => {
  const { showSuccess, onClickSwap, onScanAgain, oldItem, itemRes, location_nameTH, onClickSave, setShowSuccess, statusNew } = props;
  const [animationFn, setAnimationFn] = useState(false);
  const animationFinish = () => {
    // console.log("fn");
    setAnimationFn(true);
  };
  // console.log('oldItem== ',oldItem?.status_item);
  // console.log('statusNew== ',statusNew);






  //new item
  // if (itemRes != undefined) {
  //   nameTH = oldItem.nameTH;
  //   statusNew = itemRes.statusNew;
  //   if (statusNew == "true") {
  //     statusNew = "ปกติ";
  //   } else if (statusNew == "false") {
  //     statusNew = "ชำรุด";
  //   }
  //   locationTH = location_nameTH;
  // } else {
  //   itemRes == undefined;
  //   oldItem == undefined;
  // }

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={showSuccess || false}
      onRequestClose={() => onClickSave()}

    >

{/* 
      {itemRes != undefined && oldItem != undefined
        && ( */}


          <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>


            <SafeAreaView style={styles.container} >

              <View style={{ flex: 0, }}>
                <View style={{ flex: 0, marginTop: 10 , justifyContent:'center' ,alignItems:'center'}}>

                  <View style={styles.view_ContainerLottiv}>
                    <LottieView
                      resizeMode="contain"
                      style={{ flex: 0, width: height> 600 ?  200 : 100, height: height> 600 ? 200:150 }}
                      source={json.success}
                      autoPlay
                      duration={3000}
                      loop={true}
                    // onAnimationFinish={() => {
                    //   animationFinish();
                    // }}
                    />
                  </View>
                  <View style={styles.view_StatusOldNew}>
                    {/* เก่า */}
                    <Text
                      style={[
                        styles.font_Status,
                        {
                          color: chackStatusItemColor(oldItem?.status_item)

                        },
                      ]}
                    >
                      {chackStatusItem(oldItem?.status_item)}
                    </Text>
                    {/* Icon */}
                    <View style={{ top: 2, marginHorizontal: 20 }}>
                      <IconMaterialCommunityIcons
                        name="chevron-double-down"
                        size={ height > 600 ?  40 : 30}
                        style={{ color :'red' }}
                      />
                    </View>
                    {/* ใหม่ */}
                    <Text
                      style={[
                        styles.font_Status,
                        {
                          color: chackStatusItemColor(statusNew)
                        },
                      ]}
                    >
                      {chackStatusItem(statusNew)}
                    </Text>
                  </View>
                </View>

              </View>
              <View style={{ flex: 0 }}>
                <View
                  style={{
                    top: -20,
                  }}
                >
                  <Pressable
                    onPress={() => {
                      setShowSuccess(false)

                      setTimeout(async () => {
                        onScanAgain();
                      }, 500);
                    }}
                    style={[
                      styles.buttonModal,
                      { backgroundColor: colors.greenConfirm },
                    ]}
                  >
                    <Text style={styles.textButton}>สแกนต่อ</Text>
                  </Pressable>
                </View>
              </View>

            </SafeAreaView>
         
          </View>
          {/* )} */}
    </Modal>
  )
}

export default ModalFinished

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 15,
    opacity: 1,
    padding: 12,
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: height> 600 ?  widthOfWindow * 0.9 : widthOfWindow * 0.9,
    height: height> 600 ?  heightOfWindow * 0.48 :heightOfWindow * 0.45

  },
  view_ContainerLottiv: {
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "#000",
    flex: 0,
    // padding: 45,
    margin: 10,
    width: height> 600 ? widthOfWindow * 0.8 : widthOfWindow * 0.7,
    height: height> 600 ? heightOfWindow * 0.2 : heightOfWindow * 0.15
  },
  font_NameItem: {
    fontSize: RFPercentage(3.5) ,
    color: colors.black,
    ...GetKanitFont("medium"),
  },
  view_StatusOldNew: {
    marginVertical: 5,
    //flexDirection: "row",
    alignItems: "center",
    //justifyContent: "center",
    // right: 5,
   //backgroundColor: "red",

  },
  font_Status: {
    fontSize: height > 600 ?  RFPercentage(3.5) : RFPercentage(3),
    ...GetKanitFont("regular"),
  },
  textButton: {
    color: "#fff",
    fontSize: RFPercentage(3),
    textAlign: "center",
    ...GetKanitFont("regular"),
  },
  buttonModal: {
    alignItems: "center",
    alignSelf: "center",
    flex: 0,
    paddingVertical: 5,
    paddingHorizontal: 30,
    borderRadius: 10,
    // backgroundColor: 'green',
    marginHorizontal: 15,
    justifyContent: "center",
    marginTop: 35,
  },
})