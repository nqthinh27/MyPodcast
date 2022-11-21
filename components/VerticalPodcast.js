import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'
// import Icon from 'react-native-vector-icons/Feather'

export default function VerticalPodcast(props) {
    return (
        <View style={styles.wrapper}>
                <View style={styles.boxShadow}><Image source={{ uri: 'https://i.scdn.co/image/ab6765630000ba8aeb5b14182d1f591c2df02a7d' }} style={styles.avatar} /></View>
                <View style={styles.textSection}>
                        <Text style={styles.title } numberOfLines={2}>Ta yêu đời thì đời sẽ yêu lại ta</Text>
                        <Text style={styles.author} numberOfLines={2}>SunHuyn</Text>
                </View>
                {/* <Icon style={styles.more_btn} name="more-horizontal" size={26} color="#000" /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginRight:10
    },
    avatar: {
        width: 96,
        height: 96,
        borderRadius: 8,
    },
    textSection: {
        width: 96
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