import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TextStyle, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import images from '../../config/img';
import { widthOfWindow } from '../../utils/getDimension';

import { AppScreens } from '../../navigators/NavigeteEnum/NavigateEnum';
import { GetKanitFont } from '../../config/fonts';
import { colors } from '../../config/colors';
import ListPage from '../ListPage/ListPage';
import { useNavigation } from '@react-navigation/native';
import Navigation from '../../navigators/navigators';
import AppStack from '../../navigators/Stack/AppStack/AppStack';




const LoginPage = (props: any) => {

   const navigation = props.navigation;
   const [text, setText] = useState<string>("");
   const [isLoading, setIsLoading] = useState(false);
   const [statusLogout, setStatusLogout] = useState(false);

   const [userName, setUserName] = useState<string>("");
   const [passWord, setPassWord] = useState<string>("");


   useEffect(() => {
      if (props.route.params == undefined) {
         setStatusLogout(false);
      } else {
         setStatusLogout(true);
      }
      // console.log(props.route.params);
   }, [props.route.params]);





   return (


      <SafeAreaView style={{ flex: 1, }}>

         <View style={{ flex: 4, }}>

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
                  <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
                     <TextInput
                        style={styles.textInput}
                        onChangeText={() => setUserName(userName)}
                        placeholder='  Username'
                        placeholderTextColor='#fff'
                     />
                     <TextInput
                        style={styles.textInput}
                        onChangeText={() => setPassWord(passWord)}
                        placeholder='  Password'
                        secureTextEntry={true}
                        placeholderTextColor='#fff'
                     />
                  </KeyboardAvoidingView>
               </View>

               <View style={{ flex: 1, margin: 20 }}>
                  <TouchableOpacity
                     onPress={() => navigation.navigate("NavStack")}
                     style={styles.ButtonLogin}>
                     <Text style={{ color: colors.black }}>LOGIN</Text>

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
      padding: 12,
      backgroundColor: colors.Gray,
      alignSelf: "center",
      justifyContent: "center",
      paddingHorizontal: 18,
      borderRadius: 5,
      flex: 0
   },
   logo: {
      width: widthOfWindow * 0.65,
      height: widthOfWindow * 0.8
   },
   viewlogo : {
      flex: 1, alignItems: 'center', zIndex: -100, top: -10 
   },
   textInput:{
      fontSize: 18, 
      backgroundColor: colors.black, 
      color: '#fff', 
      borderRadius: 10, 
      marginTop: 15, 
      marginHorizontal: 20
   },
   text:{
      textAlign: 'center', 
      fontSize: 14, 
      ...GetKanitFont("regular"), 
      color: colors.black
   }

})