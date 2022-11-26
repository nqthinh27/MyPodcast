import { SafeAreaView, ScrollView, StyleSheet, Text, Touchable, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo'
import { HistoryData } from '../../data/HistoryData'
import HorizontalPodcast from '../../components/HorizontalPodcast'
import GlobalStyles from '../../components/GlobalStyles'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Favourite(props) {

  return (
    
    <SafeAreaView style={[styles.main, GlobalStyles.droidSafeArea]}>

    <ScrollView>
        <View style={styles.header}>
        <Icon style={styles.back}
          name = {'chevron-left'}
          size={26}
          onPress = {()=>{props.navigation.navigate('Library')}}
        />
        <Text style={styles.textHeader}>Yêu thích</Text>
        <Text>Chọn</Text>
      </View>
      
      <View style={styles.container}>
        
      <View style={{ marginLeft: 16 }}>
                            {HistoryData.map((item,index) => {
                                return (
                                    <TouchableOpacity key={index}>
                                        <HorizontalPodcast item={item} />
                                    </TouchableOpacity>)
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