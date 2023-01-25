import { StyleSheet, Text, TouchableOpacity, View, Image, Dimensions } from 'react-native'
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
import { baseURL, PATH_IMAGE_ITEM } from '../../axios/config';
import { RFPercentage } from 'react-native-responsive-fontsize';


const { height } = Dimensions.get("window");
const DetailfromList = (props: any) => {

  // const {itemFC} =props;
  const { item, isPage } = props?.route?.params || [""];

  const [getItemByID, setGetItemByID] = useState<any>(undefined);
  //console.log( `${baseURL}${PATH_IMAGE_ITEM}${item.name_image_item}`);


  useMemo(async () => {
    if (isPage == "Category")
      try {
        const res = await axios(await configAxios('get', `${API.getItemById}${item.item_id}`))
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

      <View style={{ alignItems: 'center', justifyContent: 'flex-end' ,marginTop: 30}}>
        {item?.name_image_item ?
          <Image style={{ width: widthOfWindow * 0.9, height: heightOfWindow * 0.4, flex: 0 }}
            source={{ uri: `${baseURL}${PATH_IMAGE_ITEM}${item?.name_image_item}` }} />
          :
          <Image style={{ width: widthOfWindow * 0.85, height: heightOfWindow * 0.4, flex: 0 }}
            source={images.up_img} />
        }
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
    flex: 0, flexDirection: 'row', margin: widthOfWindow * 0.05
  },
  textgoBack: {
    fontSize: RFPercentage(2.5), ...GetKanitFont('regular')
  }

})
