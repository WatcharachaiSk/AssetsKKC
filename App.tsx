
import React from 'react'

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
const App = () => {

  return (
    <>
      <Navigation />
      {/* <LoginPage/> */}
    </>

  )
};



export default App;
