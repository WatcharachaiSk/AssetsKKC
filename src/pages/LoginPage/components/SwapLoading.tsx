import { StyleSheet, Text, Modal, ActivityIndicator, View } from "react-native";
import LottieView from "lottie-react-native";
import React from "react";
import json from "../../../config/json";

const SwapLoading = (props: any) => {
  const { isLoading } = props;
  return (
    <Modal transparent={true} animationType={"none"} visible={isLoading}>
      <View style={styles.container}>
        <LottieView
          style={{ height: 200, width: 200 }}
          source={json.loadingListPage}
          autoPlay
          loop
        />
      </View>
    </Modal>
  );
};

export default SwapLoading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'rgba(255,255,255,0.35)',
  },
});
