import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import LottieView from "lottie-react-native";
import { GetKanitFont } from "../../../config/fonts";
import { colors } from "../../../config/colors";

const ModalLogout = (props: any) => {
  const { showSWModal, onClickSwap, onConfirm, onClose } = props;
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
            style={{ flex: 0, width: 250, height: 220,margin:20 }}
            resizeMode="contain"
          />
          <View style={{ justifyContent: "center" }}>
            <Text style={styles.textQT}>คุณต้องการออกจากระบบใช่หรือไม่</Text>
          </View>
          <View style={{ flexDirection: "row", margin: 15 }}>
            <TouchableOpacity
              onPress={() => {
                onConfirm();
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
    width: 335,
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
  textQT: {
    color: "#000",
    fontSize: 20,
    textAlign: "center",
    ...GetKanitFont("regular"),
  },
});
