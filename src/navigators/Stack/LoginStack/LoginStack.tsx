import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AccountUser from '../../../pages/AccountUser/AccountUser';
import LoginPage from '../../../pages/LoginPage/LoginPage';
import ListPage from '../../../pages/ListPage/ListPage';
import { NavigationContainer } from '@react-navigation/native'

const stack = createNativeStackNavigator();
const LoginStack = () => {

    return (

        <stack.Navigator >
            <stack.Screen
                name='LoginPage'
                component={LoginPage}
                options={({ navigation, route }) => ({ headerShown: false })}
            />
            <stack.Screen
                name='ListPage'
                component={ListPage}
                options={{ headerShown: false }} />
        </stack.Navigator>

    )
}

export default LoginStack