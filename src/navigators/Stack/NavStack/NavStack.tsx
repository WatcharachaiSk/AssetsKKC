import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from '../../../config/colors';
import AccountUser from '../../../pages/AccountUser/AccountUser';
import CategoryPage from '../../../pages/CategoryPage/CategoryPage';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { GetKanitFont } from '../../../config/fonts';
import { AppScreens } from '../../NavigeteEnum/NavigateEnum';
import AppStack from '../AppStack/AppStack';
import ScannerStack from '../ScannerStack/ScannerStack';
import CategoryStack from '../CategoryStack/CategoryStack';

const NavStack = () => {


    const ButtomTab = createBottomTabNavigator();
    return (
        <ButtomTab.Navigator
            initialRouteName="AppStack"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.yellow,
                tabBarInactiveTintColor: '#000',
                tabBarLabelStyle: {
                },
                tabBarBackground: () => (

                    <View style={{ flex: 1, backgroundColor: '#fff'}}></View>

                ),
            }}>
            <ButtomTab.Screen
                name={"AppStack"}
                component={AppStack}
                options={{
                    title: 'หน้าหลัก',
                    tabBarLabelStyle: { fontSize: 14, ...GetKanitFont("regular") },
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <View style={{ alignItems: "center" }}>
                                <Ionicons name="home" size={30} color={color}></Ionicons>
                            </View>
                        );
                    },
                }}
            />
            <ButtomTab.Screen
                name={"CategoryStack"}
                component={CategoryStack}
                options={{
                    title: 'หมวดหมู่',
                    tabBarLabelStyle: { fontSize: 14, ...GetKanitFont("regular") },
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <View style={{ alignItems: "center" }}>
                                <Feather name="align-left" size={35} color={color}></Feather>
                            </View>
                        );
                    },

                }}
            />
            <ButtomTab.Screen
                name={AppScreens.ScannerStack}
                component={ScannerStack}
                options={{
                    title: 'สแกน',
                    tabBarLabelStyle: { fontSize: 14, ...GetKanitFont("regular") },
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <View style={{ alignItems: "center" }}>
                                <MaterialCommunityIcons name="line-scan" size={32} color={color}></MaterialCommunityIcons>
                            </View>
                        );
                    },
                }}
            />
            <ButtomTab.Screen
                name={"AccountUser"}
                component={AccountUser}
                options={{
                    title: 'ฉัน',
                    tabBarLabelStyle: { fontSize: 14, ...GetKanitFont("regular") },
                    tabBarIcon: ({ color, size }) => {
                        return (

                            <View style={{ alignItems: "center" }}>
                                <FontAwesome5 name="user-alt" size={28} color={color}></FontAwesome5>
                            </View>


                        );
                    },
                }}
            />
        </ButtomTab.Navigator >
    )
}

export default NavStack

const styles = StyleSheet.create({})