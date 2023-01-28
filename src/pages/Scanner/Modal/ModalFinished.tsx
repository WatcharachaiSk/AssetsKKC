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
                <View style={{ flex: 0, marginTop: 10 }}>

                  <View style={styles.view_ContainerLottiv}>
                    <LottieView
                      resizeMode="contain"
                      style={{ flex: 0, width: 200, height: 200 }}
                      source={json.success}
                      autoPlay
                      duration={3000}
                      loop={true}
                    // onAnimationFinish={() => {
                    //   animationFinish();
                    // }}
                    />
                  </View>



                  {/* <View
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <Text style={styles.font_NameItem}>{nameTH}</Text>
              </View> */}
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
                        name="transfer-right"
                        size={40}
                        style={{ opacity: 0.9 }}
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
    width: widthOfWindow * 0.9,
    height: heightOfWindow * 0.4

  },
  view_ContainerLottiv: {
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "#000",
    flex: 0,
    // padding: 45,
    width: widthOfWindow * 0.8,
    height: heightOfWindow * 0.2
  },
  font_NameItem: {
    fontSize: RFPercentage(3.5),
    color: colors.black,
    ...GetKanitFont("medium"),
  },
  view_StatusOldNew: {
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    right: 5,
    // backgroundColor: "red",
  },
  font_Status: {
    fontSize: RFPercentage(3.5),
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