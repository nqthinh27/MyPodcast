import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import colors from "../constants/colors";

export default function ForYou(props) {
    return (
        <View style={styles.h1}>
            <Image
                style={styles.imgUser}
                source={{uri: 'https://firebasestorage.googleapis.com/v0/b/mypodcast-88135.appspot.com/o/avatar.jpg?alt=media&token=fc074eb8-e67f-4235-8230-160cae1557b5'}} />
            <View style={{
                flex: 1,
                marginRight: 10,
            }}>
                <Text style={{
                    top: 16,
                    fontWeight: '500'
                }}>Thử bao nhiêu lần trước khi dừng lại?</Text>
                <Icon
                    name='ellipsis-h'
                    style={{ opacity: 1, position: 'absolute', right: 10, top: 16 }}
                    size={18} color={'black'}
                />
                <Text style={{
                    top: 20
                }}>.Vũ</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    h1: {
        height: 80,
        paddingTop: 10,
        paddingStart: 16,
        flexDirection: 'row'
    },

    imgUser: {
        width: 57,
        height: 57,
        marginRight: 10
    },

})