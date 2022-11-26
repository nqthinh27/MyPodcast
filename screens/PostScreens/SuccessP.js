import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import colors from '../../constants/colors'
import Icon from 'react-native-vector-icons/Ionicons'

export default function Success(props) {
  //navigation
  const { navigation, route } = props;
  //function of navigate 
  const { navigate, goback } = navigation;
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Đăng ký</Text>
      </View>

      <View style={styles.container}>
        <Icon style={styles.success}
          name={'checkmark-circle'}
          size={80}
          color={colors.primary}
        />

        <View style={styles.textView1}>
          <Text style={styles.text1}>Đăng bài thành công</Text>
        </View>

        <TouchableOpacity
          style={styles.btnView1}
          onPress={() => {
            navigate('UIScreen');
          }}>
          <Text style={styles.btn1}>"Trở về trang chủ"</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff"
  },

  header: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start"
  },

  textHeader: {
    fontWeight: "bold",
    fontSize: 21
  },
  container: {
    flex: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: "35%"
  },

  textView1: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    fontSize: 21,
  },
  btnView1: {
    width: '90%',
    height: 55,
    borderRadius: 25,
    borderWidth: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 46,
    borderColor: 'white'
  },
  btn1: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold'
  }
})