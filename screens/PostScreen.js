import React from "react";
import { Text, View } from "react-native";

export default function PostScreen(props) {
    //navigation
    const {navigation, route} = props;
    //function of navigate 
    const {navigate, goback} = navigation;
    return (
        <Text onPress={() => {
            navigate('Thư viện')
        }} style = {{
            marginTop: 100,
            fontSize: 30
        }}>This is PostScreen</Text>
    )
}