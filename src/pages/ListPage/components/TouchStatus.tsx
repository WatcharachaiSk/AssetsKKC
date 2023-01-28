import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../../../config/colors";
import { RFPercentage } from "react-native-responsive-fontsize";
import { heightOfWindow, widthOfWindow } from "../../../utils/getDimension";
import { GetKanitFont } from "../../../config/fonts";
import _ from "lodash";
import configAxios from '../../../axios/configAxios';
import { API } from '../../../axios/swr/endpoint';
import axios from 'axios';

const TouchStatus = (props: any) => {

  const { isTouch, setTouchStatus, getItemAll } = props;

  return (
    <>
      <TouchableOpacity
        onPress={() =>

          setTouchStatus("all")}
        style={[
          styles.StyleTouchStatus,
          {
            backgroundColor: isTouch === "all" ? colors.black : colors.white,
          },
        ]}
      >
        <Text
          style={[
            styles.textStatus,
            {
              color: isTouch === "all" ? colors.white : colors.black,
            },
          ]}
        >
          ทั้งหมด
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setTouchStatus(true)}
        style={[
          styles.StyleTouchStatus,
          {
            backgroundColor: isTouch == true ? colors.black : colors.white,
          },
        ]}
      >
        <Text
          style={[
            styles.textStatus,
            {
              color: isTouch == true ? colors.white : colors.black,
            },
          ]}
        >
          ปกติ
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setTouchStatus(false)}
        style={[
          styles.StyleTouchStatus,
          {
            backgroundColor: isTouch == false ? colors.black : colors.white,
          },
        ]}
      >
        <Text
          style={[
            styles.textStatus,
            {
              color: isTouch == false ? colors.white : colors.black,
            },
          ]}
        >
          ชำรุด
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setTouchStatus(4)}
        style={[
          styles.StyleTouchStatus,
          {
            backgroundColor: isTouch == 4 ? colors.black : colors.white,
          },
        ]}
      >
        <Text
          style={[
            styles.textStatus,
            {
              color: isTouch == 4? colors.white : colors.black,
            },
          ]}
        >
          รอหมายเลขครุภัณฑ์
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setTouchStatus(2)}
        style={[
          styles.StyleTouchStatus,
          {
            backgroundColor: isTouch == 2 ? colors.black : colors.white,
          },
        ]}
      >
        <Text
          style={[
            styles.textStatus,
            {
              color: isTouch == 2 ? colors.white : colors.black,
            },
          ]}
        >
          รอจำหน่าย
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setTouchStatus(3)}
        style={[
          styles.StyleTouchStatus,
          {
            backgroundColor: isTouch == 3 ? colors.black : colors.white,
          },
        ]}
      >
        <Text
          style={[
            styles.textStatus,
            {
              color: isTouch == 3 ? colors.white : colors.black,
            },
          ]}
        >
          จำหน่ายแล้ว
        </Text>
      </TouchableOpacity>

    </>
  );
};

export default TouchStatus;

const styles = StyleSheet.create({
  StyleTouchStatus: {
    flex: 1,
    padding: heightOfWindow * 0.015,
    width: widthOfWindow * 0.4,
    marginHorizontal: 5,
    borderWidth:1,
    borderColor :colors.Gray,
    borderRadius:10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textStatus: {
    ...GetKanitFont("medium"),
    fontSize: RFPercentage(2.3),
    textAlign: 'center',
  },
});
