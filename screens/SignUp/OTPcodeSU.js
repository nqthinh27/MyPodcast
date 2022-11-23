import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../../constants/colors'
import Icon from 'react-native-vector-icons/Entypo'


export default function OTPcodeSU(props) {
  //navigation
  const { navigation, route } = props;
  //function of navigate 
  const { navigate, goback } = navigation;
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Icon style={styles.back}
          name = {'chevron-left'}
          size={26}
        />
        <Text style={styles.textHeader}>Xác Minh</Text>
        <Text> </Text>
      </View>

      <View style={styles.container}>
        <View style={styles.textView1}>
          <Text style={styles.text1}>Nhập Mã OTP </Text>
        </View>
        <View style={styles.textInputView1}>
          <TextInput style={styles.textInput1}
            placeholder='x x x x x x'
            
          ></TextInput>
        </View>
        <View style={styles.textView2}>
          <Text style={styles.text2}>Chưa nhận được mã OTP? </Text>
          <Text 
          style={styles.text3}
          onPress = {() => {alert("Gửi thành công mã OTP")}}>Gửi lại</Text>
        </View>
        <TouchableOpacity 
        style={styles.btnView1} 
        onPress={()=> {
          navigate('Success')}}>
          <Text style={styles.btn1}>Xác nhận</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main : {
    flex: 1,
    backgroundColor:"#fff"
  },

  header : {
    flex : 1,
    marginHorizontal: 20,
    marginTop : 40,
    flexDirection : "row",
    justifyContent: "space-between",
    alignItems : "flex-start"
  },

  back : {
    // alignSelf: "flex-start",
  },

  textHeader : {
    fontWeight : "bold",
    fontSize: 21
  },
  container : {
    flex: 20,
    backgroundColor : '#fff',
    alignItems :'center',
    marginTop: "20%"

  },

  textView1 : {
    marginHorizontal: 20,
    alignItems :'center',
    justifyContent: 'center',
  },
  text1: {
    fontWeight : 'bold',
    fontSize : 17,
  },
  textInputView1 : {
    marginHorizontal : 20,
    borderBottomWidth : 1,
    borderBottomColor: '#C0C0C0',
    width : '90%',
    marginTop : 27,
    alignItems :'center',
    justifyContent: 'center',

  },
  textInput1 : {
  },
  textView2 : {
    flexDirection : 'row',
    marginHorizontal : 20,
    alignItems :'center',
    justifyContent: 'center',
    marginTop : 27

  },
  text2 : {
    color : '#B0ADAD',
    fontSize : 14,
  },
  text3 : {
    color : 'red',
    fontSize : 13,
  },
  btnView1 : {
    width : '90%',
    height : 55,
    borderRadius : 25,
    borderWidth: 1,
    backgroundColor : colors.primary,
    alignItems :'center',
    justifyContent: 'center',
    marginTop : 27,
    borderColor : 'white'
  },
  btn1 : {
    color : 'white',
    fontSize: 17,
    fontWeight: 'bold'
  }
  
  
})