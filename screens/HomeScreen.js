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
    Alert,
    TextInput
} from 'react-native'
import HeaderUI from "../components/HeaderUI";
import SlideBar from "../components/SlideBar";
import PopularList from "../components/PopularList";
import TopTrendingList from "../components/TopTrendingList"
import VerticalPodcast from "../components/VerticalPodcast";
import SignIn from "./SignIn";
import MainNavigator from "../navigation/MainNavigator";
import Profile from "./Profile"
import Icon from 'react-native-vector-icons/Fontisto'
import { Button } from "react-native-web";
import colors from "../constants/colors";
import TopTrendingItem from "../components/TopTrendingItem";
import { TopTrendingData } from "../data/TopTrendingData";

export default function HomeScreen(props) {
    //navigation
    const { navigation, route } = props;
    //function of navigate 
    const { navigate, goback } = navigation;
    const datas = TopTrendingData

    return (
        <SafeAreaView style={styles.wrapper}>
            <ScrollView>
                {/* ==========================================HEADER========================================== */}
                <View style={styles.Header}>
                    <TouchableOpacity onPress={() => {
                        navigate('SignIn');
                        // Alert.alert('aaa','aaa')
                    }}>
                        <Image
                            source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/mypodcast-88135.appspot.com/o/avatar.jpg?alt=media&token=fc074eb8-e67f-4235-8230-160cae1557b5' }}
                            style={styles.avatar} />
                    </TouchableOpacity>
                    <View style={styles.searchSection}>
                        <Icon style={styles.searchIcon} name="search" size={20} color="#ccc" />
                        <TextInput
                            style={styles.input}
                            placeholder="Tìm kiếm podcast, tác giả, album,..."
                        // onChangeText={(searchString) => { this.setState({ searchString }) }}
                        // underlineColorAndroid="transparent"
                        />
                    </View>
                    <TouchableOpacity>
                        <Image
                            source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/mypodcast-88135.appspot.com/o/icon%2Fico_bell1.png?alt=media&token=85036c85-d95d-4b34-bff2-7f193a3149a4' }}
                            style={styles.bell} />
                    </TouchableOpacity>
                </View>
                {/* ==========================================Slide bar========================================== */}
                {/* <TouchableOpacity onPress={() => {
                                navigate('SignIn');
                                // Alert.alert('aaa','aaa')
            }} style = {{
                marginTop: 100,
                fontSize: 30,
            }}><Text>This is HomeScreen</Text></TouchableOpacity> */}
                <SlideBar style={trendingStyles.SlideBar} />

                <Text style={styles.title}>Bảng xếp hạng</Text>
                {/* ==========================================BẢNG XẾP HẠNG========================================== */}
                <ScrollView style={trendingStyles.wrapper} horizontal={true}>

                    <View style={trendingStyles.contentWrapper}>
                        <View style={trendingStyles.contentSection}>
                            <TouchableOpacity onPress={() => { navigate('SignIn') }} >
                                <TopTrendingItem avtUrl={datas[0].avtUrl} title={datas[0].title} author={datas[0].author} ranking={datas[0].ranking} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigate('SignIn') }} >
                                <TopTrendingItem avtUrl={datas[1].avtUrl} title={datas[1].title} author={datas[1].author} ranking={datas[1].ranking} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigate('SignIn') }} >
                                <TopTrendingItem avtUrl={datas[2].avtUrl} title={datas[2].title} author={datas[2].author} ranking={datas[2].ranking} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={trendingStyles.contentWrapper}>
                        <View style={trendingStyles.contentSection}>
                            <TouchableOpacity onPress={() => { navigate('SignIn') }} >
                                <TopTrendingItem avtUrl={datas[3].avtUrl} title={datas[3].title} author={datas[3].author} ranking={datas[3].ranking} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigate('SignIn') }} >
                                <TopTrendingItem avtUrl={datas[4].avtUrl} title={datas[4].title} author={datas[4].author} ranking={datas[4].ranking} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigate('SignIn') }} >
                                <TopTrendingItem avtUrl={datas[5].avtUrl} title={datas[5].title} author={datas[5].author} ranking={datas[5].ranking} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={trendingStyles.contentWrapper}>
                        <View style={trendingStyles.contentSection}>
                            <TouchableOpacity onPress={() => { navigate('SignIn') }} >
                                <TopTrendingItem avtUrl={datas[6].avtUrl} title={datas[6].title} author={datas[6].author} ranking={datas[6].ranking} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigate('SignIn') }} >
                                <TopTrendingItem avtUrl={datas[7].avtUrl} title={datas[7].title} author={datas[7].author} ranking={datas[7].ranking} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigate('SignIn') }} >
                                <TopTrendingItem avtUrl={datas[8].avtUrl} title={datas[8].title} author={datas[8].author} ranking={datas[8].ranking} />
                            </TouchableOpacity>
                        </View>
                    </View>

                </ScrollView>

                {/* ==========================================Mới phát hành========================================== */}
                <Text style={[styles.title, styles.blank]}>Mới phát hành</Text>
                <PopularList></PopularList>
                <Text style={[styles.title, styles.blank]}>Thư giãn cuối ngày</Text>
                <PopularList></PopularList>
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
    }, 
    Header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 16
    },
    avatar: {
        width: 35,
        height: 35,
        borderRadius: 35,
    },
    input: {
        height: 32,
        marginRight: 12,
        backgroundColor: "#F0F0F0",
        // borderRadius: 32,
        padding: 0,
        flex: 1,
        color: '#A0A0A0'
    },
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
        color: '#A0A0A0',
        borderRadius: 32,
        marginHorizontal: 8
    },
    searchIcon: {
        paddingVertical: 8,
        paddingRight: 4,
        paddingLeft: 10
    },
    bell: {
        height: 26,
        width: 26,
    }
})

const trendingStyles = StyleSheet.create({
    wrapper: {
        // margin: 11,
        marginLeft: 16,
        flexDirection: 'row',
        // alignItems: 'center'
    },
    contentWrapper: {
        width: 315,
        marginRight: 16,
        borderRadius: 10,
        backgroundColor: '#EDEDED',
    },
    contentSection: {
        marginVertical: 6,
        marginHorizontal: 12
    },

})