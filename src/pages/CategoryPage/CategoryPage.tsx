import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import { Searchbar } from 'react-native-paper';
import TouchStatus from '../ListPage/components/TouchStatus';
import { heightOfWindow, widthOfWindow } from '../../utils/getDimension';
import { colors } from '../../config/colors';
import Touchtype from './components/Touchtype';
import _ from 'lodash';


const CategoryPage = (props: any) => {


  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = (query: string) => setSearchQuery(query);

  const [isTouchType, setIsTouchType] = useState<any>("all");
  const [getItems, setGetItems] = useState<any>();


  const setTouchType = (type: any) => {
    setIsTouchType(type);
  };


  console.log(getItems);



  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>


      {/* Searchbar */}
      <View style={{ marginTop: 20 }}>
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

            {_.map(getItems, item => {
              return (
                <TouchableOpacity
                  key={item?.item_id}
                  style={styles.items}>
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
    marginHorizontal: 5,
    backgroundColor: colors.black,
    width: widthOfWindow * 0.29,
    height: heightOfWindow * 0.2,
    marginTop: 5, borderRadius: 15
  }
})