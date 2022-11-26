import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import colors from "../constants/colors";

export default function MiniPlayer(props) {
    return (
        <TouchableOpacity style={styles.h1}>
            <View style={styles.viewimgUser}>
                <Image
                    style={styles.imgUser}
                    source={{
                        uri: 'https://i.paste.pics/aa9129561fa3d1a3b0ba1f9ae12be5ef.png',
                    }}
                    />
            </View>
            
            <View style={styles.viewName}>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 14
                }}>Thử bao nhiêu lần trước khi dừng lại?</Text>
                
                
                <Text style={{
                    fontSize: 13
                }}>.Vũ</Text>
            </View>

            <View style={styles.viewPlay}>
                <TouchableOpacity>
                    <Icon
                        name='step-backward'
                        style={styles.iconBack}
                        size={20} color={'black'}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Icon
                            name='play-circle'
                            style={styles.iconPlay}
                            size={29} color={'black'}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                     <Icon
                        name='step-forward'
                        style={styles.iconNext}
                        size={20} color={'black'}
                    />
                </TouchableOpacity>
                
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    h1: {
        height: 72,
        marginTop: 10,
        flexDirection: 'row',
        backgroundColor : "#FFC75A",
        paddingBottom: 10,
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
    },

    viewName: {
        flex: 3,
        justifyContent: "flex-end"
    },

    viewPlay : {
        flex: 1.5,
        flexDirection : "row",
        alignItems: "center",
        justifyContent: "space-around",
        marginRight: 10,
    },

    iconPlay: {
        marginHorizontal : 10
    }

})