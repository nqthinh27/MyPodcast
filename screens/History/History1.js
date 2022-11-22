import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LibraryScreen from '../LibraryScreen'
import colors from '../../constants/colors'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function History1() {
  return (
    
    <View style={styles.main}>
        <View style={styles.header}>
        <Icon style={styles.back}
          name = {'angle-left'}
          size={26}
        />
        <Text style={styles.textHeader}>Lịch sử</Text>
        <Text>Chọn</Text>
      </View>
      
      <View style={styles.container}>
        
      </View>

      <LibraryScreen/>
    </View>
  )
}

const styles = StyleSheet.create({
    main : {
        flex: 1,
      },
    
      header : {
        flex : 1,
        marginHorizontal: 20,
        marginTop : 40,
        flexDirection : "row",
        justifyContent: "space-between",
        alignItems : "flex-start"
      },
    
      textHeader : {
        fontWeight : "bold",
        fontSize: 21
      },
      container : {
        flex: 20,
        backgroundColor : '#fff',
        alignItems :'center',
        justifyContent: 'center'
      },
})