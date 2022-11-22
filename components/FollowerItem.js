import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import colors from "../constants/colors";

export default function Followers(props) {
    return (
        <View style={styles.wrapper}>
            <Image
                source={require('../assets/users_follow.png')}
                style={styles.userFlw}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    userFlw: {
        //position: 'absolute',
        width: 60,
        height: 83,
        left: 10,
        margin: 5
        //top: 50,
    },
})