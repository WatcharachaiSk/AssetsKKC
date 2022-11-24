import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper';
import TouchStatus from '../ListPage/components/TouchStatus';
import { heightOfWindow, widthOfWindow } from '../../utils/getDimension';
import { colors } from '../../config/colors';
import Touchtype from './components/Touchtype';


const CategoryPage = (props: any) => {


  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = (query: string) => setSearchQuery(query);
  const [isTouch, setIsTouch] = useState<any>("all");
  const [isTouchType, setIsTouchType] = useState<any>("all");



  const setTouchStatus = (status: any) => {
    setIsTouch(status);
  };

  const setTouchType = (type: any) => {
    setIsTouchType(type);
  };


  return (
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

     {/* statusItems */}
      {/* <View style={{ marginTop: 15 }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <TouchStatus
            isTouch={isTouch}
            setTouchStatus={setTouchStatus}
          />
        </ScrollView>

      </View> */}


      <View style={styles.line}></View>
<ScrollView>
      <View style={{ flexDirection: 'row', flex: 0 }}>
     
          <View style={{ flex: 0, backgroundColor: colors.Gray, width: widthOfWindow * 0.36,  }}>
            <Touchtype
              isTouch={isTouchType}
              setTouchType={setTouchType}

            />
          </View>




        <View style={{ flex: 1,  flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
          <TouchableOpacity style={{ marginHorizontal: 5, backgroundColor: colors.black, width: widthOfWindow * 0.29, height: heightOfWindow * 0.2, marginTop: 5, borderRadius: 15 }}>

          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 5, backgroundColor: colors.black, width: widthOfWindow * 0.29, height: heightOfWindow * 0.2, marginTop: 5, borderRadius: 15 }}>

          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 5, backgroundColor: colors.black, width: widthOfWindow * 0.29, height: heightOfWindow * 0.2, marginTop: 5, borderRadius: 15 }}>

          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 5, backgroundColor: colors.black, width: widthOfWindow * 0.29, height: heightOfWindow * 0.2, marginTop: 5, borderRadius: 15 }}>

          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 5, backgroundColor: colors.black, width: widthOfWindow * 0.29, height: heightOfWindow * 0.2, marginTop: 5, borderRadius: 15 }}>

          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 5, backgroundColor: colors.black, width: widthOfWindow * 0.29, height: heightOfWindow * 0.2, marginTop: 5, borderRadius: 15 }}>

          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 5, backgroundColor: colors.black, width: widthOfWindow * 0.29, height: heightOfWindow * 0.2, marginTop: 5, borderRadius: 15 }}>

          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 5, backgroundColor: colors.black, width: widthOfWindow * 0.29, height: heightOfWindow * 0.2, marginTop: 5, borderRadius: 15 }}>

          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 5, backgroundColor: colors.black, width: widthOfWindow * 0.29, height: heightOfWindow * 0.2, marginTop: 5, borderRadius: 15 }}>

          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 5, backgroundColor: colors.black, width: widthOfWindow * 0.29, height: heightOfWindow * 0.2, marginTop: 5, borderRadius: 15 }}>

          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 5, backgroundColor: colors.black, width: widthOfWindow * 0.29, height: heightOfWindow * 0.2, marginTop: 5, borderRadius: 15 }}>

          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 5, backgroundColor: colors.black, width: widthOfWindow * 0.29, height: heightOfWindow * 0.2, marginTop: 5, borderRadius: 15 }}>

          </TouchableOpacity>
        </View>




      </View>
      </ScrollView>






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
})