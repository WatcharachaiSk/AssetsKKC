import { View, Text, StyleSheet, Image,Dimensions } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import icon from '../config/icon';
import { AppScreens } from '../../NavigeteEnum/NavigateEnum';
import CategoryPage from '../../../pages/CategoryPage/CategoryPage';
import Scanner from '../../../pages/Scanner/Scanner';
import AccountUser from '../../../pages/AccountUser/AccountUser';
import Entypo from "react-native-vector-icons/Entypo";
import { colors } from '../../../config/colors';
import ListPageStack from '../ListPageStack/ListPageStack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { GetKanitFont } from '../../../config/fonts';
import AppStack from '../AppStack/AppStack';
import ScannerStack from '../ScannerStack/ScannerStack';
import { RFPercentage } from "react-native-responsive-fontsize";


const NavBottomTab = (props: any) => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            initialRouteName="AppStack"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.yellow,
                tabBarInactiveTintColor: '#000',
                tabBarLabelStyle: {
                },
                tabBarBackground: () => (

                    <View style={{ flex: 1, backgroundColor: '#fff', }}></View>

                ),
            }}>
            <Tab.Screen
                name={AppScreens.AppStack}
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
            <Tab.Screen
                name={AppScreens.CategoryPage}
                component={CategoryPage}
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
            <Tab.Screen
                name={AppScreens.ScannerStack}
                component={ScannerStack}
                options={{
                    title: 'สแกน',
                    tabBarLabelStyle: { fontSize: 14, ...GetKanitFont("regular") },
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <View style={{ alignItems: "center" }}>
                                <MaterialCommunityIcons name="line-scan" size={35} color={color}></MaterialCommunityIcons>
                            </View>
                        );
                    },
                }}
            />
            <Tab.Screen
             
                name={AppScreens.AccountUser}
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