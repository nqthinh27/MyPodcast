import React, {Component, useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, FollowingScreen, TestScreen } from "../screens";

import UIScreen from "./UIScreen";
import SignIn from "../screens/SignIn"
import HeaderUI from "../components/HeaderUI";
import Profile from "../screens/Profile";
import ForgotPasswordSc from "../screens/ForgotPassword/ForgotPasswordSc"
import NewPassword from "../screens/ForgotPassword/NewPassword"
import OTPcode from "../screens/ForgotPassword/OTPcode"
import SuccessFP from "../screens/ForgotPassword/SuccessFP"
import SignUp from "../screens/SignUp/SignUp"
import OTPcodeSU from "../screens/SignUp/OTPcodeSU"
import Success from "../screens/SignUp/Success"

const Stack = createNativeStackNavigator();
export default function TabNavigator(props) {
    return <NavigationContainer>
        <Stack.Navigator initialRouteName="UIScreen" screenOptions={{headerShown:false}}>
            <Stack.Screen name={"Home"} component={HomeScreen} />
            <Stack.Screen name={"Follow"} component={FollowingScreen}/>
            {/* <Stack.Screen name={"PostScreen"} component={PostScreen}/> */}
            {/* <Stack.Screen name={"Thư viện"} component={LibraryScreen}/> */}
            <Stack.Screen name={"SignIn"} component={SignIn} />
            {/* <Stack.Screen name={"Cài đặt"} component={SettingScreen}/> */}
            <Stack.Screen name={"UIScreen"} component={UIScreen}/>
            <Stack.Screen name={"Profile"} component={Profile}/>
            <Stack.Screen name={"NewPassword"} component={NewPassword}/>
            <Stack.Screen name={"ForgotPasswordSc"} component={ForgotPasswordSc}/>
            <Stack.Screen name={"OTPcode"} component={OTPcode}/>
            <Stack.Screen name={"SignUp"} component={SignUp}/>
            <Stack.Screen name={"OTPcodeSU"} component={OTPcodeSU}/>
            <Stack.Screen name={"Success"} component={Success}/>
            <Stack.Screen name={"SuccessFP"} component={SuccessFP}/>
            <Stack.Screen name={"Header"} component={HeaderUI}/>
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