import React from "react";
import { Text, View, Image, TouchableOpacity, TextInput, FlatList, ScrollView, icon, FontAwesomeIcon, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";
import colors from "../constants/colors";
import fontSizes from "../constants/fontSizes";

export default function SettingScreen(props) {
    //navigation
    const { navigation, route } = props;
    //function of navigate 
    const { navigate, goback } = navigation;
    return (
        <ScrollView style={{
            top: 55,
        }}>
            <View>
                <Text style={{
                    left: 18,
                    fontSize: 25,
                }}>Cài đặt và quyền riêng tư</Text>
            </View>

            <View><View style={styles.h1}>
                <Text style={styles.fontBlur}>Tài khoản</Text>
            </View>
                <View style={styles.setIco}>
                    <Icon
                        name='user'
                        style={{ paddingStart: 10 }}
                        size={18} color={'black'}
                    />
                    <Text style={styles.fontText}>Tài khoản</Text>
                    <View style={{ flex: 1 }} />
                    <Icon
                        name='chevron-right'
                        style={{ paddingEnd: 10, opacity: 0.5 }}
                        size={20} color={'black'}
                    />
                </View>

                <View style={styles.setIco}>
                    <Icon
                        name='lock'
                        style={{ paddingStart: 10, opacity: 0.6 }}
                        size={18} color={'black'}
                    />
                    <Text style={styles.fontText}>Quyền riêng tư</Text>
                    <View style={{ flex: 1 }} />
                    <Icon
                        name='chevron-right'
                        style={{ paddingEnd: 10, opacity: 0.5 }}
                        size={20} color={'black'}
                    />
                </View>

                <View style={styles.setIco}>
                    <Icon
                        name='shield-alt'
                        style={{ paddingStart: 10, opacity: 0.5 }}
                        size={18} color={'black'}
                    />
                    <Text style={styles.fontText}>Bảo mật</Text>
                    <View style={{ flex: 1 }} />
                    <Icon
                        name='chevron-right'
                        style={{ paddingEnd: 10, opacity: 0.5 }}
                        size={20} color={'black'}
                    />
                </View></View>

            <View><View style={styles.h1}>
                <Text style={styles.fontBlur}>Hiện thị </Text>
            </View>
                <View style={styles.setIco}>
                    <Icon
                        name='globe-asia'
                        style={{ paddingStart: 10, opacity: 0.5 }}
                        size={18} color={'black'}
                    />
                    <Text style={styles.fontText}>Ngôn ngữ</Text>
                    <View style={{ flex: 1 }} />
                    <Icon
                        name='chevron-right'
                        style={{ paddingEnd: 10, opacity: 0.5 }}
                        size={20} color={'black'}
                    />
                </View>

                <View style={styles.setIco}>
                    <Icon
                        name='bell'
                        style={{ paddingStart: 10, opacity: 0.6 }}
                        size={18} color={'black'}
                    />
                    <Text style={styles.fontText}>Thông báo</Text>
                    <View style={{ flex: 1 }} />
                    <Icon
                        name='chevron-right'
                        style={{ paddingEnd: 10, opacity: 0.5 }}
                        size={20} color={'black'}
                    />
                </View>

                <View style={styles.setIco}>
                    <Icon
                        name='moon'
                        style={{ paddingStart: 10 }}
                        size={18} color={'black'}
                    />
                    <Text style={styles.fontText}>Chế độ tối</Text>
                    <View style={{ flex: 1 }} />
                    <Icon
                        name='chevron-right'
                        style={{ paddingEnd: 10, opacity: 0.5 }}
                        size={20} color={'black'}
                    />
                </View></View>

            <View><View style={styles.h1}>
                <Text style={styles.fontBlur}>Hỗ trợ & Giới thiệu</Text>
            </View>
                <View style={styles.setIco}>
                    <Icon
                        name='exclamation-triangle'
                        style={{ paddingStart: 10, opacity: 0.5 }}
                        size={18} color={'black'}
                    />
                    <Text style={styles.fontText}>Báo cáo vấn đề</Text>
                    <View style={{ flex: 1 }} />
                    <Icon
                        name='chevron-right'
                        style={{ paddingEnd: 10, opacity: 0.5 }}
                        size={20} color={'black'}
                    />
                </View>

                <View style={styles.setIco}>
                    <Icon
                        name='toolbox'
                        style={{ paddingStart: 10, opacity: 0.6 }}
                        size={18} color={'black'}
                    />
                    <Text style={styles.fontText}>Hỗ trợ</Text>
                    <View style={{ flex: 1 }} />
                    <Icon
                        name='chevron-right'
                        style={{ paddingEnd: 10, opacity: 0.5 }}
                        size={20} color={'black'}
                    />
                </View>

                <View style={styles.setIco}>
                    <Icon
                        name='info-circle'
                        style={{ paddingStart: 10, opacity: 0.5 }}
                        size={18} color={'black'}
                    />
                    <Text style={styles.fontText}>Giới thiệu</Text>
                    <View style={{ flex: 1 }} />
                    <Icon
                        name='chevron-right'
                        style={{ paddingEnd: 10, opacity: 0.5 }}
                        size={20} color={'black'}
                    />
                </View></View>

            <View><View style={styles.h1}>
                <Text style={styles.fontBlur}>Đăng nhập</Text>
            </View>
                <View style={styles.setIco}>
                    <Icon
                        name='sync'
                        style={{ paddingStart: 10, opacity: 0.5 }}
                        size={18} color={'black'}
                    />
                    <Text style={styles.fontText}>Chuyển tài khoản</Text>
                    <View style={{ flex: 1 }} />
                    <Icon
                        name='chevron-right'
                        style={{ paddingEnd: 10, opacity: 0.5 }}
                        size={20} color={'black'}
                    />
                </View>

                <View style={styles.setIco}>
                    <Icon
                        name='sign-out-alt'
                        style={{ paddingStart: 10, opacity: 0.6 }}
                        size={18} color={'black'}
                    />
                    <Text style={styles.fontText}>Đăng xuất</Text>
                    <View style={{ flex: 1 }} />
                    <Icon
                        name='chevron-right'
                        style={{ paddingEnd: 10, opacity: 0.5 }}
                        size={20} color={'black'}
                    />
                </View></View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    h1: {
        top: 10,
        height: 30,
    },

    setIco: {
        flexDirection: 'row',
        paddingVertical: 10,
        alignContent: 'center',
        margin: 5,
        borderRadius: 40,
        backgroundColor: 'rgba(0, 0, 0, 0.05)'
    },

    fontBlur: {
        color: 'black',
        paddingStart: 18,
        opacity: 0.5,
    },

    fontText: {
        color: 'black',
        fontSize: 16,
        paddingStart: 15,
    }
})
