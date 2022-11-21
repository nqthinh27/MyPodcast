import { View, StyleSheet, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import TopTrendingItem from "./TopTrendingItem";

export default function TopTrendingList(props) {
    return (
        <ScrollView style={styles.wrapper} horizontal={true}>
            <View style={styles.contentWrapper}>
                <View style={styles.contentSection}>
                    <TopTrendingItem />
                    <TopTrendingItem />
                    <TopTrendingItem />
                </View>
            </View>
            <View style={styles.contentWrapper}>
                <View style={styles.contentSection}>
                    <TopTrendingItem />
                    <TopTrendingItem />
                    <TopTrendingItem />
                </View>
            </View>
            <View style={styles.contentWrapper}>
                <View style={styles.contentSection}>
                    <TopTrendingItem />
                    <TopTrendingItem />
                    <TopTrendingItem />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        // margin: 11,
        marginLeft: 16,
        flexDirection: 'row',
        // alignItems: 'center'
    },
    contentWrapper: {
        width: 315,
        marginRight:16,
        borderRadius: 10,
        backgroundColor: '#EDEDED',
    }, 
    contentSection: {
        marginVertical:6,
        marginHorizontal:12
    },
    
})