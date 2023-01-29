import { Dimensions, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import LottieView from "lottie-react-native";
import { GetKanitFont } from "../../../config/fonts";
import { colors } from "../../../config/colors";
import { heightOfWindow, widthOfWindow } from '../../../utils/getDimension';
import { RFPercentage } from 'react-native-responsive-fontsize';

const { height } = Dimensions.get("window");
const ModalLogout = (props: any) => {
  const { showSWModal, onClickSwap, onConfirm, onClose, setShowSWModal } = props;
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showSWModal || false}
      onRequestClose={() => onClickSwap()}
    >
      <View style={styles.containerModal}>
        <View style={styles.viewDetailModal}>
          <LottieView
            source={require("../../../assets/json/100705-question.json")}
            autoPlay
            loop
            style={{ flex: 0, width: height > 600 ? 250 : 200, height: height > 600 ? 220 : 170, margin: 20 }}
            resizeMode="contain"
          />
          <View style={{ justifyContent: "center" }}>
            <Text style={styles.textQT}>คุณต้องการออกจากระบบใช่หรือไม่</Text>
          </View>
          <View style={{ flexDirection: "row", margin: 15 }}>
            <TouchableOpacity
              onPress={() => {
                setShowSWModal(false)
                setTimeout(async () => {
                  onConfirm();
                }, 500);

              }}
              style={[
                styles.buttonModal,
                { backgroundColor: colors.greenConfirm },
              ]}
            >
              <Text style={styles.textButton}>ใช่</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {

                onClose();
              }}
              style={[styles.buttonModal, { backgroundColor: colors.red }]}
            >
              <Text style={styles.textButton}>ไม่ใช่</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalLogout;

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
    margin: 20,
    borderRadius: 20,
    width: height > 600 ? 335 : 270,
  },

  buttonModal: {
    alignItems: "center",
    alignSelf: "center",
    flex: 0,
    width: height > 600 ? widthOfWindow * 0.2 : widthOfWindow * 0.2,
    height: height > 600 ? heightOfWindow * 0.06 : heightOfWindow * 0.06,
    borderRadius: height > 600 ? 10 : 5,
    // backgroundColor: 'green',
    marginHorizontal: 15,
    justifyContent: "center",
  },
  textButton: {
    color: "#fff",
    fontSize: RFPercentage(2.6),
    textAlign: "center",
    ...GetKanitFont("regular"),
  },
  textQT: {
    color: "#000",
    fontSize: RFPercentage(2.8),
    textAlign: "center",
    ...GetKanitFont("regular"),
  },
});
