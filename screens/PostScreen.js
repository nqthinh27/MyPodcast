import React from "react";
import { Text, View } from "react-native";

export default function PostScreen(props) {
    //navigation
    const {navigation, route} = props;
    //function of navigate 
    const {navigate, goback} = navigation;
    return (
        <Text onPress={() => {
            navigate('UIScreen')
        }}>This is PostScreen</Text>
    )
}