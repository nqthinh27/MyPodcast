import React from "react";
import { Text, View } from "react-native";

export default function HomeScreen(props) {
    //navigation
    const {navigation, route} = props;
    //function of navigate 
    const {navigate, goback} = navigation;
    return (
        <Text onPress={() => {
            navigate('FollowingScreen')
        }}>This is HomeScreen</Text>
    )
}