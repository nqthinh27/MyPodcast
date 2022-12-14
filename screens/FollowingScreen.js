import React from "react";
import { Text, View, Image, TouchableOpacity, TextInput, FlatList, ScrollView, icon, FontAwesomeIcon, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Fontisto'
import { SafeAreaView } from "react-navigation";
import { ForYouData } from "../data/ForYouData";
import HorizontalPodcast from "../components/HorizontalPodcast";
import GlobalStyles from "../components/GlobalStyles";
import { FollowedData } from "../data/FollowedData";
import Followers from "../components/FollowerItem";
import variable from "../constants/variable";

export default function FollowingScreen(props) {
    //navigation
    const { navigation, route } = props;
    //function of navigate 
    const { navigate, goback } = navigation;
    function playerNavigate() {
        navigate('PlayerScreen');
    }
    return (
        <SafeAreaView style={[{ backgroundColor: "#fff" }, GlobalStyles.droidSafeArea]}>

            <ScrollView>
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

                <View style={{
                    top: 20
                }}>
                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                        <Text style={styles.title}>Người dùng đang theo dõi  </Text>
                        <Icon
                            name='angle-right'
                            style={{ bottom: 3 }}
                            size={15} color={'black'}
                        />
                    </View>

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {FollowedData.map((item, index) => {
                            return (
                                <TouchableOpacity onPress={() => { navigate('OtherProfile') }} key={index}>
                                    <Followers item={item} />
                                </TouchableOpacity>)
                        })}
                    </ScrollView>

                    <View style={{ flexDirection: 'row', alignItems: "center", marginTop: 10 }}>
                        <Text style={[styles.title, { paddingTop: 5, paddingBottom: 3 }]}>Dành cho bạn  </Text>
                        <Icon
                            name='angle-right'
                            style={{ bottom: 3 }}
                            size={15} color={'black'}
                        />

                    </View>

                    <View style={{ marginLeft: 16, marginBottom: 20 }}>
                        {ForYouData.map((item, index) => {
                            return (
                                <TouchableOpacity onPress={() => { playerNavigate() }} key={index}>
                                    <HorizontalPodcast item={item} />
                                </TouchableOpacity>)
                        })}
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    Header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 16
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 16,
        marginBottom: 6
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
