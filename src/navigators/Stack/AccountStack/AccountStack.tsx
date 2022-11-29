import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountUser from '../../../pages/AccountUser/AccountUser';
import { AppScreens } from '../../NavigeteEnum/NavigateEnum';
import LoginPage from '../../../pages/LoginPage/LoginPage';
import LoginStack from '../LoginStack/LoginStack';

const Stack = createNativeStackNavigator();
const AccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AppScreens.AccountUser}
        component={AccountUser}
        options={({navigation, route}) => ({headerShown: false})}
      />
      {/* <Stack.Screen
        name={AppScreens.LoginStack} 
        component={LoginStack}
        options={({navigation, route}) => ({headerShown: false})}
      /> */}
    </Stack.Navigator>
  );
}

export default AccountStack