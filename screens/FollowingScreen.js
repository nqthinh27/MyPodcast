import React from "react";
import { Text, View } from "react-native";

export default function FollowingScreen(props) {
    //navigation
    const {navigation, route} = props;
    //function of navigate 
    const {navigate, goback} = navigation;
    return (
        <Text onPress={() => {
            navigate('PostScreen')
        }}>This is FollowingScreen</Text>
    )
}