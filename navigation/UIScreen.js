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
        if(screenName == "Home") {
            iconName = "home"
        } else if(screenName == "Follow") {
            iconName = "group"
        } else if(screenName == "Post") {
            iconName = "plus"
        } else if(screenName == "Library") {
            iconName = "bookmark"
        } else if(screenName == "Setting") {
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
        <Tab.Navigator initialRouteName="Home" screenOptions={screenOptions}>
            <Tab.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{
                tabBarLabel: 'Trang chủ'
            }}/>
            <Tab.Screen 
            name="Follow" 
            component={FollowingScreen}
            options={{
                tabBarLabel: 'Theo dõi'
            }}/>
            <Tab.Screen 
            name="Post" 
            component={PostScreen}
            options={{
                tabBarLabel: 'Đăng bài'
            }}/>
            <Tab.Screen 
            name="Library"
            component={LibraryScreen}
            options={{
                tabBarLabel: 'Thư viện'
            }}/>
            <Tab.Screen 
            name="Setting" 
            component={SettingScreen}options={{
                tabBarLabel: 'Cài đặt'
            }}/>
        </Tab.Navigator>
    )
}
