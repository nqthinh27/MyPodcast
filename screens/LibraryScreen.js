import React from "react";
import { Text, View, Image, TouchableOpacity, TextInput, FlatList, ScrollView, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import colors from "../constants/colors";
import ForYouList from "../components/ForYouList";
import HeaderUI from "../components/HeaderUI";
import fontSizes from "../constants/fontSizes";

export default function LibraryScreen(props) {
    navigation
    const { navigation, route } = props;
    //function of navigate 
    const { navigate, goback } = navigation;
    return (
        <ScrollView style={{
            top: 40,
        }}>
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

                
            <View><View style={styles.h1}>
                <Text style={fontSizes.titleSmall}>Thư viện</Text>
                <View style={{
                    flexDirection: 'row',
                    flex: 1,
                }}>
                    <View style={styles.h2}>
                        <Icon
                            name='star'
                            style={{ paddingStart: 10, top: 3 }}
                            size={18}
                        />
                        <Text style={styles.title2}>Đã lưu</Text>
                    </View>
                    <View style={styles.h2}>
                        <Icon
                            name='heart'
                            style={{ paddingStart: 10, top: 3 }}
                            size={18} color={'black'}
                        />
                        <Text style={styles.title2}>Yêu thích</Text>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    flex: 1,
                }}>
                    <View style={styles.h2}>
                        <Icon
                            name='bookmark'
                            style={{ paddingStart: 10, top: 3 }}
                            size={18} color={'black'}
                        />
                        <Text style={styles.title2}>Nghe gần đây</Text>
                    </View>
                    <View style={styles.h2}>
                        <Icon
                            name='user'
                            style={{ paddingStart: 10 }}
                            size={18} color={'black'}
                        />
                        <Text style={styles.title2}>Tài khoản</Text>
                    </View>
                </View>
            </View>
                <View>
                    <Text style={fontSizes.titleSmall}>Có thể bạn sẽ thích</Text>

                    <ForYouList />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    h1: {
        paddingVertical: 10,
        margin: 5,
        borderRadius: 40,
        height: 150,
    },

    h2: {
        height: 45,
        width: 170,
        flexDirection: 'row',
        paddingVertical: 10,
        margin: 10,
        borderRadius: 30,
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
    },

    title2: {
        color: 'black',
        fontSize: 16,
        paddingStart: 10,
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