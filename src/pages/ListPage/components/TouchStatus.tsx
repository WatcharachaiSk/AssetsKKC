import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../../../config/colors";
import { RFPercentage } from "react-native-responsive-fontsize";
import { widthOfWindow } from "../../../utils/getDimension";
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
            backgroundColor: isTouch === "all" ? colors.black : colors.Gray,
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
            backgroundColor: isTouch == true ? colors.black : colors.Gray,
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
            backgroundColor: !isTouch ? colors.black : colors.Gray,
          },
        ]}
      >
        <Text
          style={[
            styles.textStatus,
            {
              color: !isTouch ? colors.white : colors.black,
            },
          ]}
        >
          ชำรุด
        </Text>
      </TouchableOpacity>


    </>
  );
};

export default TouchStatus;

const styles = StyleSheet.create({
  StyleTouchStatus: {
    flex: 1,
    padding: 11,
    width: widthOfWindow * 0.35,
    // marginHorizontal: 10,
    // borderRadius: 10,
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
    fontSize: RFPercentage(2.2),
    textAlign: 'center',
  },
});
