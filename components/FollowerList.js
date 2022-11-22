import React from "react";
import { Text, View, Image, StyleSheet,ScrollView } from "react-native";
import Followers from "./FollowerItem";

export default function FollowerList(props) {
    return (
        <ScrollView style={styles.wrapper} horizontal={true}>
            <View style={styles.wrapper}>
                <Followers />
                <Followers />
                <Followers />
                <Followers />
                <Followers />
                <Followers />
                <Followers />
                <Followers />
                <Followers />
                <Followers />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        // margin: 11
        flexDirection: 'row',
        // alignItems: 'center'
    },
})