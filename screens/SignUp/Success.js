import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import colors from '../../constants/colors'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function Success() {
    return (
        <View style={styles.main}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Đăng ký</Text>
        </View>
  
        <View style={styles.container}>
            <Icon style={styles.success}
            name = {'check-circle-o'}
            size={80}
            color="green"
            />

          <View style={styles.textView1}>
            <Text style={styles.text1}>Đăng ký thành công!</Text>
          </View>
          
          <View style={styles.btnView1}>
            <Text style={styles.btn1}>Đăng nhập</Text>
          </View>
        </View>
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
    justifyContent: "center",
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
    marginTop: "35%"
  },
  
  textView1 : {
    marginTop: 10,
    alignItems :'center',
    justifyContent: 'center',
  },
  text1: {
    fontSize : 20,
  },
  btnView1 : {
    width : '90%',
    height : 55,
    borderRadius : 25,
    borderWidth: 1,
    backgroundColor : colors.primary,
    alignItems :'center',
    justifyContent: 'center',
    marginTop : 46,
    borderColor : 'white'
  },
  btn1 : {
    color : 'white',
  }
})