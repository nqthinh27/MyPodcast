import React from "react";
import { Text, View } from "react-native";

export default function SettingScreen(props) {
    //navigation
    const {navigation, route} = props;
    //function of navigate 
    const {navigate, goback} = navigation;
    return (
        <Text>This is SettingScreen</Text>
    )
}