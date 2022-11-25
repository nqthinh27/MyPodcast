import { SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo'
import { PlaylistData } from '../../data/PlaylistData'
import VerticalPodcastB from '../../components/VerticalPodcastB'
import GlobalStyles from '../../components/GlobalStyles'

export default function Playlist(props) {
  return (
    <SafeAreaView style={[styles.main, GlobalStyles.droidSafeArea]}>

    <ScrollView>
        <View style={styles.header}>
        <Icon style={styles.back}
          name = {'chevron-left'}
          size={26}
          onPress = {()=>{props.navigation.navigate('Library')}}
        />
        <Text style={styles.textHeader}>Playlist</Text>
        <Text>Chọn</Text>
      </View>
      
      <View style={styles.container}>
        
      <View style={[styles.wrapper,{flexWrap:'wrap'}]} horizontal={true}>
          {PlaylistData.map((item,index) => {
            return (
              <TouchableOpacity key={index}>
                <VerticalPodcastB item={item} />
              </TouchableOpacity>
            )
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
      wrapper: {
        marginHorizontal: 9,
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
})