import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppScreens } from '../../NavigeteEnum/NavigateEnum';
import DetailfromList from '../../../pages/DetailfromList/DetailfromList';


const Stack = createNativeStackNavigator();
const DetailfromListStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AppScreens.DetailfromList}
        component={DetailfromList}
        options={({navigation, route}) => ({headerShown: false})}
      />
    </Stack.Navigator>
  );
}

export default DetailfromListStack