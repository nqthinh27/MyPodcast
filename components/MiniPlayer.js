import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import colors from "../constants/colors";

export default function MiniPlayer(props) {
    return (
        <View style={styles.h1}>
            <ImageBackground
                source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/mypodcast-88135.appspot.com/o/trending%2Fimage%2Fhoctienganh.jpg?alt=media&token=b3d4a00c-f509-4df6-96ab-562ff6b0be8a",
                }}
                resizeMode="cover"
                style={styles.bgImg}
                blurRadius={5}
                opacity={0.2}
            >

                <View style={styles.viewimgUser}>
                    <Image
                        style={styles.imgUser}
                        source={{
                            uri: 'https://firebasestorage.googleapis.com/v0/b/mypodcast-88135.appspot.com/o/trending%2Fimage%2Fhoctienganh.jpg?alt=media&token=b3d4a00c-f509-4df6-96ab-562ff6b0be8a',
                        }}
                    />
                </View>

                <View style={styles.viewName}>
                    <Text style={{
                        fontWeight: '600',
                        fontSize: 14
                    }}>The future is good</Text>


                    <Text style={{
                        fontSize: 13
                    }}>Adrian reif</Text>
                </View>

                <View style={styles.viewPlay}>
                    <TouchableOpacity>
                        <Icon
                            name='play-skip-back-sharp'
                            style={styles.iconBack}
                            size={22} color={'black'}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Icon
                            name='play-circle'
                            style={styles.iconPlay}
                            size={37} color={'black'}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Icon
                            name='play-skip-forward-sharp'
                            style={styles.iconNext}
                            size={22} color={'black'}
                        />
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    
    bgImg: {
        flexDirection: 'row',
        backgroundColor: "#fff",
        paddingVertical: 10,
    },
    h1: {
        // // height: 72,
        // marginTop: 10,
        // flexDirection: 'row',
        // backgroundColor: "#fff",
        // paddingBottom: 10,
    },

    viewimgUser: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        marginLeft: 5
    },

    imgUser: {
        width: 54,
        height: 54,
        borderRadius:7,
    },

    viewName: {
        flex: 3,
        justifyContent: "center",
        marginLeft:3
    },

    viewPlay: {
        flex: 1.5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        marginRight: 25,
        marginLeft: 10
    },

    iconPlay: {
        marginHorizontal: 10
    }

})