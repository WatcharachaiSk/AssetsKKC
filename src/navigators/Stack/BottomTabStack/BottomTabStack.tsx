import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListPage from '../../../pages/ListPage/ListPage';
import CategoryPage from '../../../pages/CategoryPage/CategoryPage';
import Scanner from '../../../pages/Scanner/Scanner';
import AccountUser from '../../../pages/AccountUser/AccountUser';
import LoginPage from '../../../pages/LoginPage/LoginPage';
import DetailAfterScan from '../../../pages/DetailAfterScan/DetailAfterScan';
import DetailfromList from '../../../pages/DetailfromList/DetailfromList';
import DetailfromListStack from '../DetailfromList/DetailfromList';
import NavBottomTab from '../NavStack/NavBottomTab';

const BottomTabStack = () => {
    const ButtomTab = createBottomTabNavigator();

    return (
        <ButtomTab.Navigator
            initialRouteName="ListPage"
            screenOptions={{
                tabBarShowLabel: false,
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
              <ButtomTab.Screen
                name="DetailAfterScan"
                component={DetailAfterScan}
                options={({ navigation, route }) => ({})}
            />
             <ButtomTab.Screen
                name="DetailfromList"
                component={DetailfromList}
                options={({ navigation, route }) => ({})}
            />
                 {/* <ButtomTab.Screen
                name="NavBottomTab"
                component={NavBottomTab}
                options={({ navigation, route }) => ({})}
            /> */}
            


        </ButtomTab.Navigator>
    )
}

export default BottomTabStack

