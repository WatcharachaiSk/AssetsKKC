import React, {useEffect, useMemo, useState} from 'react';

import {Alert} from 'react-native';
// import LoginPage from './src/pages/LoginPage/LoginPage';
import Navigation from './src/navigators/navigators';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppScreens} from './src/navigators/NavigeteEnum/NavigateEnum';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import NavStack from './src/navigators/Stack/NavStack/NavStack';
import LoginStack from './src/navigators/Stack/LoginStack/LoginStack';
import SwapLoading from './src/pages/LoginPage/components/SwapLoading';
import axios from 'axios';
import configAxios from './src/axios/configAxios';
import {API} from './src/axios/swr/endpoint';

const Stack = createNativeStackNavigator();
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [settoken, setSettoken] = useState();

  // const { submit} = props;
  // console.log('isLoading=',isLoading);
  const [getProfile, setGetProfile] = useState<any>();
  useMemo(async () => {
    setIsLoading(true);
    try {
      var token: any;
      token = await AsyncStorage.getItem('accessToken');
      const res = await axios(await configAxios('get', `${API.getProfile}`));
      setGetProfile(res?.data);
      if (res?.data?.user?.user_status == false) {
        setSettoken(undefined);
      } else {
        setSettoken(token);
      }
      setIsLoading(false);
    } catch (error: any) {
      if (error.request.status == 0) {
        Alert.alert(
          'อินเตอร์เน็ตของคุณมีปัญหา',
          'กรุณาตรวจสอบอินเตอร์เน็ตของคุณ',
          [{text: 'ปิด'}],
        );
      }
      setIsLoading(false);
    }
  }, []);

  // เช็ค Token
  useEffect(() => {
    // checktoken();
  }, []);

  //

  return (
    <>
      {isLoading && <SwapLoading />}
      <NavigationContainer>
        <Stack.Navigator>
          {!settoken ? (
            <>
              <Stack.Screen
                name={AppScreens.LoginStack}
                component={LoginStack}
                options={({navigation, route}) => ({headerShown: false})}
              />
            </>
          ) : (
            <Stack.Screen
              name={AppScreens.Navigation}
              component={Navigation}
              options={({navigation, route}) => ({headerShown: false})}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
      {/* <Navigation /> */}
      {/* <LoginPage/> */}
    </>
  );
};

export default App;
