import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../../constants/colors'
import Icon from 'react-native-vector-icons/Entypo'

export default function ForgotPasswordSc(props) {
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
          color={colors.primary}
        />
        <Text style={styles.textHeader}>Quên Mật Khẩu</Text>
        <Text> </Text>
      </View>

      <View style={styles.container}>
        <View style={styles.textView1}>
          <Text style={styles.text1}>Nhập Địa Chỉ Email</Text>
        </View>
        <View style={styles.textInputView1}>
          <TextInput style={styles.textInput1}
            placeholder='Email'
          ></TextInput>
        </View>
        {/* <View style={styles.textView2}>
          <Text style={styles.text2}>Quay lại đăng nhập</Text>
        </View> */}
        <TouchableOpacity
          style={styles.btnView1}
          onPress={() => {
            navigate('NewPassword');
          }}>
          <Text style={styles.btn1}>Gửi</Text>
        </TouchableOpacity>
        <Text style={styles.text3}>hoặc</Text>
        <View style={styles.iconitems}>
          <Icon name="facebook" size={40} color="#0571E6" onPress={() => alert("Đăng nhập với Facebook")} />
          <Text>    </Text>
          <Icon name="google--with-circle" size={40} color="#ED5A4F" onPress={() => alert("Đăng nhập với Facebook")} />
        </View>

        <Text style={styles.text4}>Chưa có tài khoản?</Text>
        <TouchableOpacity
          style={styles.btnView2}
          onPress={() => {
            navigate('SignUp');
          }}>
          <Text style={styles.btn2} >Đăng Kí</Text>
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
    justifyContent: "space-between",
    alignItems: "flex-start"
  },

  textHeader: {
    fontWeight: "bold",
    fontSize: 21,
  },
  container: {
    flex: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  textView1: {
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  textInputView1: {
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#C0C0C0',
    width: '90%',
    marginTop: 27

  },
  textInput1: {
    fontSize: 15
  },
  textView2: {
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 27

  },
  text2: {
    color: '#B0ADAD',
    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#FF6363'
  },
  btnView1: {
    width: '90%',
    height: 55,
    borderRadius: 25,
    borderWidth: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 27,
    borderColor: 'white'
  },
  btn1: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold'
  },
  text3: {
    fontWeight: '500',
    fontSize: 15,
    marginTop: 57,
    marginBottom: 10
  },
  text4: {
    color: '#B0ADAD',
    fontSize: 14,
    borderBottomWidth: 1,
    borderBottomColor: colors.inactive,
    marginTop: 58
  },
  btnView2: {
    width: '90%',
    height: 55,
    borderRadius: 25,
    borderWidth: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 11,
    borderColor: colors.primary
  },
  btn2: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 17
  },

  iconitems: {
    flexDirection: "row"
  },
  iconfb: {
    marginRight: 10
  }


})