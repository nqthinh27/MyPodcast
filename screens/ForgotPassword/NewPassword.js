import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../../constants/colors'
import Icon from 'react-native-vector-icons/Entypo'

export default function NewPassword(props) {
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
          onPress = {()=>{navigate('ForgotPasswordSc')}}
        />
        <Text style={styles.textHeader}>Mật Khẩu Mới</Text>
        <Text> </Text>
      </View>

    <View style={styles.container}>
      <View style={styles.textView1}>
        <Text style={styles.text1}>Nhập Mật Khẩu Mới</Text>
      </View>
      <View style={styles.textInputView1}>
        <TextInput style={styles.textInput1}
          placeholder=''
          secureTextEntry={true}
        ></TextInput>
      </View>

      <View style={styles.textView1}>
        <Text style={styles.text1}>Xác Nhận Mật Khẩu Mới</Text>
      </View>
      <View style={styles.textInputView1}>
        <TextInput style={styles.textInput1}
          placeholder=''
          secureTextEntry={true}
        ></TextInput>
      </View>

      <TouchableOpacity style={styles.btnView1}
      onPress={() => {
        navigate('SuccessFP');
      }}>
        <Text 
        style={styles.btn1}>Xác Nhận</Text>
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
    alignSelf : 'flex-start',
    marginTop : 27
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
    marginTop : 27

  },

  textInput1 : {
    fontSize: 15
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