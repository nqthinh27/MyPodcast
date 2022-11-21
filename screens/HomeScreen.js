import React from "react";
import {
    SafeAreaView,
    Text,
    View,
    Image,
    TouchableOpacity,
    ImageBackground,
    FlatList, 
    StyleSheet
} from 'react-native'
import HeaderUI from "../navigation/HeaderUI";
import SlideBar from "../components/SlideBar";

export default function HomeScreen(props) {
    //navigation
    const {navigation, route} = props;
    //function of navigate 
    const {navigate, goback} = navigation;
    return (
        <SafeAreaView style = {styles.wrapper}>
            {/* <Text onPress={() => {
                navigate('Theo dõi')
            }} style = {{
                marginTop: 100,
                fontSize: 30,
            }}>This is HomeScreen</Text> */}
            <HeaderUI/>
            <SlideBar style = {styles.SlideBar}/>
        </SafeAreaView>
    )
}

const styles =  StyleSheet.create({
    wrapper: {
        backgroundColor:"#fff"
    },
    SlideBar: {
        backgroundColor: "#000"
    }
})