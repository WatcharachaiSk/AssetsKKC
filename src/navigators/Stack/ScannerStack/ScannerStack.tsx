import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppScreens } from '../../NavigeteEnum/NavigateEnum';
import Scanner from '../../../pages/Scanner/Scanner';
import DetailAfterScan from '../../../pages/DetailAfterScan/DetailAfterScan';




const Stack = createNativeStackNavigator();
const ScannerStack = () => {
  return (
    <Stack.Navigator initialRouteName="Scanner">
      <Stack.Screen
        name={AppScreens.Scanner}
        component={Scanner}
        options={({navigation, route}) => ({headerShown: false})}
      />
        <Stack.Screen
        name={AppScreens.DetailAfterScan}
        component={DetailAfterScan}
        options={({navigation, route}) => ({headerShown: false})}
      />
    </Stack.Navigator>
  );
}

export default ScannerStack