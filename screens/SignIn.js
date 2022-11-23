import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../constants/colors'
import Icon from 'react-native-vector-icons/Entypo'


export default function SignIn(props) {
  //navigation
  const { navigation, route } = props;
  //function of navigate 
  const { navigate, goback } = navigation;
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Icon style={styles.back}
          name={'chevron-left'}
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
            password={true}
          ></TextInput>
          <Text
            style={styles.textForgot}
            onPress={() => {
              navigate('ForgotPasswordSc');
            }}>Quên mật khẩu?</Text>
        </View>

        <TouchableOpacity
          style={styles.btnView1}
          onPress={() => {
            navigate('Profile');
          }} >
          <Icon name="login" size={25} color="#fff" />
          <Text style={styles.btn1}>  Đăng nhập</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnView2} onPress={() => alert("Đăng nhập với Google")}>
          <Icon name="google--with-circle" size={35} color="#ED5A4F" />
          <Text style={styles.btn2}>  Đăng nhập với Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnView3} onPress={() => alert("Đăng nhập với Facebook")}>
          <Icon name="facebook" size={33} color="#0571E6" />
          <Text style={styles.btn3} >  Đăng nhập với Facebook</Text>
        </TouchableOpacity>

        <View style={styles.textView2}>
          <Text style={styles.text2}>Chưa có tài khoản? </Text>
          <Text 
          style={styles.text3}
          onPress={()=> {
            navigate('SignUp');
        }}>Đăng kí</Text>
        </View>

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
  textInput1: {
    fontSize: 15
  },

  textInputView2: {
    flexDirection: "row",
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#C0C0C0',
    width: '90%',
    marginTop: 46,
    justifyContent: "space-between"
  },
  textForgot: {
    color: "#FF6363",
    fontSize: 15
  },

  textView2: {
    flexDirection: "row",
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 63,

  },
  textInput2: {
    flex: 1,
    fontSize: 15
  },
  text2: {
    color: '#B0ADAD',
    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#FF6363'
  },
  text3: {
    fontSize: 15,
    color: "#FF6363",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#FF6363",
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
    marginTop: 63,
    flexDirection: 'row'
  },
  btn1: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
    alignItems: 'center',
    justifyContent: 'center'
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
    marginTop: 30,
    flexDirection: 'row'
  },
  btn2: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 17
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
    borderColor: colors.primary,
    flexDirection: 'row'
  },
  btn3: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 17
  },


})