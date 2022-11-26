import React from "react";
import { Text, View, Image, TouchableOpacity, TextInput, FlatList, ScrollView, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Fontisto";
import colors from "../constants/colors";
import HorizontalPodcast from "../components/HorizontalPodcast";
import { SafeAreaView } from "react-navigation";
import { RecommendData } from "../data/RecommendData";
import GlobalStyles from "../components/GlobalStyles";
import variable from "../constants/variable";

export default function LibraryScreen(props) {
    navigation
    const { navigation, route } = props;
    //function of navigate 
    const { navigate, goback } = navigation;
    function playerNavigate() {
        navigate('PlayerScreen');
    }
    return (
        <SafeAreaView style = {[{backgroundColor:"#fff"}, GlobalStyles.droidSafeArea]}>
            <ScrollView >
                {/* ==========================================HEADER========================================== */}
                <View style={styles.Header}>
                    <TouchableOpacity onPress={() => {
                        variable.isLogin == 0 ? navigate('SignIn') : navigate('MyProfile');
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

                {/* ==========================================CONTENT========================================== */}
                <View><View style={styles.h1}>
                    <Text style={[styles.titleSmall, {marginTop:8}]}>Thư viện</Text>
                    <View style={{
                        flexDirection: 'row',
                        flex: 1,
                        marginLeft:16,
                        justifyContent: "space-around",
                        marginRight: 16,
                    }}>
                        <TouchableOpacity style={styles.h2} onPress = {()=>{navigate('Saved')}}>
                            <Icon
                                name='star'
                                style={{ paddingStart: 15 }}
                                size={18}
                                color= {colors.primary}
                            />
                            <Text style={styles.title2}>Đã lưu</Text>
                        </TouchableOpacity>
                        <View style={{flex:1}}></View>
                        <TouchableOpacity style={styles.h2} onPress = {()=>{navigate('Favourite')}}>
                            <Icon
                                name='heart'
                                style={{ paddingStart: 15 }}
                                size={18} 
                                color="#FF0000"
                            />
                            <Text style={styles.title2}>Yêu thích</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        flex: 1,
                        marginLeft:16, 
                        justifyContent: "space-around",
                        marginRight: 16
                    }}>
                        <TouchableOpacity style={styles.h2} onPress = {()=>{navigate('History')}}>
                            <Icon
                                name='bookmark-alt'
                                style={{ paddingStart: 15 }}
                                size={20} color="#00EBEB"
                            />
                            <Text style={styles.title2}>Nghe gần đây</Text>
                        </TouchableOpacity>
                        <View style={{flex:1}}></View>
                        <TouchableOpacity style={styles.h2} onPress = {()=>{navigate('Playlist')}}>
                            <Icon
                                name='play-list'
                                style={{ paddingStart: 15 }}
                                size={18} color='#2EDC21'
                            />
                            <Text style={styles.title2}>Playlist</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                    <View>
                        <Text style={[styles.titleSmall, {paddingBottom: 10, paddingTop: 10}]}>Có thể bạn sẽ thích</Text>

                        <View style={{ marginLeft: 16 }}>
                            {RecommendData.map((item,index) => {
                                return (
                                    <TouchableOpacity onPress={() => { playerNavigate() }} key={index}>
                                        <HorizontalPodcast item={item} />
                                    </TouchableOpacity>)
                            })}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    h1: {
        paddingVertical: 10,
        // margin: 5,
        borderRadius: 40,
        height: 150,
    },

    titleSmall:{
        fontSize: 18,
        fontWeight: "bold",
        paddingLeft: 16
    },

    h2: {
        height: 45,
        width: 167,
        flexDirection: 'row',
        // paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 30,
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        alignItems: "center",
    },

    title2: {
        color: 'black',
        fontSize: 16,
        paddingStart: 10,
        fontWeight: "500",
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