import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import colors from '../constants/colors'
import Icon from 'react-native-vector-icons/FontAwesome'


export default function SignIn() {
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Icon style={styles.back}
          name={'angle-left'}
          size={26}
        />
        <Text style={styles.textHeader}>Đăng nhập</Text>
        <Text> </Text>
      </View>

      <View style={styles.container}>

        <View style={styles.textInputView1}>
          <TextInput style={styles.textInput1}
            placeholder='Email'
          ></TextInput>
        </View>
        <View style={styles.textInputView2}>
          <TextInput style={styles.textInput2}
            placeholder='Mật khẩu'
          ></TextInput>
          <Text style={styles.textForgot}>Quên mật khẩu?</Text>
        </View>

        <View style={styles.btnView1}>
          <Text style={styles.btn1}>Đăng nhập</Text>
        </View>

        <View style={styles.btnView2}>
          <Text style={styles.btn2}>Đăng nhập với Google</Text>
        </View>

        <View style={styles.btnView3}>
          <Text style={styles.btn3} >Đăng nhập với Facebook</Text>
        </View>

        <View style={styles.textView2}>
          <Text style={styles.text2}>Tạo tài khoản mới? </Text>
          <Text style={styles.text3}>Đăng kí</Text>
        </View>

      </View>
    </View>


  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },

  header: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
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
    justifyContent: 'center',
    marginTop: 20
  },

  textInputView1: {
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#C0C0C0',
    width: '90%',
  },

  textInputView2: {
    flexDirection: "row",
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#C0C0C0',
    width : '90%',
    marginTop : 46,
    justifyContent: "space-between"
  },

  textForgot: {
    flex: 1,
    color: "#FF6363"
  },

  textView2: {
    flexDirection: "row",
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 63,

  },
  text2: {
    color: '#B0ADAD',
    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#FF6363'
  },
  text3: {
    fontSize: 15,
    color: "#FF6363"
  },

  btnView1: {
    width: '90%',
    height: 55,
    borderRadius: 25,
    borderWidth: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    marginTop: 63

  },
  btn1: {
    color: 'white'
  },


  btnView2: {
    width: '90%',
    height: 55,
    borderRadius: 25,
    borderWidth: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.primary,
    marginTop: 30

  },
  btn2: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 15
  },

  btnView3: {
    width: '90%',
    height: 55,
    borderRadius: 25,
    borderWidth: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    borderColor: colors.primary
  },
  btn3: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 15
  },


})