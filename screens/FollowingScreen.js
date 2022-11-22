import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";
import HeaderUI from "../components/HeaderUI";

export default function FollowingScreen(props) {
    //navigation
    const {navigation, route} = props;
    //function of navigate 
    const {navigate, goback} = navigation;
    return (
        <SafeAreaView style = {styles.wrapper}>
            <HeaderUI/>
        </SafeAreaView>
    )
}

const styles =  StyleSheet.create({
    wrapper: {
        backgroundColor:"#fff"
    }
})