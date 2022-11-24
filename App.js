import React from "react";

import { Text, View } from "react-native";
import SlideBar from "./components/SlideBar";
import SlideBarData from "./data/SlideBarData" 
import MainNavigator from "./navigation/MainNavigator";
import TabNavigator from "./navigation/TabNavigator";
import { LibraryScreen } from "./screens";
import Profile from "./screens/Profile";


export default function App() {
  return (
    <TabNavigator/>
  );
}

