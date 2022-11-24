import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import images from '../../config/img'
import React, { useState } from 'react'
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



const ListPage = (props: any) => {
  const navigation = props.navigation;



  //console.log("items = ", items);

  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = (query: string) => setSearchQuery(query);

  const [isTouch, setIsTouch] = useState<any>("all");

  const setTouchStatus = (status: any) => {
    setIsTouch(status);
  };

  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <View style={{ flex: 0, marginVertical: 30, alignItems: 'center' }}>
        <Image source={images.SCANnER} />
      </View>
      <Searchbar
        placeholder="Search.."
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{
          marginHorizontal: 10,
          borderRadius: 10,
          backgroundColor: '#D9D9D9',
          marginTop: 10,
          marginBottom: 5
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
          {_.map(DataMockup, item => {
            return (
              <TouchableOpacity
                key={item.id}
                onPress={() => navigation.navigate(AppScreens.DetailfromList)}

                style={styles.view_TouchItem}
              >
                <View style={styles.viewItem}>
                  <Text style={styles.fontnameItem}>{item.title}</Text>
                  <Text>{item.id}</Text>
                </View>
                <View
                  style={[styles.view_ContainerState, { flex: 0 }]}
                >
                  <View
                    style={[
                      styles.view_StateItem,
                      {
                        backgroundColor:
                          item.status == "true"
                            ? colors.greenConfirm
                            : colors.greenConfirm &&
                              item.status == "false"
                              ? colors.red
                              : colors.red
                      },
                    ]}
                  ></View>
                </View>
              </TouchableOpacity>
            )
          })}


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
    fontSize: 18, fontWeight: 'bold'
  },
  viewItem: {
    flexDirection: 'column', margin: 10, flex: 1
  }

})