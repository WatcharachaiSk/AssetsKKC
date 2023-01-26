import { StyleSheet, Text, TouchableOpacity, View, Image, Dimensions, TouchableHighlight, ScrollView } from 'react-native'
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
import { ImageSlider } from "react-native-image-slider-banner";
import _ from "lodash";

const { height } = Dimensions.get("window");
const DetailfromList = (props: any) => {
  const navigation = props.navigation;
  // const {itemFC} =props;
  const { item, isPage } = props?.route?.params || [""];

  const [getItemByID, setGetItemByID] = useState<any>(undefined);
  const [imageItems, setImageItems] = useState<any>([0]);
  //console.log( `${baseURL}${PATH_IMAGE_ITEM}${item.name_image_item}`);
  //console.log(item);




  useMemo(async () => {
    if (isPage == "Category")
      try {
        const res = await axios(await configAxios('get', `${API.getItemById}${item.item_id}`))
        setGetItemByID(res?.data)


        // for (let index = 0; index < item?.name_image_item; index++) {
        //   arrImage.push({ img: `${baseURL}${PATH_IMAGE_ITEM}${item?.name_image_item}` })

        // }
        // //console.log(item?.name_image_item);

        // setImageItems(arrImage)

      } catch (error) {
        console.log(error);

      }
  }, [])


  // data={[

  //   { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU' },
  //   { img: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg' },
  //   { img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg' }
  // ]}
  // console.log(item);

  //   console.log(item?.img_items.length);

  //console.log('tessssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',getItemByID);


  // let arrImage: { img: string; }[] = [];
  // if ( isPage == 'Category') {
  //   console.log('redfhskjahfoifnajhdrhrhgttv5hfbeo');
  //   for (let i = 0; i < item?.img_items.length; i++) {
  //     arrImage.push({ img: `${baseURL}${PATH_IMAGE_ITEM}${item?.name_image_item}` })

  //   }
  //   console.log(arrImage);
  //   setImageItems(arrImage)

  // }
  useEffect(() => {
    let arrImage = [];
    console.log('item?.img_items', item?.img_items);
    if (isPage != 'Category') {
      for (let i = 0; i < item?.img_items?.length; i++) {
        arrImage.push({ img: `${baseURL}${PATH_IMAGE_ITEM}${item?.img_items[i].name_image_item}` })
      }
      setImageItems(arrImage)
    } else {
      console.log('redefhytdasj');
      if (getItemByID) {
        for (let i = 0; i < getItemByID?.img_items?.length; i++) {
          arrImage.push({ img: `${baseURL}${PATH_IMAGE_ITEM}${getItemByID?.img_items[i].name_image_item}` })
        }
        setImageItems(arrImage)
      }

    }
    //arrImage.push({ img: `${baseURL}${PATH_IMAGE_ITEM}${item?.name_image_item}` })



    console.log(arrImage);


  }, [item,getItemByID])


  return (
    <ScrollView >
      <View style={{ flex: 0, backgroundColor: colors.white }}>
        <TouchableOpacity
          style={styles.goBack}
          onPress={() => navigation.goBack()}>
          <IconAntDesign name="left" size={20} color="#AFADAD"></IconAntDesign>
          <Text style={styles.textgoBack}>ย้อนกลับ</Text>
        </TouchableOpacity>

        <View style={{ alignItems: 'center', marginTop: 20, flex: 1 }}>
          {item?.name_image_item != null ? (

            <ImageSlider
              data={imageItems}
              autoPlay={false}
              //onItemChanged={(item) => console.log("item", item)}
              closeIconColor="#fff"

            />

          ) : (
            <Image style={{ width: widthOfWindow * 0.85, height: heightOfWindow * 0.4, flex: 0 }}
              source={images.up_img} />
          )

            // {/* 
            // {item?.name_image_item ?
            //   <Image style={{ width: widthOfWindow * 0.9, height: heightOfWindow * 0.4, flex: 0 }}
            //     source={{ uri: `${baseURL}${PATH_IMAGE_ITEM}${item?.name_image_item}` }} />
            //   :
            //   <Image style={{ width: widthOfWindow * 0.85, height: heightOfWindow * 0.4, flex: 0 }}
            //     source={images.up_img} />
            // } */}

          }

        </View>

        <View style={{ flex: 1, marginTop: 150 }}>
          {getItemByID != undefined &&
            <BottomSheet itemShow={getItemByID} />
          }
          {isPage !== "Category" &&
            <BottomSheet itemShow={item} />}
        </View>




      </View>
    </ScrollView >
  )
}

export default DetailfromList

const styles = StyleSheet.create({
  goBack: {
    flex: 0, flexDirection: 'row', margin: widthOfWindow * 0.05
  },
  textgoBack: {
    fontSize: RFPercentage(2.5), ...GetKanitFont('regular')
  },
  content2: {
    width: '100%',
    height: 20,
    marginTop: 5,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: { color: '#fff' },
  button: {
    margin: 3,
    width: 15,
    height: 15,
    opacity: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSelected: {
    opacity: 1,
    color: 'red',
  },
  customSlide: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  customImage: {
    width: 100,
    height: 100,
  },

})
