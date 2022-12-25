import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import { Searchbar } from 'react-native-paper';
import TouchStatus from '../ListPage/components/TouchStatus';
import { heightOfWindow, widthOfWindow } from '../../utils/getDimension';
import { colors } from '../../config/colors';
import Touchtype from './components/Touchtype';
import _ from 'lodash';
import images from '../../config/img';


const CategoryPage = (props: any) => {

  const navigation = props.navigation;
  const [search, setSearch] = useState('');

  const [isTouchType, setIsTouchType] = useState<any>("all");
  const [getItems, setGetItems] = useState<any>();
  const [itemFilter, setItemFilter] = useState<any>();

  const setTouchType = (type: any) => {
    setIsTouchType(type);
  };


  // console.log('getItems==',getItems);

  //console.log(getItems);

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
            marginHorizontal: 10,
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
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Touchtype
              isTouch={isTouchType}
              setTouchType={setTouchType}
              setGetItems={setGetItems}
            />
          </ScrollView>
        </View>

        {/* items */}
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>

            {_.map(itemFilter == undefined ? getItems : itemFilter, item => {
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
                  <View style={[styles.status,{
                    backgroundColor: item.status_item == true 
                    ? colors.greenConfirm
                    : colors.red
                  }]}>
                  
                  </View>

                  <View style={{ alignItems: 'center', margin: 5 }}>

                    <Image source={images.monitor} style={{ width: 80, height: 80, }} />
                    <Text style={{ color: "#fff", fontSize: 16, textAlign: 'center', marginTop: 10 }}>{item.name}</Text>
                  </View>
                </TouchableOpacity>

              )
            })}



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
    width: widthOfWindow * 0.29,
    height: heightOfWindow * 0.2,
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
  status :{
    padding: 12,width:20,borderRadius:12 ,alignSelf:'flex-end',margin:5
  }
})