import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { colors } from '../../config/colors';
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import BottomSheet from './components/BotttomSheet';
import { heightOfWindow, widthOfWindow } from '../../utils/getDimension';
import images from '../../config/img';
import { GetKanitFont } from '../../config/fonts';

const DetailfromList = (props: any) => {





  const navigation = props.navigation;
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <TouchableOpacity
        style={styles.goBack}
        onPress={() => navigation.goBack()}>
        <IconAntDesign name="left" size={20} color="#AFADAD"></IconAntDesign>
        <Text style={styles.textgoBack}>ย้อนกลับ</Text>
      </TouchableOpacity>

      <View style={{alignItems:'center'}}>
        <Image source={images.monitor} />
      </View>

      <BottomSheet />

    </View>
  )
}

export default DetailfromList

const styles = StyleSheet.create({
  goBack:{
    flex: 0, flexDirection: 'row', margin: 20 
  },
  textgoBack:{
    fontSize: 16 , ...GetKanitFont('regular')
  }

})
