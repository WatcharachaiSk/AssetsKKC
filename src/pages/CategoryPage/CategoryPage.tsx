import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import { Searchbar } from 'react-native-paper';
import TouchStatus from '../ListPage/components/TouchStatus';
import { heightOfWindow, widthOfWindow } from '../../utils/getDimension';
import { colors } from '../../config/colors';
import Touchtype from './components/Touchtype';
import _ from 'lodash';
import images from '../../config/img';
import { GetKanitFont } from '../../config/fonts';
import { baseURL, PATH_IMAGE_ITEM } from '../../axios/config';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { chackStatusItemColor } from '../../config/chackItemStatus';
const { height } = Dimensions.get("window");

const CategoryPage = (props: any) => {

  const navigation = props.navigation;
  const [search, setSearch] = useState('');

  const [isTouchType, setIsTouchType] = useState<any>("all");
  const [getItems, setGetItems] = useState<any>();
  const [itemFilter, setItemFilter] = useState<any>();

  const setTouchType = (type: any) => {
    setIsTouchType(type);
  };






  const onChangeSearch = (text: string) => {
    if (text) {
      const newData = getItems.filter((item: any) => {
        const itemData = item?.name ?
          item.name.toLowerCase()
          : ''.toLowerCase()

        const textData = text.toLowerCase();


        return itemData.indexOf(textData) > -1;
      });
      setItemFilter(newData)
      setSearch(text);

    } else {

      setItemFilter(undefined)
      setSearch(text);

    }
  }


  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>


      {/* Searchbar */}
      <View style={{ marginTop: 20 }}>
        <Searchbar
          placeholder="Search.."
          onChangeText={onChangeSearch}
          value={search}
          style={{
            marginHorizontal: widthOfWindow * 0.04,
            height: heightOfWindow * 0.075,
            borderRadius: 10,
            backgroundColor: '#D9D9D9',
            marginTop: 10,
            marginBottom: 5
          }}
        />
      </View>


      {/* line */}
      <View style={styles.line}></View>


      <View style={{ flexDirection: 'row', flex: 1 }}>

        {/* type */}
        <View style={{ flex: 0, backgroundColor: colors.Gray, width: widthOfWindow * 0.36, }}>
          <ScrollView  contentContainerStyle={{ flexGrow: 1 }}>
            <Touchtype
              isTouch={isTouchType}
              setTouchType={setTouchType}
              setGetItems={setGetItems}
            />
          </ScrollView>
        </View>

        {/* items */}
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          {/* <Text>ปกติ   ชิ้น</Text> */}
          <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>

            {_.map(itemFilter != undefined ? itemFilter :  getItems , item => {
              //console.log(item.name_image_item);
             // console.log('getItems');
              return (
                <TouchableOpacity
                  onPress={() => {

                    navigation.navigate("DetailfromList", {
                      item: item, isPage: "Category"
                    })
                    // console.log('item=',item);

                  }}
                  key={item?.item_id}
                  style={styles.items}


                >
                  <View style={[styles.status, {
                    backgroundColor: chackStatusItemColor(item?.status_item)
                  }]}>

                  </View>


                  <View style={{ alignItems: 'center', margin: 5 }}>
                    {item?.name_image_item ? 
                      <Image
                        style={{ width: widthOfWindow * 0.2, height: heightOfWindow * 0.1, }}
                        source={{ uri: `${baseURL}${PATH_IMAGE_ITEM}${item?.name_image_item}` }} />
                      : <>
                        <Image
                          style={{ width: widthOfWindow*0.2, height: heightOfWindow * 0.1 }}
                          source={images.up_img} />
                      </>}


                    <Text ellipsizeMode='tail' numberOfLines={1} style={{ color: "#fff", fontSize: RFPercentage(2.2), textAlign: 'center', marginTop: 5, ...GetKanitFont("regular"), width:widthOfWindow*0.25 }}>{item?.name}</Text>

                  </View>



                </TouchableOpacity>

              )
            })}
            {getItems == 0 &&

              <View style={{ alignItems: 'center', flex: 1, margin: 20 }}>
                <Text style={{ textAlign: 'center', ...GetKanitFont('regular'), fontSize: RFPercentage(2.5) }}>ไม่พบข้อมูลครุภัณฑ์</Text>
              </View>
            }



          </View>
        </ScrollView>

      </View>

      {/* </ScrollView> */}
    </View>
  )
}

export default CategoryPage

const styles = StyleSheet.create({
  line: {
    padding: 2,
    width: widthOfWindow * 1,
    backgroundColor: colors.Gray,
    alignSelf: 'center',
    marginTop: 5,

  },
  items: {
    flex: 0,
    marginHorizontal: 5,
    backgroundColor: colors.black,
    width: height > 600 ? widthOfWindow * 0.29 : widthOfWindow * 0.27,
    height: height > 600 ? heightOfWindow * 0.2 : heightOfWindow * 0.22,
    marginTop: 5, borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  status: {
    padding: height > 600 ? 12 : 10,
    width: 20,
    borderRadius: 12,
    alignSelf: 'flex-end',
    margin: 5
  }
})