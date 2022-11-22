import React from "react";
import { Text, View, Image, TouchableOpacity, TextInput, FlatList, ScrollView, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import colors from "../constants/colors";
import ForYouList from "../components/ForYouList";
import HeaderUI from "../navigation/HeaderUI";
import fontSizes from "../constants/fontSizes";

export default function LibraryScreen(props) {
    //navigation
    const { navigation, route } = props;
    //function of navigate 
    const { navigate, goback } = navigation;
    return (
        <ScrollView style={{
            top: 40,
        }}>
            <HeaderUI />
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
    }
})