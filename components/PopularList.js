import VerticalPodcast from "./VerticalPodcast";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import { SlideBarData } from "../data/SlideBarData";
import { PopularData } from "../data/PopularData";
export default function PopularList(props) {
    console.log(PopularData);
    return (
        <ScrollView style={styles.wrapper} horizontal={true}>
            {PopularData.map(item => {
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