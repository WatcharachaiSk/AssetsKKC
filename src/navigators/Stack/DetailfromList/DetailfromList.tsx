import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppScreens } from '../../NavigeteEnum/NavigateEnum';
import DetailfromList from '../../../pages/DetailfromList/DetailfromList';
import ListPage from '../../../pages/ListPage/ListPage';
import CategoryPage from '../../../pages/CategoryPage/CategoryPage';


const Stack = createNativeStackNavigator();
const DetailfromListStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AppScreens.DetailfromList}
        component={DetailfromList}
        options={({navigation, route}) => ({headerShown: false})}
      />
         {/* <Stack.Screen
        name={AppScreens.ListPage}
        component={ListPage}
        options={({navigation, route}) => ({headerShown: false})}
      /> */}
              {/* <Stack.Screen
        name={AppScreens.CategoryPage}
        component={CategoryPage}
        options={({navigation, route}) => ({headerShown: false})}
      /> */}

    </Stack.Navigator>
  );
}

export default DetailfromListStack