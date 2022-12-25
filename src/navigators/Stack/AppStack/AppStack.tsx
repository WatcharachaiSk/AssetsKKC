import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListPage from '../../../pages/ListPage/ListPage';
import DetailfromList from '../../../pages/DetailfromList/DetailfromList';
import CategoryPage from '../../../pages/CategoryPage/CategoryPage';

const AppStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="ListPage" >
      <Stack.Screen
        name="ListPage"
        component={ListPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailfromList"
        component={DetailfromList}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="CategoryPage"
        component={CategoryPage}
        options={{ headerShown: false }}
      /> */}


    </Stack.Navigator >
  )
}

export default AppStack;
