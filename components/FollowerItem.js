import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import colors from "../constants/colors";

export default function Followers(props) {
    return (
        <View style={styles.wrapper}>
            <Image
                source={{uri: 'https://firebasestorage.googleapis.com/v0/b/mypodcast-88135.appspot.com/o/avatar.jpg?alt=media&token=fc074eb8-e67f-4235-8230-160cae1557b5'}} 
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