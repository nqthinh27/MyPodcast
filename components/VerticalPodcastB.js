import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'
import device from '../constants/device'
// import Icon from 'react-native-vector-icons/Feather'

export default function VerticalPodcastB({ item }) {
    return (
        <View style={styles.wrapper}>
                <View style={styles.boxShadow}><Image source={{ uri: item.avtUrl }} style={styles.avatar} /></View>
                <View style={styles.textSection}>
                        <Text style={styles.title } numberOfLines={2}>{item.title}</Text>
                        <Text style={styles.author} numberOfLines={2}>{item.author}</Text>
                </View>
                {/* <Icon style={styles.more_btn} name="more-horizontal" size={26} color="#000" /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginRight:16,
        width: 108
    },
    avatar: {
        width: 108,
        height: 108,
        borderRadius: 10,
    },
    textSection: {
        width: 108
    },
    title: {
        fontSize: 16,
        fontWeight: "600",
        paddingTop: 3
    },
    author: {
        color: "#414141",
    },
    boxShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    }
})