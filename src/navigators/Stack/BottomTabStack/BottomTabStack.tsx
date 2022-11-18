import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListPage from '../../../pages/ListPage/ListPage';
import CategoryPage from '../../../pages/CategoryPage/CategoryPage';
import Scanner from '../../../pages/Scanner/Scanner';
import AccountUser from '../../../pages/AccountUser/AccountUser';
import LoginPage from '../../../pages/LoginPage/LoginPage';


const BottomTabStack = () => {
    const ButtomTab = createBottomTabNavigator();

    return (
        <ButtomTab.Navigator
            initialRouteName="ListPage"
            screenOptions={{
                tabBarShowLabel: true,
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#000',
                },
            }}
        >

            <ButtomTab.Screen
                name="ListPage"
                component={ListPage}
                options={({ navigation, route }) => ({})}
            />
            <ButtomTab.Screen
                name="CategoryPage"
                component={CategoryPage}
                options={({ navigation, route }) => ({})}
            />
            <ButtomTab.Screen
                name="Scanner"
                component={Scanner}
                options={({ navigation, route }) => ({})}
            />
            <ButtomTab.Screen
                name="AccountUser"
                component={AccountUser}
                options={({ navigation, route }) => ({})}
            />
            <ButtomTab.Screen
                name="LoginPage"
                component={LoginPage}
                options={({ navigation, route }) => ({})}
            />

        </ButtomTab.Navigator>
    )
}

export default BottomTabStack

