
import React, { useEffect, useMemo, useState, useReducer } from 'react'

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import LoginPage from './src/pages/LoginPage/LoginPage';
import Navigation from './src/navigators/navigators';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppScreens } from './src/navigators/NavigeteEnum/NavigateEnum';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ListPage from './src/pages/ListPage/ListPage';
import NavStack from './src/navigators/Stack/NavStack/NavStack';
import AppStack from './src/navigators/Stack/AppStack/AppStack';
import LoginStack from './src/navigators/Stack/LoginStack/LoginStack';

const Stack = createNativeStackNavigator();
const App = (props: any) => {

  const [isLoading, setIsLoading] = useState(true);
  const [settoken, setSettoken] = useState("");

  // const { submit} = props;
  // console.log('submit=',submit);

  // เช็ค Token
  useEffect(() => {

    const checktoken = async () => {
      setIsLoading(true);
      let token: any
      try {
        token = await AsyncStorage.getItem("accessToken");
        setSettoken(token)
      } catch (error) {
        console.log(error);
      }
      console.log('token =', token);

    };
    checktoken();
  }, [])

  if (isLoading == true) {
    <View>
      <Text>123456798</Text>
    </View>
  }



  return (
    <>

      <NavigationContainer >
        <Stack.Navigator>
          {settoken == null ?
            (isLoading == true) &&
            (
              <>
                <Stack.Screen
                  name={AppScreens.LoginStack}
                  component={LoginStack}
                  options={({ navigation, route }) => ({ headerShown: false })}
                />

                </>

            ) : (
              <Stack.Screen
                name={AppScreens.Navigation}
                component={Navigation}
                options={({ navigation, route }) => ({ headerShown: false })}
              />


            )}


        </Stack.Navigator>

      </NavigationContainer>
      {/* <Navigation /> */}
      {/* <LoginPage/> */}
    </>

  )
};



export default App;
