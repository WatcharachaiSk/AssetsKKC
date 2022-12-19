import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Alert, FlatList } from 'react-native'
import images from '../../config/img'
import React, { useEffect, useMemo, useState } from 'react'
import { Searchbar } from 'react-native-paper';
import DetailfromList from '../DetailfromList/DetailfromList';
import TouchStatus from './components/TouchStatus';
import { colors } from '../../config/colors';
import { AppScreens } from '../../navigators/NavigeteEnum/NavigateEnum';
import { heightOfWindow } from '../../utils/getDimension';
import DataMockup from './components/DataMockup';
import _, { keys } from 'lodash'
import Icons from 'react-native-vector-icons/EvilIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { items } from '../../assets/json/items';
import { GetKanitFont } from '../../config/fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import configAxios from '../../axios/configAxios';
import { API } from '../../axios/swr/endpoint';
import postLogin from '../../axios/postLogin';


const ListPage = (props: any) => {
  const navigation = props.navigation;
  // const [item, setItem] = useState(DataMockup);
  const [getItemAll, setGetItemAll] = useState<any>();
  const [search, setSearch] = useState('');
  //const onChangeSearch = (query: string) => setSearchQuery(query);
  const [itemFilter, setItemFilter] = useState<any>([]);
  const [isTouch, setIsTouch] = useState<any>("all");



  useMemo(async () => {
    // await AsyncStorage.setItem("accessToken", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwiYWRtaW4iOnRydWUsImlhdCI6MTY3MDY2MjkxMSwiZXhwIjoxNjcwNjgwOTExfQ.DiD_YTTo90DHCKyCJ4-gkC4FI5QL3oFB1girKCRD1Xo");
    console.log();
    const data = {
      itemItemId: 1,
      locationLId: 1,
      status: 0,
      note: "เสียหายนะ"
    }
    try {
      // const res = await axios(configAxios('get',API.getItem))
      const res = await axios(await configAxios('get', `${API.getItem}`))
      // const res = await axios(await configAxios('post', API.updateStetus, data))
      // console.log(res?.data);
      //setIsTouch(res.data[1].item_id)
      setGetItemAll(res?.data);
    } catch (error) {
      console.log(error);

    }
  }, [])

  //console.log("items = ", items);



  const setTouchStatus = (status_item: any) => {
    setIsTouch(status_item);

  };

  // ? ค้นหา Item
  useEffect(() => {
    if (isTouch !== 'all') {
      let setData = _.filter(getItemAll, (data: any) => {
        return data?.status_item == isTouch;
      })
      setItemFilter(setData);
      console.log('setData+', setData[0].status_item);
    } else {
      setItemFilter(undefined)

    }

  }, [isTouch])

  const onChangeSearch = (text: string) => {
    const items = (itemFilter == undefined ? getItemAll : itemFilter)
    if (text) {
      const newData = items.filter((item: any) => {
        const itemData = item?.name ?
          item.name.toLowerCase()
          : ''.toLowerCase()

        const textData = text.toLowerCase();


        return itemData.indexOf(textData) > -1;
      });
      setItemFilter(newData)
      setSearch(text);

    } else {
      if (isTouch == true || isTouch == false) {
        if (isTouch !== 'all') {
          let setData = _.filter(getItemAll, (data: any) => {
            return data?.status_item == isTouch;
          })
          setItemFilter(setData);
          console.log('setData+', setData[0].status_item);
        } else {
          setItemFilter(undefined)
        }
      }
      else {
        setItemFilter(undefined)
      }
      setSearch(text);
    }


  }


  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <View style={{ flex: 0, marginVertical: 30, alignItems: 'center' }}>
        <Image source={images.SCANnER} />
      </View>
      <Searchbar
        placeholder="Search.."
        onChangeText={(text) => onChangeSearch(text)}
        value={search}
        style={{
          marginHorizontal: 10,
          borderRadius: 10,
          backgroundColor: '#D9D9D9',
          marginTop: 10,
          marginBottom: 5,

        }}
      />
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <TouchStatus
            isTouch={isTouch}
            setTouchStatus={setTouchStatus}
          />
        </ScrollView>
      </View>
      <ScrollView>
        <View style={{ flex: 1 }}>
          {_.map

            (itemFilter == undefined ? getItemAll : itemFilter
              , (item: any) => {

                return (
                  <TouchableOpacity
                    key={item.item_id}
                    onPress={() => {

                      navigation.navigate("DetailfromList" ,{
                        item: item,
                      })
                  
                    }

                    }

                    style={styles.view_TouchItem}
                  >
                    <View style={styles.viewItem}>
                      <Text style={styles.fontnameItem}>{item?.name}</Text>
                      {/* <Text style={styles.textID}>{item?.code}</Text> */}
                    </View>
                    <View
                      style={[styles.view_ContainerState, { flex: 0 }]}
                    >
                      <View
                        style={[
                          styles.view_StateItem,
                          {
                            backgroundColor:
                              item?.status_item
                                ? colors.greenConfirm
                                : colors.red
                          },
                        ]}
                      ></View>
                    </View>
                  </TouchableOpacity>
                )
              })}

          {/* <FlatList
            data={filteredDataSource}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemView}
          /> */}
        </View>
      </ScrollView>



    </View>

  )
}

export default ListPage

const styles = StyleSheet.create({
  view_TouchItem: {
    height: heightOfWindow * 0.1,
    backgroundColor: colors.white,
    marginVertical: 8,
    marginHorizontal: 5,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  view_ContainerState: {
    padding: 15,
    alignItems: "flex-end",
    //backgroundColor: '#000',
    justifyContent: "center",
  },
  view_StateItem: {
    borderRadius: 50,
    width: 25,
    height: 25,
    marginVertical: 5,
  },
  fontnameItem: {
    fontSize: 20,
    ...GetKanitFont('medium')
  },
  viewItem: {
    flexDirection: 'column', margin: 10, flex: 1,
    justifyContent:'center'
  },
  textID: {
    ...GetKanitFont('regular'), fontSize: 14
  },




})