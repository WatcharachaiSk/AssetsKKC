import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppScreens } from '../../NavigeteEnum/NavigateEnum';
import CategoryPage from '../../../pages/CategoryPage/CategoryPage';
import DetailfromList from '../../../pages/DetailfromList/DetailfromList';
import AppStack from '../AppStack/AppStack';


const Stack = createNativeStackNavigator();
const CategoryStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AppScreens.CategoryPage}
        component={CategoryPage}
        options={({navigation, route}) => ({headerShown: false})}
      />
          <Stack.Screen
        name={AppScreens.DetailfromList}
        component={DetailfromList}
        options={({navigation, route}) => ({headerShown: false})}
      />
    </Stack.Navigator>
  );
}

export default CategoryStack