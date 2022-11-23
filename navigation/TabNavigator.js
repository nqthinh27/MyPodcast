import React, {Component, useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, FollowingScreen, TestScreen } from "../screens";

import UIScreen from "./UIScreen";
import SignIn from "../screens/SignIn"

const Stack = createNativeStackNavigator();
export default function TabNavigator(props) {
    return <NavigationContainer>
        <Stack.Navigator initialRouteName="UIScreen">
            <Stack.Screen name={"Trang chủ"} component={HomeScreen} />
            <Stack.Screen name={"Theo dõi"} component={FollowingScreen}/>
            {/* <Stack.Screen name={"PostScreen"} component={PostScreen}/> */}
            {/* <Stack.Screen name={"Thư viện"} component={LibraryScreen}/> */}
            <Stack.Screen name={"Đăng nhập"} component={SignIn} />
            {/* <Stack.Screen name={"Cài đặt"} component={SettingScreen}/> */}
            <Stack.Screen name={"UIScreen"} component={UIScreen}/>



            {/* <Stack.Screen name={"Trình phát"} component={PlayerScreen}/> */}
            {/* <Stack.Screen name={"Đăng ký"} component={SignUpScreen}/>
            <Stack.Screen name={"Đăng nhập"} component={Login}/> */}            
            {/* <Stack.Screen name={"Header"} component={HeaderUI}/> */}
        </Stack.Navigator>
    </NavigationContainer>
}

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from '../screens/HomeScreen';
// import LibraryScreen from '../screens/LibraryScreen';
// import SignIn from '../screens/SignIn'

// const Stack = createStackNavigator();

// const TabNavigator() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name='Home' component={HomeScreen} />
//       <Stack.Screen name='Lib' component={LibraryScreen} />
//       <Stack.Screen name="SignIn" component={SignIn} />
//     </Stack.Navigator>
//   );
// }

// const MainNavigator = () => {
//     return (
//         <NavigationContainer>
//             <TabNavigator></TabNavigator>
//         </NavigationContainer>
//     )
// }