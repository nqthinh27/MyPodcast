import React, {Component, useState} from "react";
import {
    SafeAreaView,
    Text,
    View,
    Image,
    TouchableOpacity,
    ImageBackground,
    FlatList    
} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    HomeScreen,
    FollowingScreen,
    PostScreen,
    LibraryScreen,
    SettingScreen
} from '../screens'
import UIScreen from "./UIScreen";

const Stack = createNativeStackNavigator();
export default function Tabbar(props) {
    return <NavigationContainer>
        <Stack.Navigator initialRouteName="Trang chủ">
            <Stack.Screen name={"Trang chủ"} component={HomeScreen} />
            <Stack.Screen name={"Theo dõi"} component={FollowingScreen}/>
            <Stack.Screen name={"PostScreen"} component={PostScreen}/>
            <Stack.Screen name={"Thư viện"} component={LibraryScreen}/>
            <Stack.Screen name={"Cài đặt"} component={SettingScreen}/>
            <Stack.Screen name={"UIScreen"} component={UIScreen}/>  
        </Stack.Navigator>
    </NavigationContainer>
}
