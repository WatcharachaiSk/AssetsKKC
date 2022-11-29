import { StyleSheet, Text, TouchableOpacity, View, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { colors } from '../../config/colors'
import { heightOfWindow, widthOfWindow } from '../../utils/getDimension'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import ModalLogout from './ModalLogout/ModalLogout'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BlurView } from "@react-native-community/blur";
import { GetKanitFont } from '../../config/fonts'
import { AppScreens } from '../../navigators/NavigeteEnum/NavigateEnum'

const { height } = Dimensions.get("window");



const AccountUser = ( props: any) => {

  const navigation = props.navigation;


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

   
    //setShowConfirmModal(true);
    // await AsyncStorage.removeItem("accessToken");
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


        <View style={{ padding: 25, backgroundColor: colors.Gray, marginVertical: 15 }}>
          <Text style={styles.texthead}>ข้อมูลผู้ใช้งาน</Text>
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
                <Text style={styles.textShow}>isariya roopkhan</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ marginVertical: 10, margin: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Phone Number</Text>
          <View style={{ alignItems: 'center' }}>
            <View style={styles.nameAndPhone}>
              <View style={styles.viewText}>
                <Text style={styles.textShow}>099-6587489</Text>
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
  texthead:{
    fontSize: 22, color: colors.black,  ...GetKanitFont("medium") 
  }
})