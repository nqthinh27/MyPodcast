import React from "react";
import { Text, View, StyleSheet, Image, ImageBackground } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'
import variable from "../constants/variable";


export default function PlayerScreen(props) {
    navigation
    const {navigation, route} = props;
    //function of navigate 
    const {navigate, goback} = navigation;
    return (
        <ImageBackground
            source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/mypodcast-88135.appspot.com/o/Tu%2FEllipse%2010.png?alt=media&token=70f1056c-0e10-4e01-9083-b06d722f6c01' }}
            resizeMode='cover'
            style={{
                flex: 50,
                opacity: 50
            }}
            blurRadius={50}
        >
            <View>
                <View style={styles.header}>
                    <Icon
                        name={'angle-down'}
                        style={{ margin: 10, opacity: 0.8 }}
                        size={27}
                        onPress = {() => {navigate('UIScreen')}}
                    />
                    <Icon
                        name='ellipsis-h'
                        style={{ opacity: 1, position: 'absolute', right: 10, top: 16 }}
                        size={18} color={'black'}
                    />
                </View>
            </View>
            <View style={styles.h2}>

                <View>
                    <Image
                        source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/mypodcast-88135.appspot.com/o/Tu%2FRectangle%2038.png?alt=media&token=780197d0-e51a-496c-8ff1-006b24341c50' }}
                        style={styles.userMusic}
                    />
                    <View>
                        <Text style={styles.textTitle}>Tuổi trẻ, Tình yêu và công việc</Text>
                        <Text style={styles.textUser} onPress = {()=>{navigate('OtherProfile')}}>Tun Phạm</Text>
                    </View>
                    <Image
                        source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/mypodcast-88135.appspot.com/o/Tu%2FGroup%2044.png?alt=media&token=7b9cab21-fa89-4e88-8bdc-7eaa53167f4b' }}
                        style={styles.tua}
                    />
                </View>
                <View>
                    <Image
                        style={{ width: 23.79, height: 20.15, top: 150, marginLeft: 35 }}
                        source={{
                            uri: 'https://firebasestorage.googleapis.com/v0/b/mypodcast-88135.appspot.com/o/icon%2Fico_random_btn.png?alt=media&token=dda7b7d4-d4f8-4f2f-a5fe-ceb20ad135e7'
                        }} />
                    <Image
                        style={{ width: 31.66, height: 31.66, top: 125, left: 83, opacity: 0.8 }}
                        source={{
                            uri: 'https://firebasestorage.googleapis.com/v0/b/mypodcast-88135.appspot.com/o/icon%2Fico_prev_btn.png?alt=media&token=97b7476e-3416-4d31-aff0-8151e4db3d4c'
                        }} />
                    <Image
                        style={{ width: 61.66, height: 61.66, top: 75, alignSelf: 'center', opacity: 0.8 }}
                        source={{
                            uri: 'https://firebasestorage.googleapis.com/v0/b/mypodcast-88135.appspot.com/o/icon%2Fico_play_btn.png?alt=media&token=3fc8adf9-f0e6-47ea-82d7-ab2dca5194c8'
                        }} />
                    <Image
                        style={{ width: 31.66, height: 31.66, top: 30, left: 237, opacity: 0.8 }}
                        source={{
                            uri: 'https://firebasestorage.googleapis.com/v0/b/mypodcast-88135.appspot.com/o/icon%2Fico_next_btn.png?alt=media&token=2512b5de-5488-4e16-bbc7-f97031566d01'
                        }} />
                    <Image
                        style={{ width: 17.33, height: 23.83, left: 300 }}
                        source={{
                            uri: 'https://firebasestorage.googleapis.com/v0/b/mypodcast-88135.appspot.com/o/icon%2Fico_loop_btn.png?alt=media&token=114eb650-f8c3-4734-aa83-90aec1325949'
                        }} />
                </View>

            </View>
            <View style={styles.h3}>
                <Icon
                    name='heart'
                    style={{ paddingStart: 45, top: 15, opacity: 0.8 }}
                    size={25} color={'black'}
                />
                <Icon
                    name='comment-alt'
                    style={{ paddingStart: 50, top: 15, opacity: 0.8 }}
                    size={25} color={'black'}
                />
                <Icon
                    name='share-alt'
                    style={{ paddingStart: 55, top: 15, opacity: 0.8 }}
                    size={25} color={'black'}
                />
                <Icon
                    name='bookmark'
                    style={{ paddingStart: 55, top: 15, opacity: 0.8 }}
                    size={25} color={'black'}
                />
            </View>
        </ImageBackground>


    )
}

const styles = StyleSheet.create({
    header: {
        marginHorizontal: 20,
        top: 40,
    },

    textTitle: {
        fontSize: 20,
        fontWeight: "bold",
        top: 30,
        marginLeft: 25
    },

    textUser: {
        fontSize: 15,
        top: 30,
        marginLeft: 25
    },

    userMusic: {
        //position: 'absolute',
        width: 308,
        height: 318,
        alignSelf: 'center',
        top: 23
    },



    h2: {
        //flex: 15,
        top: 40,
        backgroundColor: "#fff",
        borderRadius: 20,
        margin: 20,
        paddingBottom: 30
    },

    h3: {
        //flex: 10,
        top: 35,
        backgroundColor: "#fff",
        borderRadius: 15,
        paddingBottom: 30,
        margin: 20,
        flexDirection: 'row',
    },

    tua: {
        width: 310,
        height: 35,
        alignSelf: 'center',
        top: 60
    },
})