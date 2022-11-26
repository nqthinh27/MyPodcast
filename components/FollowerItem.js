import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import colors from "../constants/colors";

export default function Followers({ item }) {
    return (
        <View style={styles.wrapper}>
            <Image
                source={{ uri: item.avtUrl }}
                style={styles.userFlw}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    userFlw: {
        //position: 'absolute',
        width: 65,
        height: 65,
        left: 11,
        margin: 5,
        borderRadius: 200,
        borderWidth: 2,
        borderColor: colors.primary,
        //top: 50,
    },
})