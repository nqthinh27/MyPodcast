import VerticalPodcast from "./VerticalPodcast";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native";

export default function PopularList(props) {
    return (
        <ScrollView style={styles.wrapper} horizontal={true}>
            <VerticalPodcast/>
            <VerticalPodcast/>
            <VerticalPodcast/>
            <VerticalPodcast/>
            <VerticalPodcast/>
            <VerticalPodcast/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginLeft: 16,
        // marginRight: 6
    }
})