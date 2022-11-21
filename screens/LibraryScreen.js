import React from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import HeaderUI from "../navigation/HeaderUI";

export default function LibraryScreen(props) {
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