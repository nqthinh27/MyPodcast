import React from "react";
import { Text, View, StyleSheet, Image, ImageBackground } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome5'
import TrackPlayer, {
    Capability,
    Event,
    RepeatMode,
    State,
    usePlaybackState,
    useProgress,
    useTrackPlayerEvents
} from 'react-native-track-player'
import Slider from '@react-native-community/slider'
import colors from "../constants/colors";
import { SlideBarData } from "../data/SlideBarData";

const playbackState = usePlaybackState();
const setupPlayer = async() => {

    await TrackPlayer.setupPlayer()
    await TrackPlayer.add(SlideBarData)
}

const togglePlayBack = async(playbackState) => {
    const currentTrack = await TrackPlayer.getCurrentTrack()
    
    if (currentTrack !== null){
        if (playbackState == State.Paused)
        await TrackPlayer.play()}
         else {
        await TrackPlayer.pause() 
    }
}

export default function PlayerScreen(props) {
    //navigation
    // const {navigation, route} = props;
    // //function of navigate 
    // const {navigate, goback} = navigation;
    return (
        <ImageBackground
            source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/mypodcast-88135.appspot.com/o/trending%2Fimage%2Fhoctienganh.jpg?alt=media&token=d3164959-8bd4-444a-9d34-18242bfb9dda' }}
            resizeMode='cover'
            style={{
                flex: 1,
            }}
            blurRadius={50}
            // imageStyle= {{opacity:0.5}}
        >
            <View>
                <View style={styles.header}>
                    <Icon
                        name={'angle-down'}
                        style={{ top: 5, opacity: 0.8 }}
                        size={27}
                        color={"#fff"}
                    />
                    <Icon
                        name='ellipsis-h'
                        style={{ opacity: 1, position: 'absolute', right: 10, top: 16 }}
                        size={18}
                        color={"#fff"}
                    />
                </View>

                <View>
                    <Text style={styles.textTitle}>Tuổi trẻ, Tình yêu và công việc</Text>
                    <Text style={styles.textUser}>Tun Phạm</Text>
                </View>

                <View >
                    <Image
                        source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/mypodcast-88135.appspot.com/o/trending%2Fimage%2Fhoctienganh.jpg?alt=media&token=d3164959-8bd4-444a-9d34-18242bfb9dda' }}
                        style={styles.userMusic}
                    />
                </View>
                <View>
                    <Icon
                        name={'random'}
                        style={{ opacity: 0.7, top: 202, left: 60 }}
                        size={24}
                        color={"#fff"}
                    />
                    <Icon
                        name={'fast-backward'}
                        style={{ opacity: 0.8, top: 175, left: 120 }}
                        size={24}
                        color={"#fff"}
                    />
                    <Icon
                        name={'pause-circle'}
                        style={{ opacity: 0.8, top: 140, left: 180 }}
                        size={40}
                        color={"#fff"}
                        onPress={()=> togglePlayBack(playbackState)}
                    />
                    <Icon
                        name={'fast-forward'}
                        style={{ opacity: 0.8, top: 107, left: 260 }}
                        size={24}
                        color={"#fff"}
                    />
                    <Icon
                        name={'redo-alt'}
                        style={{ opacity: 0.7, top: 80, left: 320 }}
                        size={24}
                        color={"#fff"}
                    />
                </View>
                <Slider
                    style={styles.progressContainer}
                    value={10}
                    minimumvalue={0}
                    maximumvalue={100}
                    thumbTintColor={colors.primary}
                    minimumTrackTintColor={colors.primary}
                    maximumTrackTintColor={"#eee"}
                    onSlidingComplete={()=>{}}
                    />
            </View>
            
        </ImageBackground>


    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },

    header: {
        marginHorizontal: 20,
        marginTop: 40,
    },

    textTitle: {
        fontSize: 20,
        fontWeight: "bold",
        top: 20,
        textAlign: 'center',
        color:"#fff"
    },

    textUser: {
        fontSize: 15,
        textAlign: 'center',
        top: 25,
        color:"#fff"
    },

    userMusic: {
        //position: 'absolute',
        width: 318,
        height: 318,
        top: 80,
        left: 37,
        borderRadius: 318
    },

    icon1: {
        top: 210
    }
})