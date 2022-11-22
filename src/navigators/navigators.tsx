import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavBottomTab from './NavBottomTab';
import { AppScreens } from './NavigeteEnum/NavigateEnum';
import LoginStack from './Stack/LoginStack/LoginStack';
import BottomTabStack from './Stack/BottomTabStack/BottomTabStack';
import DetailfromListStack from './Stack/DetailfromList/DetailfromList';


const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name={AppScreens.LoginStack}
          component={LoginStack}
          options={({navigation, route}) => ({
            headerShown: false,
          })}
        /> */}
        <Stack.Screen
          name={AppScreens.NavBottomTab}
          component={NavBottomTab}
          options={({ navigation, route }) => ({
            headerShown: false,
          })}

        />
        <Stack.Screen
          name='BottomTab'
          component={BottomTabStack}
          options={{ headerShown: false }} />
        <Stack.Screen
          name='DetailfromList'
          component={DetailfromListStack}
          options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
