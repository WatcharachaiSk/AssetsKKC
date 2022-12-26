import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { colors } from '../../config/colors';
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import BottomSheet from './components/BotttomSheet';
import { heightOfWindow, widthOfWindow } from '../../utils/getDimension';
import images from '../../config/img';
import { GetKanitFont } from '../../config/fonts';
import CategoryPage from '../CategoryPage/CategoryPage';
import axios from 'axios';
import configAxios from '../../axios/configAxios';
import { API } from '../../axios/swr/endpoint';

const DetailfromList = (props: any) => {

  // const {itemFC} =props;
  const { item, isPage } = props?.route?.params || [""];

  const [getItemByID, setGetItemByID] = useState<any>(undefined);

  //console.log('getItemByID=', getItemByID);


  useMemo(async () => {
    if (isPage == "Category")
      try {
        const res = await axios(await configAxios('get', `${API.getItemById} ${item.item_id}`))
        setGetItemByID(res?.data)
        // console.log("",res?.data);

      } catch (error) {
        console.log(error);

      }
  }, [])

  const navigation = props.navigation;
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <TouchableOpacity
        style={styles.goBack}
        onPress={() => navigation.goBack()}>
        <IconAntDesign name="left" size={20} color="#AFADAD"></IconAntDesign>
        <Text style={styles.textgoBack}>ย้อนกลับ</Text>
      </TouchableOpacity>

      <View style={{ alignItems: 'center' }}>
        <Image source={images.monitor} />
      </View>

      {/* <BottomSheet itemShow={getItemByID != undefined ? getItemByID : item}  /> */}
      {getItemByID != undefined &&
        <BottomSheet itemShow={getItemByID} />
      }
      {isPage !== "Category" &&
        <BottomSheet itemShow={item} />}

    </View>
  )
}

export default DetailfromList

const styles = StyleSheet.create({
  goBack: {
    flex: 0, flexDirection: 'row', margin: 20
  },
  textgoBack: {
    fontSize: 16, ...GetKanitFont('regular')
  }

})
