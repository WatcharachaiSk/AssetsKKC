import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import globleStyles from '../../config/globleStyles'
import { colors } from '../../config/colors'
import images from '../../config/img'
import { widthOfWindow, heightOfWindow } from '../../utils/getDimension'
import { ScrollView } from 'react-native-gesture-handler'
import { GetKanitFont } from '../../config/fonts'



const DetailAfterScan = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <ScrollView >




        <View style={globleStyles.headers}>
          <Text style={globleStyles.texthead}>รายละเอียดครุภัณฑ์</Text>
        </View>

        <View style={{  flex: 2, alignItems: 'center' }}>
          <View style={{ backgroundColor: colors.white, flex: 1, width: widthOfWindow * 0.9, height: heightOfWindow * 0.3, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={images.monitor} style={{ width: widthOfWindow * 0.8, height: heightOfWindow * 0.3 }} />
          </View>

          <View style={{ backgroundColor: '#000', flex: 1, width: widthOfWindow * 0.95, height: heightOfWindow * 0.4, borderRadius: 25 }}>

          </View>
        </View>
        <View>
          <TouchableOpacity style={{ backgroundColor: colors.Gray , padding: 20, marginHorizontal: 40, margin: 10, borderRadius: 10 }}>
            <Text style={{fontSize:20, ...GetKanitFont('medium'),textAlign:'center',color:'#000'}}>ตรวจสอบสถานะครุภัณฑ์</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default DetailAfterScan

const styles = StyleSheet.create({})