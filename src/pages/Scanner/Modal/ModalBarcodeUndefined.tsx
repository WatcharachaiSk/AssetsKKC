import { Modal, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import json from '../../../config/json';
import LottieView from "lottie-react-native";
import { colors } from '../../../config/colors';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { GetKanitFont } from '../../../config/fonts';
import { heightOfWindow, widthOfWindow } from '../../../utils/getDimension';


const ModalBarcodeUndefined = (props: any) => {
  const { itemRes, oldItem, onScanAgain, showbarcodeUndefined, setShowBarcodeUndefined, showModal } = props;
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={showbarcodeUndefined || false}
      onRequestClose={() => onScanAgain()}
    >


      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <SafeAreaView style={styles.container} >


          <View style={{ flex: 2 }}>
            <View style={styles.view_ContainerLottiv}>
              <LottieView
                resizeMode="contain"
                style={{ flex: 0, width: widthOfWindow * 0.45, height: heightOfWindow * 0.3, justifyContent: 'center', alignItems: 'center', marginTop: heightOfWindow * 0.04 }}
                source={json.barcodeERROR}
                autoPlay
                duration={3000}
                loop={true}
              // onAnimationFinish={() => {
              //   animationFinish();
              // }}
              />
            </View>


            <View
              style={{
                margin: 5,
              }}
            >
              <View style={{ justifyContent: "center",marginTop:20 }}>
                <Text style={styles.textQT}>
                  เกิดข้อผิดพลาด{"\n"}กรุณาลองใหม่อีกครั้ง
                
                </Text>
              </View>
              <Pressable
                onPress={() => {
                  setShowBarcodeUndefined(false)
                  setTimeout(async () => {
                    onScanAgain();
                  }, 500);
                }}
                style={[
                  styles.buttonModal,
                  { backgroundColor: colors.red },
                ]}
              >
                <Text style={styles.textButton}>สแกนต่อ</Text>
              </Pressable>
            </View>
          </View>


        </SafeAreaView>
      </View>



    </Modal>
  )
}

export default ModalBarcodeUndefined

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 15,
    opacity: 1,
    padding: 12,
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: widthOfWindow * 0.8,
    height: heightOfWindow * 0.4

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
    marginTop: 5,
  },
  textButton: {
    color: "#fff",
    fontSize: RFPercentage(2.5),
    textAlign: "center",
    ...GetKanitFont("regular"),
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
  textQT: {
    color: "#000",
    fontSize: 20,
    textAlign: "center",
    ...GetKanitFont("regular"),
  },
})