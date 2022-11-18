import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import icon from '../config/icon';
import { AppScreens } from './NavigeteEnum/NavigateEnum';
import ListPage from '../pages/ListPage/ListPage';
import CategoryPage from '../pages/CategoryPage/CategoryPage';
import Scanner from '../pages/Scanner/Scanner';
import AccountUser from '../pages/AccountUser/AccountUser';
import Entypo from "react-native-vector-icons/Entypo";



const NavBottomTab = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#000',
            tabBarInactiveTintColor: '#D9CDC1',
            tabBarLabelStyle: {

            },
            tabBarBackground: () => (
                <View style={{ flex: 1, backgroundColor: '#FFCC63' }}></View>
            ),
        }}>
            <Tab.Screen
                name={AppScreens.ListPage}
                component={ListPage}
                options={{
                    title: 'หน้าหลัก',
                    tabBarIcon: ({ color, size }) => {
                        return (
                          <View style={{ alignItems: "center" }}>
                            <Entypo name="home" size={45} color={color}></Entypo>
                          </View>
                        );
                      },
                }}
            />
            <Tab.Screen
                name={AppScreens.CategoryPage}
                component={CategoryPage}
                options={{
                    title: 'หมวดหมู่'

                }}
            />
            <Tab.Screen
                name={AppScreens.Scanner}
                component={Scanner}
                options={{
                    title: 'สแกน'
                }}
            />
            <Tab.Screen
                name={AppScreens.AccountUser}
                component={AccountUser}
                options={{
                    title: 'ฉัน'
                }}
            />
        </Tab.Navigator>
    );
}

export default NavBottomTab
const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

    },
    icon: {
        width: 43,
        height: 43,
        justifyContent: 'center',
        marginLeft: 5
    },
    bgIcon: {
        marginTop: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
    }


});