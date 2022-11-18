import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper';
import images from '../../config/img';
import { widthOfWindow } from '../../utils/getDimension';
import ListPage from '../ListPage/ListPage';
import { AppScreens } from '../../navigators/NavigeteEnum/NavigateEnum';

const LoginPage = (props: any) => {
  const navigation = props.navigation
  const [text, setText] = useState<string>("");


  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: '#757575' }}>
      <View style={{ flex: 0, marginVertical: 30, alignItems: 'center' }}>
        <Image source={images.Welcome} />
      </View>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Image source={images.RMUTI_KKC} resizeMode='contain' style={styles.logo} />
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ margin: 15 }}>
          <TextInput
            style={{ fontSize: 20 }}
            label="Username"
            value={text}
            onChangeText={text => setText(text)}
          />
          <View style={{ marginTop: 15 }}>
            <TextInput
              style={{ fontSize: 20 }}
              label="Password"
              value={text}
              onChangeText={text => setText(text)}
            />
          </View>
        </View>
        <View style={{ flex: 0, marginTop: 20 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate(AppScreens.ListPage)}
            style={styles.ButtonLogin}>
            <Text style={{ color: '#fff' }}>LOGIN</Text>

          </TouchableOpacity>

        </View>
        <View style={{ flex: 0, marginTop: 20 }}>
          <Text style={{ textAlign: 'center', fontSize: 14 }}>
            สาขาวิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ {'\n'}
            มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน วิทยาเขตขอนแก่น
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default LoginPage

const styles = StyleSheet.create({
  ButtonLogin: {
    padding: 12, backgroundColor: '#000', alignSelf: "center",
    justifyContent: "center", paddingHorizontal: 18, borderRadius: 5
  },
  logo: {
    width: widthOfWindow * 0.6, height: widthOfWindow * 0.75
  }

})