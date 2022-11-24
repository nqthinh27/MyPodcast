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
import SlideBar from "../components/SlideBar";
import PopularList from "../components/PopularList";
import Icon from 'react-native-vector-icons/Fontisto'
import TopTrendingItem from "../components/TopTrendingItem";
import { TopTrendingData } from "../data/TopTrendingData";
import VerticalPodcast from "../components/VerticalPodcast";
import { NewReLeaseData } from "../data/NewReleaseData";
import { SlideBarData } from "../data/SlideBarData";
import SlideItem from "../components/SlideItem";
import { RelexData } from "../data/RelexData";

export default function HomeScreen(props) {
    //navigation
    const { navigation, route } = props;
    //function of navigate 
    const { navigate, goback } = navigation;
    var isLogin = false;
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
                <FlatList
                    horizontal={true}
                    style={styles.wrapper}
                    data={SlideBarData}
                    renderItem={({ item }) => {
                        return (
                        <TouchableOpacity>
                            <SlideItem item={item} />
                        </TouchableOpacity>)
                    }}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={16}
                    pagingEnabled />


                <Text style={styles.title}>Bảng xếp hạng</Text>
                {/* ==========================================BẢNG XẾP HẠNG========================================== */}
                <ScrollView style={trendingStyles.wrapper} horizontal={true}>

                    <View style={trendingStyles.contentWrapper}>
                        <View style={trendingStyles.contentSection}>
                            <TouchableOpacity onPress={() => { navigate('SignIn') }} >
                                <TopTrendingItem avtUrl={TopTrendingData[0].avtUrl} title={TopTrendingData[0].title} author={TopTrendingData[0].author} ranking={TopTrendingData[0].ranking} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigate('SignIn') }} >
                                <TopTrendingItem avtUrl={TopTrendingData[1].avtUrl} title={TopTrendingData[1].title} author={TopTrendingData[1].author} ranking={TopTrendingData[1].ranking} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigate('SignIn') }} >
                                <TopTrendingItem avtUrl={TopTrendingData[2].avtUrl} title={TopTrendingData[2].title} author={TopTrendingData[2].author} ranking={TopTrendingData[2].ranking} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={trendingStyles.contentWrapper}>
                        <View style={trendingStyles.contentSection}>
                            <TouchableOpacity onPress={() => { navigate('SignIn') }} >
                                <TopTrendingItem avtUrl={TopTrendingData[3].avtUrl} title={TopTrendingData[3].title} author={TopTrendingData[3].author} ranking={TopTrendingData[3].ranking} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigate('SignIn') }} >
                                <TopTrendingItem avtUrl={TopTrendingData[4].avtUrl} title={TopTrendingData[4].title} author={TopTrendingData[4].author} ranking={TopTrendingData[4].ranking} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigate('SignIn') }} >
                                <TopTrendingItem avtUrl={TopTrendingData[5].avtUrl} title={TopTrendingData[5].title} author={TopTrendingData[5].author} ranking={TopTrendingData[5].ranking} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={trendingStyles.contentWrapper}>
                        <View style={trendingStyles.contentSection}>
                            <TouchableOpacity onPress={() => { navigate('SignIn') }} >
                                <TopTrendingItem avtUrl={TopTrendingData[6].avtUrl} title={TopTrendingData[6].title} author={TopTrendingData[6].author} ranking={TopTrendingData[6].ranking} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigate('SignIn') }} >
                                <TopTrendingItem avtUrl={TopTrendingData[7].avtUrl} title={TopTrendingData[7].title} author={TopTrendingData[7].author} ranking={TopTrendingData[7].ranking} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigate('SignIn') }} >
                                <TopTrendingItem avtUrl={TopTrendingData[8].avtUrl} title={TopTrendingData[8].title} author={TopTrendingData[8].author} ranking={TopTrendingData[8].ranking} />
                            </TouchableOpacity>
                        </View>
                    </View>

                </ScrollView>

                {/* ==========================================Mới phát hành/NewRelease========================================== */}
                <Text style={[styles.title, styles.blank]}>Mới phát hành</Text>
                <ScrollView style={{ marginLeft: 16 }} horizontal={true}>
                    {NewReLeaseData.map(item => {
                        return (
                            <TouchableOpacity onPress={() => alert("123")}>
                                <VerticalPodcast item={item} />
                            </TouchableOpacity>)
                    })}
                </ScrollView>
                <Text style={[styles.title]}>Thư giãn cuối ngày</Text>
                <ScrollView style={{ marginLeft: 16 }} horizontal={true}>
                    {RelexData.map(item => {
                        return (
                            <TouchableOpacity onPress={() => alert("123")}>
                                <VerticalPodcast item={item} />
                            </TouchableOpacity>)
                    })}
                </ScrollView>
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