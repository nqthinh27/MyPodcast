import VerticalPodcast from "./VerticalPodcast";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import { SlideBarData } from "../data/SlideBarData";
import { RelexData } from "../data/RelexData";
export default function PopularList(props) {
    return (
        <ScrollView style={styles.wrapper} horizontal={true}>
            {RelexData.map(item => {
                return <VerticalPodcast item={item} />
            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginLeft: 16,
        // marginRight: 6
    }
})