import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AccountUser from '../../../pages/AccountUser/AccountUser';
import LoginPage from '../../../pages/LoginPage/LoginPage';
import ListPage from '../../../pages/ListPage/ListPage';
import { NavigationContainer } from '@react-navigation/native'
import AccountStack from '../AccountStack/AccountStack';
import AppStack from '../AppStack/AppStack';
import { AppScreens } from '../../NavigeteEnum/NavigateEnum';
import NavStack from '../NavStack/NavStack';


const stack = createNativeStackNavigator();
const LoginStack = () => {

    return (

        <stack.Navigator >
            <stack.Screen
                name='LoginPage'
                component={LoginPage}
                options={({ navigation, route }) => ({ headerShown: false })}
            />
            {/* <stack.Screen
                name={AppScreens.NavStack}
                component={NavStack}
                options={{ headerShown: false }}
            /> */}
            {/* <stack.Screen
                name={AppScreens.ListPage}
                component={ListPage}
                options={{ headerShown: false }}
            /> */}


        </stack.Navigator>

    )
}

export default LoginStack