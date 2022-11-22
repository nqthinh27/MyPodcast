import React from "react";
import {
    SafeAreaView,
    Text,
    View,
    Image,
    TouchableOpacity,
    ImageBackground,
    FlatList,
    StyleSheet,
    ScrollView,
    Alert
} from 'react-native'
import HeaderUI from "../components/HeaderUI";
import SlideBar from "../components/SlideBar";
import PopularList from "../components/PopularList";
import TopTrendingList from "../components/TopTrendingList"
import VerticalPodcast from "../components/VerticalPodcast";
import SignIn from "./SignIn";
import MainNavigator from "../navigation/MainNavigator";
import Profile from "./Profile"

export default function HomeScreen(props) {
    //navigation
    const { navigation, route } = props;
    //function of navigate 
    const { navigate, goback } = navigation;
    return (
        <SafeAreaView style={styles.wrapper}>
            <ScrollView>
                {/* <Text onPress={() => {
                navigate('Đăng nhập')
                // Alert.alert('aaa','aaa')
            }} style = {{
                marginTop: 100,
                fontSize: 30,
            }}>This is HomeScreen</Text> */}
                {/* <MainNavigator /> */}
                <HeaderUI></HeaderUI>
                <SlideBar style={styles.SlideBar} />
                <Text style={styles.title}>Bảng xếp hạng</Text>
                <TopTrendingList></TopTrendingList>
                <Text style={[styles.title, styles.blank]}>Mới phát hành</Text>
                <PopularList></PopularList>
                <Text style={[styles.title, styles.blank]}>Thư giãn cuối ngày</Text>
                <PopularList></PopularList>
                {/* <SignIn></SignIn> */}
                <Profile/>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "#fff"
    },
    SlideBar: {
        backgroundColor: "#000"
    },
    title: {
        fontSize: 21,
        fontWeight: "bold",
        marginLeft: 16,
        marginBottom: 6
    },
    blank: {
        marginTop: 16
    }
})