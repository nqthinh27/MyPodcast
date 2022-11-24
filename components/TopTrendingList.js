import { View, StyleSheet, FlatList, Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SlideBarData } from "../data/SlideBarData";
import {TopTrendingData} from "../data/TopTrendingData";
import TopTrendingItem from "./TopTrendingItem";

export default function TopTrendingList(props) {
    const datas = TopTrendingData
    // console.log(TopTrendingData[0].avtUrl)
    // var listItem = datas.map(data => {
    //     <TopTrendingItem avtUrl={data.avtUrl} title={data.title} author={data.author} ranking={data.ranking}/>
    // })
    return (
        <ScrollView style={styles.wrapper} horizontal={true}>
           
             <View style={styles.contentWrapper}>
                <View style={styles.contentSection}>
        <TopTrendingItem avtUrl={datas[0].avtUrl} title={datas[0].title} author={datas[0].author} ranking={datas[0].ranking}/>
        <TopTrendingItem avtUrl={datas[1].avtUrl} title={datas[1].title} author={datas[1].author} ranking={datas[1].ranking}/>
        <TopTrendingItem avtUrl={datas[2].avtUrl} title={datas[2].title} author={datas[2].author} ranking={datas[2].ranking}/>
                </View>
            </View>
            <View style={styles.contentWrapper}>
                <View style={styles.contentSection}>
        <TopTrendingItem avtUrl={datas[3].avtUrl} title={datas[3].title} author={datas[3].author} ranking={datas[3].ranking}/>
        <TopTrendingItem avtUrl={datas[4].avtUrl} title={datas[4].title} author={datas[4].author} ranking={datas[4].ranking}/>
        <TopTrendingItem avtUrl={datas[5].avtUrl} title={datas[5].title} author={datas[5].author} ranking={datas[5].ranking}/>
                </View>
            </View>
            <View style={styles.contentWrapper}>
                <View style={styles.contentSection}>
        <TopTrendingItem avtUrl={datas[6].avtUrl} title={datas[6].title} author={datas[6].author} ranking={datas[6].ranking}/>
        <TopTrendingItem avtUrl={datas[7].avtUrl} title={datas[7].title} author={datas[7].author} ranking={datas[7].ranking}/>
        <TopTrendingItem avtUrl={datas[8].avtUrl} title={datas[8].title} author={datas[8].author} ranking={datas[8].ranking}/>
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