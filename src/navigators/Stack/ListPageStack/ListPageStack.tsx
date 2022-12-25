import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppScreens } from '../../NavigeteEnum/NavigateEnum';
import ListPage from '../../../pages/ListPage/ListPage';
import DetailfromList from '../../../pages/DetailfromList/DetailfromList';
import CategoryPage from '../../../pages/CategoryPage/CategoryPage';

const Stack = createNativeStackNavigator();
const ListPageStack = () => {
  return (
    <Stack.Navigator initialRouteName={AppScreens.ListPage} screenOptions={{headerShown:false}}>
      <Stack.Screen
        name={AppScreens.ListPage}
        component={ListPage}
        options={({navigation, route}) => ({headerShown: false})}
      />
        <Stack.Screen
        name={AppScreens.DetailfromList}
        component={DetailfromList}
        options={({navigation, route}) => ({headerShown: false})}
      />
         {/* <Stack.Screen
        name={AppScreens.CategoryPage}
        component={CategoryPage}
        options={({navigation, route}) => ({headerShown: false})}
      /> */}
    </Stack.Navigator>
  );
}

export default ListPageStack