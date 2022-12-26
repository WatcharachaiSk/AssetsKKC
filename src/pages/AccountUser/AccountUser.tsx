import { StyleSheet, Text, TouchableOpacity, View, Dimensions, ScrollView } from 'react-native'
import React, { useMemo, useState } from 'react'
import { colors } from '../../config/colors'
import { heightOfWindow, widthOfWindow } from '../../utils/getDimension'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import ModalLogout from './ModalLogout/ModalLogout'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BlurView } from "@react-native-community/blur";
import { GetKanitFont } from '../../config/fonts'
import { AppScreens } from '../../navigators/NavigeteEnum/NavigateEnum'
import globleStyles from '../../config/globleStyles'
import axios from 'axios'
import configAxios from '../../axios/configAxios'
import { API } from '../../axios/swr/endpoint'
import AsyncStorage from '@react-native-async-storage/async-storage'
const { height } = Dimensions.get("window");



const AccountUser = ( props: any) => {
  const {itemShow} = props;
  const navigation = props.navigation;
  const [getProfile, setGetProfile] = useState<any>();
//   const itemShow = props?.route?.params.item || [""];
useMemo(async () => {
  // await AsyncStorage.setItem("accessToken", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwiYWRtaW4iOnRydWUsImlhdCI6MTY3MDY2MjkxMSwiZXhwIjoxNjcwNjgwOTExfQ.DiD_YTTo90DHCKyCJ4-gkC4FI5QL3oFB1girKCRD1Xo");

  const data = {
    itemItemId: 1,
    locationLId: 1,
    status: 0,
    note: "เสียหายนะ"
  }
  try {
    // const res = await axios(configAxios('get',API.getItem))
    const res = await axios(await configAxios('get', `${API.getProfile}`))
    // const res = await postLogin("admin", "systemadministrator")
    // const res = await axios(await configAxios('post', API.updateStetus, data))
    // console.log(res?.data);
    //setIsTouch(res.data[1].item_id)
    setGetProfile(res?.data);
//  console.log(res?.data);
  
  } catch (error) {
    console.log(error);

  }
}, [])

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
          <View style={styles.viewImage}>
            <View style={{ alignSelf: 'center', marginTop: 35 }}>
              <FontAwesome5 name="user-alt" size={140} color={'#fff'}></FontAwesome5>
            </View>
          </View>
        </View>


        <View style={{ margin: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Username</Text>
          <View style={{ alignItems: 'center' }}>
            <View style={styles.nameAndPhone}>
              <View style={styles.viewText}>
                <Text style={styles.textShow}>{getProfile?.firstname} {getProfile?.lastname}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ marginVertical: 10, margin: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Phone Number</Text>
          <View style={{ alignItems: 'center' }}>
            <View style={styles.nameAndPhone}>
              <View style={styles.viewText}>
                <Text style={styles.textShow}>{getProfile?.telephone}</Text>
              </View>

            </View>
          </View>
        </View>


        {/* LogOut */}
        <View style={{ alignItems: 'flex-end', left: 110 }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              onPress={onClickSwap}
              style={styles.logOut} >
              <View style={{ justifyContent: "center", marginLeft: 10 }}>
                <Text style={styles.textLogOut}>Logout</Text>
              </View>
              <View style={styles.viewIcon_LO}>
                <Feather
                  name="log-out"
                  size={30}
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
    backgroundColor: colors.Gray,
    width: widthOfWindow * 0.9,
    height: heightOfWindow * 0.08,
    borderRadius: 5,
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
    marginHorizontal: 130,
    marginTop: height > 600 ? 60 : 65,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

  },
  textLogOut: {
    fontSize: 20,
    ...GetKanitFont("regular"),
    textAlign: "right",
    color: "#fff",
  },
  viewIcon_LO: {
    justifyContent: "flex-start",
    margin: 5,
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
    width: widthOfWindow * 0.58,
    height: heightOfWindow * 0.3,
    borderRadius: 300 / 2,
    margin: 15
  },
  textShow: {
    fontSize: 20,
    textAlign: 'left',
    ...GetKanitFont('regular')
  },

})