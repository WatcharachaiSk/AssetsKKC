import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import LottieView from "lottie-react-native";
import { GetKanitFont } from '../../../config/fonts';
import { colors } from "../../../config/colors";
import json from '../../../config/json';
import { heightOfWindow, widthOfWindow } from '../../../utils/getDimension';



const Modalload = (props: any) => {
  const { showModal, onPressLogin, setShowModal, onClose, statusUser, checked } = props;
  const [check, setCheck] = useState<any>()
  console.log(statusUser);
    console.log(checked);

  useEffect(() => {
    
    if (statusUser == true && checked == false) {
      setCheck("user")
    }
    if (statusUser == false) {
      setCheck("userBlock")
    }
  }, [statusUser, checked])



  return (

    <Modal
      animationType="slide"
      transparent={true}
      visible={showModal || false}
      onRequestClose={() => onClose()}
    >
      <View style={styles.containerModal}>
        <View style={styles.viewDetailModal}>
          <LottieView
            source={json.error}
            autoPlay
            loop
            style={{ flex: 0, width: widthOfWindow * 0.6, height: heightOfWindow * 0.4, margin: 20, alignItems: 'center' }}
            resizeMode="contain"
          />
          <View style={{ justifyContent: "center" }}>
            <Text style={styles.textQT}>
              {check == "user" && 'ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง  \n กรุณาลองใหม่อีกครั้ง'}
              {check == "userBlock" && 'บัญชีผู้ใช้นี้โดนปิดการใช้งาน \n กรุณาติดต่อผู้ดูเเลระบบ'}

            </Text>
          </View>
          <View style={{ flexDirection: "row", margin: 15 }}>
            <TouchableOpacity
              onPress={() => {
                setShowModal(false)
                setTimeout(async () => {
                  onClose();
                }, 500);

              }}
              style={[
                styles.buttonModal,
                { backgroundColor: colors.red },
              ]}
            >
              <Text style={styles.textButton}>ตกลง</Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    </Modal>
  )
}

export default Modalload

const styles = StyleSheet.create({
  containerModal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  viewDetailModal: {
    flex: 0,
    backgroundColor: "#fff",
    alignItems: "center",
    // margin: 20,
    borderRadius: 20,
    width: widthOfWindow * 0.85,
  },
  textQT: {
    color: "#000",
    fontSize: 20,
    textAlign: "center",
    ...GetKanitFont("regular"),
  },
  buttonModal: {
    alignItems: "center",
    alignSelf: "center",
    flex: 0,
    width: 80,
    height: 45,
    borderRadius: 10,
    // backgroundColor: 'green',
    marginHorizontal: 15,
    justifyContent: "center",
  },
  textButton: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    ...GetKanitFont("regular"),
  },
})