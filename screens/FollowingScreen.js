import React from "react";
import { Text, View, Image, TouchableOpacity, TextInput, FlatList, ScrollView, icon, FontAwesomeIcon, StyleSheet } from "react-native";
import ForYou from "../components/ForYou";
import Icon from "react-native-vector-icons/FontAwesome5";
import colors from "../constants/colors";
import HeaderUI from "../navigation/HeaderUI";
import FollowerList from "../components/FollowerList";
import ForYouList from "../components/ForYouList";
import fontSizes from "../constants/fontSizes";

export default function FollowingScreen(props) {
    //navigation
    const { navigation, route } = props;
    //function of navigate 
    const { navigate, goback } = navigation;
    return (
        <ScrollView style={{
            top: 40
        }}>
            <HeaderUI />
            <View style={{
                top: 20
            }}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={fontSizes.titleSmall}>Người dùng theo dõi</Text>
                    <Icon
                        name='chevron-right'
                        style={{ paddingStart: 4, opacity: 0.7 , top: 9}}
                        size={15} color={'black'}
                    />
                </View>
                <FollowerList/>
                <Text style={fontSizes.titleSmall}>Dành cho bạn</Text>
                <ForYouList/>
            </View>
        </ScrollView>
    )
}
