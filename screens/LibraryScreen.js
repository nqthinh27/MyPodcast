import React from "react";
import { Text, View } from "react-native";

export default function LibraryScreen(props) {
    //navigation
    const {navigation, route} = props;
    //function of navigate 
    const {navigate, goback} = navigation;
    return (
        <Text>This is LibraryScreen</Text>
    )
}