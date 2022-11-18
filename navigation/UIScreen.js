import * as React from "react";
import HomeScreen from "../screens/HomeScreen";
import FollowingScreen from "../screens/FollowingScreen";
import PostScreen from "../screens/PostScreen";
import LibraryScreen from "../screens/LibraryScreen";
import SettingScreen from "../screens/SettingScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import colors from "../constants/colors";
import Icon from 'react-native-vector-icons/FontAwesome'


const Tab = createBottomTabNavigator();
const screenOptions = ({route}) => ({
    headerShown:false,
    tabBarActiveTintColor: colors.primary,
    tabBarInactiveTintColor: colors.inactive,
    tabBarIcon: ({focused, color, size}) => {
        let screenName = route.name;
        let iconName = "";
        if(screenName == "Trang chủ") {
            iconName = "home"
        } else if(screenName == "Theo dõi") {
            iconName = "group"
        } else if(screenName == "PostScreen") {
            iconName = "plus"
        } else if(screenName == "Thư viện") {
            iconName = "bookmark"
        } else if(screenName == "Cài đặt") {
            iconName = "gear"
        }
        return <Icon
            name = {iconName}
            size={20}
            color={focused ? colors.primary : colors.inactive} />
    }
});
export default function UIScreen(props) {
    return (
        <NavigationContainer>
        <Tab.Navigator initialRouteName="Trang chủ" screenOptions={screenOptions}>
            <Tab.Screen name="Trang chủ" component={HomeScreen}/>
            <Tab.Screen name="Theo dõi" component={FollowingScreen}/>
            <Tab.Screen name="PostScreen" component={PostScreen}/>
            <Tab.Screen name="Thư viện" component={LibraryScreen}/>
            <Tab.Screen name="Cài đặt" component={SettingScreen}/>
        </Tab.Navigator>
        </NavigationContainer>
    )
}
