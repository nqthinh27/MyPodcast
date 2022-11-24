import React from "react";
import { Text, View, Image, StyleSheet,ScrollView } from "react-native";
import HorizontalPodcast from "./HorizontalPodcast";

export default function HorizontalPodcastList(props) {
    return (
        <ScrollView>
            <View>
                <HorizontalPodcast/>
                <HorizontalPodcast/>
                <HorizontalPodcast/>
                <HorizontalPodcast/>
                <HorizontalPodcast/>
                <HorizontalPodcast/>
                <HorizontalPodcast/>
                <HorizontalPodcast/>
                <HorizontalPodcast/>
                <HorizontalPodcast/>
                <HorizontalPodcast/>
                <HorizontalPodcast/>
            </View>
        </ScrollView>
    )
}