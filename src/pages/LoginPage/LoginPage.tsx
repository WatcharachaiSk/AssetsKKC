import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TextStyle, TextInput, KeyboardAvoidingView, ScrollView, Alert, Dimensions } from 'react-native'
import React, { useState, useEffect, useMemo } from 'react'
import images from '../../config/img';
import { heightOfWindow, widthOfWindow } from '../../utils/getDimension';

import { AppScreens } from '../../navigators/NavigeteEnum/NavigateEnum';
import { GetKanitFont } from '../../config/fonts';
import { colors } from '../../config/colors';
import ListPage from '../ListPage/ListPage';
import { useNavigation } from '@react-navigation/native';
import Navigation from '../../navigators/navigators';
import AppStack from '../../navigators/Stack/AppStack/AppStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import configAxios from '../../axios/configAxios';
import { API } from '../../axios/swr/endpoint';
import postLogin from '../../axios/postLogin';
import Modalload from './components/Modalload';
import { BlurView } from '@react-native-community/blur';

import { RFPercentage } from 'react-native-responsive-fontsize';
import SwapLoading from './components/SwapLoading';
const { height } = Dimensions.get("window");

const LoginPage = (props: any) => {
   const [showModal, setShowModal] = React.useState(false);

   const navigation = props.navigation;
   const [text, setText] = useState<string>("");
   const [isLoading, setIsLoading] = useState(true);
   const [statusLogout, setStatusLogout] = useState(false);

   const [username, setUsername] = useState<string>("");
   const [password, setPassword] = useState<string>("");
   const [statusUser, setStatusUser] = useState(false);
   const [checked, setChecked] = useState<boolean>(true);
   const onClose = () => {
      setShowModal(false);
      // setShowConfirmModal(false)
   };

   const onPressLogin = async () => {
      const res: any = await postLogin(username, password)
      //console.log('hegdqyjkwwwwkkghieuhfoije');
      
      if (res.status == 200 || res.token != undefined) {
         //console.log("status", res.status);

         //ตรวจสอบการโดนบล็อก
         if (res?.data?.user?.user_status == true) {
            await AsyncStorage.setItem("accessToken", res?.data?.user?.authentication_token);
            navigation.navigate("NavStack");
            setStatusUser(true);
            setChecked(true);
         } else {
            setShowModal(true);
            setChecked(false);
            setStatusUser(false);
            // console.log("เกิดข้อผิดพลาดกรุณาลองใหม่อีกครั้ง");
         }

         //console.log(res?.data?.user?.authentication_token);

      } else {
         setShowModal(true);
         setStatusUser(true);
         setChecked(false);
         //console.log("เกิดข้อผิดพลาดกรุณาลองใหม่อีกครั้ง", res);
      }
      setIsLoading(false);
   }


   // useEffect(() => {
   //    //console.log('euhrfu3jrfo2i3');
      
   //    if (props.route.params == undefined) {
   //       setStatusLogout(false);
   //    } else {
   //       setStatusLogout(true);
   //    }navigation
   //    // console.log(props.route.params);
   // }, [props.route.params]);

  // เช็ค Token
//   useEffect(() => {
//    const showtoke = async () => {
//      var token = await AsyncStorage.getItem("accessToken") ;
//      //console.log(token);
//      if (token != null) {
//        setIsLoading(true);
//        await onPressLogin();
//      }
//    };
//    showtoke();
//  }, []);



   return (


      <SafeAreaView style={{ flex: 1, }}>
      
         <Modalload
            showModal={showModal}
            onClose={onClose}
            setShowModal={setShowModal}
            statusUser={statusUser}
            checked={checked}
         />
         {
            showModal &&
            (
               <BlurView
                  style={styles.absolute}
                  blurType="dark"
                  blurAmount={1}
                  reducedTransparencyFallbackColor="gray" />
            )
         }

         <View style={{ flex: 4, }}>
         {/* <SwapLoading isLoading={isLoading} /> */}

            {/* bgHead */}
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
               <Image source={images.BG1} resizeMode='stretch' />
            </View>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
               {/* logo */}
               <View style={styles.viewlogo}>
                  <Image source={images.RMUTI_KKC} resizeMode='contain' style={styles.logo} />
               </View>


               <View style={{ flex: 1, }}>
                  {/* <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}> */}
                  <TextInput
                     style={styles.textInput}
                     value={username}
                     onChangeText={text => setUsername(text)}
                     placeholder='  Username'
                     placeholderTextColor='#fff'
                  />
                  <TextInput
                     style={styles.textInput}
                     value={password}
                     onChangeText={text => setPassword(text)}
                     placeholder='  Password'
                     secureTextEntry={true}

                     placeholderTextColor='#fff'
                  />
                  {/* </KeyboardAvoidingView> */}
               </View>

               <View style={{ flex: 1, margin: 20 }}>
                  <TouchableOpacity
                     onPress={() =>
                        onPressLogin()
                     }
                     // submit={setSubmit}
                     style={styles.ButtonLogin}>
                     <Text style={{ color: colors.black ,fontSize: RFPercentage(2.2) }}>LOGIN</Text>

                  </TouchableOpacity>

               </View>
               <View style={{ flex: 2, marginBottom: -200 }}>
                  <Text style={styles.text}>
                     สาขาวิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ {'\n'}
                     มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน วิทยาเขตขอนแก่น
                  </Text>
               </View>

               <View style={{ flex: 0, zIndex: -100 }}>
                  <Image source={images.BG2} resizeMode='cover' />
               </View>

            </ScrollView>
         </View>

      </SafeAreaView >
   )
}

export default LoginPage

const styles = StyleSheet.create({
   ButtonLogin: {
      padding: height > 600 ?  12 : 10,
      backgroundColor: colors.Gray,
      alignSelf: "center",
      justifyContent: "center",
      paddingHorizontal: 18,
      borderRadius: 5,
      flex: 0
   },
   logo: {
      width: height > 600 ? widthOfWindow * 0.65 : widthOfWindow * 0.5,
      height:  height > 600 ? heightOfWindow * 0.5 : heightOfWindow * 0.47
   },
   viewlogo: {
      flex: 1, alignItems: 'center', zIndex: -100, 
   },
   textInput: {
      fontSize: RFPercentage(2.7),
      backgroundColor: colors.black,
      color: '#fff',
      borderRadius: 10,
      marginTop: 15,
      marginHorizontal: 20
   },
   text: {
      textAlign: 'center',
      fontSize: RFPercentage(2.3),
      ...GetKanitFont("regular"),
      color: colors.black
   },
   absolute: {
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      zIndex: 999,
   },

})