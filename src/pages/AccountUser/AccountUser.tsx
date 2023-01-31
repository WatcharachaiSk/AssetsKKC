import { StyleSheet, Text, TouchableOpacity, View, Dimensions, ScrollView, Image } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { colors } from '../../config/colors'
import { heightOfWindow, widthOfWindow } from '../../utils/getDimension'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import ModalLogout from './ModalLogout/ModalLogout'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BlurView } from "@react-native-community/blur";
import { GetKanitFont } from '../../config/fonts'
import globleStyles from '../../config/globleStyles'
import axios from 'axios'
import configAxios from '../../axios/configAxios'
import { API } from '../../axios/swr/endpoint'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { baseURL, PATH_IMAGE_PROFILE } from '../../axios/config';
import { RFPercentage } from "react-native-responsive-fontsize";
const { height } = Dimensions.get("window");

//console.log(`${baseURL}${PATH_IMAGE_PROFILE}${getProfile.name_image}`);


const AccountUser = (props: any) => {
  const [fetching, setFetching] = useState(true);
  const { itemShow } = props;
  const navigation = props.navigation;
  const [getProfile, setGetProfile] = useState<any>();

  const { item, isPage } = props?.route?.params || [""];

  useMemo(async () => {
    // await AsyncStorage.setItem("accessToken", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwiYWRtaW4iOnRydWUsImlhdCI6MTY3MDY2MjkxMSwiZXhwIjoxNjcwNjgwOTExfQ.DiD_YTTo90DHCKyCJ4-gkC4FI5QL3oFB1girKCRD1Xo");

    // const data = {
    //   itemItemId: 1,
    //   locationLId: 1,
    //   status: 0,
    //   note: "เสียหายนะ"
    // }
    try {
      if (fetching) {
        const res = await axios(await configAxios('get', `${API.getProfile}`))
        setGetProfile(res?.data);
        setFetching(false)
      }


    } catch (error) {
      console.log(error);

    }
  }, [fetching])

  // ? focus navigation
  useEffect(() => {
    //console.log('tessssssssss');

    const unsubscribe = navigation.addListener("focus", async () => {
      const res = await axios(await configAxios('get', `${API.getProfile}`))
      setGetProfile(res?.data);
      // await mutate();

    });
    return unsubscribe;
  }, [navigation]);

  const [showSWModal, setShowSWModal] = React.useState(false);

  const onClickSwap = () => {
    setShowSWModal(true);
    //console.log('showSWModal'+showSWModal)
  };
  const onClose = () => {
    setShowSWModal(false);
    // setShowConfirmModal(false)
  };

  const onConfirm = async () => {
    setShowSWModal(false);
    await AsyncStorage.removeItem("accessToken");
    navigation.navigate("LoginPage", { isLogout: true });
  };



  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>

      <ModalLogout
        showSWModal={showSWModal}
        onClose={onClose}
        onConfirm={onConfirm}
        setShowSWModal={setShowSWModal}
      />
      {showSWModal
        && (
          <BlurView
            style={styles.absolute}
            blurType="dark"
            blurAmount={1}
            reducedTransparencyFallbackColor="gray" />
        )
      }
      <ScrollView>


        <View style={globleStyles.headers}>
          <Text style={globleStyles.texthead}>ข้อมูลผู้ใช้งาน</Text>
        </View>


        {/* imageProfile */}
        <View style={{ alignItems: 'center' }}>

          <View style={{ alignSelf: 'center', marginTop: 25 }}>
            {getProfile?.name_image ?
              <Image style={styles.viewImage}
                source={{ uri: `${baseURL}${PATH_IMAGE_PROFILE}${getProfile.name_image}` }}
              />
              : <>
                <View style={styles.viewImage}>
                  <FontAwesome5 name="user-alt" size={140} color={'#fff'}></FontAwesome5>
                </View>
              </>
            }

          </View>

        </View>


        <View style={{ margin: 10 }}>
          <Text style={{ fontSize: RFPercentage(2.5), fontWeight: 'bold' }}>Username</Text>
          <View style={{ alignItems: 'center' }}>
            <View style={styles.nameAndPhone}>
              <View style={styles.viewText}>
                <Text style={styles.textShow}>{getProfile?.firstname} {getProfile?.lastname}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ marginVertical: 10, margin: 10 }}>
          <Text style={{ fontSize: RFPercentage(2.5), fontWeight: 'bold' }}>Phone Number</Text>
          <View style={{ alignItems: 'center' }}>
            <View style={styles.nameAndPhone}>
              <View style={styles.viewText}>
                <Text style={styles.textShow}>{getProfile?.telephone}</Text>
              </View>

            </View>
          </View>
        </View>


        {/* LogOut */}
        <View style={{ alignItems: 'flex-end', flex: 2, left: 110 }}>
          <View style={{ marginVertical: 5 }}>
            <TouchableOpacity
              onPress={onClickSwap}
              style={styles.logOut} >
              <View style={{ justifyContent: "center", marginLeft: 10 }}>
                <Text style={styles.textLogOut}>Logout</Text>
              </View>
              <View style={styles.viewIcon_LO}>
                <Feather
                  name="log-out"
                  size={heightOfWindow * 0.03}
                  style={{ color: "#fff" }}
                />
              </View>
            </TouchableOpacity>

          </View>

        </View>



      </ScrollView>
    </SafeAreaView>
  )
}

export default AccountUser

const styles = StyleSheet.create({
  nameAndPhone: {
    flex: 0,
    backgroundColor: colors.black,
    width: widthOfWindow * 0.9,
    height: heightOfWindow * 0.08,
    borderRadius: 5,
    // borderColor : colors.blackGray,
    // borderWidth:2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

  },
  viewText: {
    marginHorizontal: 20,
    justifyContent: "center",
    flex: 1,
  },
  logOut: {
    flex: 0,
    backgroundColor: colors.red,
    marginHorizontal: 120,
    marginTop: height > 600 ? 60 : 50,
    borderRadius: widthOfWindow * 0.02,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: height > 600 ? 5 : 3

  },
  textLogOut: {
    fontSize: RFPercentage(2.5),
    ...GetKanitFont("regular"),
    textAlign: "right",
    color: "#fff",
  },
  viewIcon_LO: {
    justifyContent: "flex-start",
    margin: 4,
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 999,
  },
  viewImage: {
    backgroundColor: colors.black,
    width: height > 600 ? widthOfWindow * 0.58 : widthOfWindow * 0.51,
    height: heightOfWindow * 0.3,
    borderRadius: 300 / 2,
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textShow: {
    fontSize: RFPercentage(3),
    textAlign: 'left',
    ...GetKanitFont('regular'),
    color: colors.white
  },

})