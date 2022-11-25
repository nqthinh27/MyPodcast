import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo'
import { HistoryData } from '../../data/HistoryData'
import HorizontalPodcast from '../../components/HorizontalPodcast'

export default function History(props) {
  return (
    <SafeAreaView style={styles.main}>

    <ScrollView>
        <View style={styles.header}>
        <Icon style={styles.back}
          name = {'chevron-left'}
          size={26}
          onPress = {()=>{props.navigation.navigate('Library')}}
        />
        <Text style={styles.textHeader}>Lịch sử</Text>
        <Text>Chọn</Text>
      </View>
      
      <View style={styles.container}>
        
      <View style={{ marginLeft: 16 }}>
                            {HistoryData.map((item,index) => {
                                return (
                                    <View onPress={() => alert("123")} key={index}>
                                        <HorizontalPodcast item={item} />
                                    </View>)
                            })}


      </View>
      </View>

    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    main : {
      backgroundColor:"#fff"
      },
    
      header : {
        marginHorizontal: 20,
        flexDirection : "row",
        justifyContent: "space-between",
        alignItems : "flex-start"
      },
    
      textHeader : {
        alignSelf: "center",
        fontWeight : "bold",
        fontSize: 21,
        paddingBottom: 16
      },
      container : {
        flex: 20,
        backgroundColor : '#fff',
        // alignItems :'center',
        // justifyContent: 'center'
      },
})