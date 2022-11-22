import React from "react";

import { Text, View } from "react-native";
import SlideBar from "./components/SlideBar";
import SlideBarData from "./data/SlideBarData" 
import MainNavigator from "./navigation/MainNavigator";
import UIScreen from "./navigation/UIScreen";
import { LibraryScreen } from "./screens";
import Profile from "./screens/Profile";
import SignIn from "./screens/SignIn"


export default function App() {
  return (
    <UIScreen/>
  );
}

