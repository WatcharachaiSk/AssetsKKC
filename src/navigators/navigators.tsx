import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavBottomTab from './Stack/NavStack/NavBottomTab';
import { AppScreens } from './NavigeteEnum/NavigateEnum';
import LoginStack from './Stack/LoginStack/LoginStack';
import BottomTabStack from './Stack/BottomTabStack/BottomTabStack';
import DetailfromListStack from './Stack/DetailfromList/DetailfromList';
import LoginPage from '../pages/LoginPage/LoginPage';
import ListPageStack from './Stack/ListPageStack/ListPageStack';
import DetailAfterScan from '../pages/DetailAfterScan/DetailAfterScan';
import Scanner from '../pages/Scanner/Scanner';
import ListPage from '../pages/ListPage/ListPage';
import NavStack from './Stack/NavStack/NavStack';


const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginPage'>
        <Stack.Screen
          name={AppScreens.LoginPage}
          component={LoginPage}
          options={({ navigation, route }) => ({
            headerShown: false,
          })}
        />
        {/* <Stack.Screen
          name={AppScreens.NavBottomTab}
          component={NavBottomTab}
          options={({ navigation, route }) => ({
            headerShown: false,
          })}

        /> */}
        <Stack.Screen
          name='NavStack'
          component={NavStack}
          options={{ headerShown: false }} />
       
        {/* <Stack.Screen
          name='ListPage'
          component={ListPage}
          options={{ headerShown: false }} /> */}
        {/* <Stack.Screen
          name='BottomTab'
          component={BottomTabStack}
          options={{ headerShown: false }} />  */}
         {/* <Stack.Screen
          name='DetailfromList'
          component={DetailfromListStack}
          options={{ headerShown: false }} />  */}



        <Stack.Screen
          name='DetailAfterScan'
          component={DetailAfterScan}
          options={{ headerShown: false }} />
         <Stack.Screen
          name='Scanner'
          component={Scanner}
          options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
