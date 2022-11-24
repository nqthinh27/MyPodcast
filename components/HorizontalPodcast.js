import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import colors from "../constants/colors";

export default function HorizontalPodcast({item}) {
    return (
        <View style={styles.h1}>
            <Image
                style={styles.imgUser}
                source={{uri: item.avtUrl}} />
            <View style={{
                flex: 1,
                marginRight: 10,
                justifyContent: "center"
            }}>
                <Text style={{
                    fontWeight: '600',
                    fontSize: 16
                }} numberOfLines={2}>{item.title}</Text>
                {/* <Icon
                    name='ellipsis-h'
                    style={{ opacity: 1, position: 'absolute', right: 10, top: 16 }}
                    size={18} color={'black'}
                /> */}
                <Text style={{
                }}>{item.author}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    h1: {
        // height: 80,
        marginBottom: 13,
        flexDirection: 'row'
    },

    imgUser: {
        width: 57,
        height: 57,
        marginRight: 10,
        borderRadius: 8
    },

})