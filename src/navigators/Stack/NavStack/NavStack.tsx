import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from '../../../config/colors';
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
import AccountUser from '../../../pages/AccountUser/AccountUser';
import { RFPercentage } from "react-native-responsive-fontsize";
import { heightOfWindow } from '../../../utils/getDimension';

const NavStack = () => {
    const { height } = Dimensions.get("window");
    const sizeIcon = height > 600 ? RFPercentage(4) : RFPercentage(3.5);
    const ButtomTab = createBottomTabNavigator();
    return (
        <ButtomTab.Navigator
            initialRouteName="AppStack"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.yellow,
                tabBarInactiveTintColor: '#000',
                tabBarStyle: {
                    height: heightOfWindow*0.07,
                },
                // tabBarLabelStyle: {

                // },
                tabBarBackground: () => (

                    <View style={{ flex: 1, backgroundColor: '#fff', }}></View>

                ),
            }}>
            <ButtomTab.Screen
                name={AppScreens.AppStack}
                component={AppStack}
                options={{
                    title: 'หน้าหลัก',
                    tabBarLabelStyle: { fontSize: RFPercentage(2.1), ...GetKanitFont("regular") },
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <View style={{ alignItems: "center" }}>
                                <Ionicons name="home" size={heightOfWindow*0.04} color={color}></Ionicons>
                            </View>
                        );
                    },
                }}
            />
            {/* <ButtomTab.Screen/> */}

            <ButtomTab.Screen
                name={"CategoryStack"}
                component={CategoryStack}
                options={{
                    title: 'หมวดหมู่',
                    tabBarLabelStyle: { fontSize: RFPercentage(2.1), ...GetKanitFont("regular") },
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <View style={{ alignItems: "center" }}>
                                <Feather name="align-left" size={heightOfWindow*0.05} color={color}></Feather>
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
                    tabBarLabelStyle: { fontSize: RFPercentage(2.1), ...GetKanitFont("regular") },
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <View style={{ alignItems: "center" }}>
                                <MaterialCommunityIcons name="line-scan" size={heightOfWindow*0.04} color={color}></MaterialCommunityIcons>
                            </View>
                        );
                    },
                }}
            />
            <ButtomTab.Screen
                name={AppScreens.AccountUser}
                component={AccountUser}
                options={{
                    title: 'ฉัน',
                    tabBarLabelStyle: { fontSize: RFPercentage(2.1), ...GetKanitFont("regular") },
                    tabBarIcon: ({ color, size }) => {
                        return (

                            <View style={{ alignItems: "center" }}>
                                <FontAwesome5 name="user-alt" size={sizeIcon} color={color}></FontAwesome5>
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