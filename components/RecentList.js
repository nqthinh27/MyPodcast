import React from "react";
import { Text, View, Image, StyleSheet,ScrollView } from "react-native";
import Recent from "./Recent";

export default function RecentList(props) {
    return (
        <ScrollView>
            <View>
                <Recent/>
                <Recent/>
                <Recent/>
                <Recent/>
                <Recent/>
                <Recent/>
                <Recent/>
                <Recent/>
                <Recent/>
                <Recent/>
            </View>
        </ScrollView>
    )
}