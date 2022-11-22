import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import colors from '../../constants/colors'
import Icon from 'react-native-vector-icons/FontAwesome'


export default function App() {
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Icon style={styles.back}
          name = {'angle-left'}
          size={26}
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
        <View style={styles.textView2}>
          <Text style={styles.text2}>Quay lại đăng nhập</Text>
        </View>
        <View style={styles.btnView1}>
          <Text style={styles.btn1}>Gửi</Text>
        </View>
        <Text style={styles.text3}>hoặc</Text>
        <View style={styles.iconitems}>
          <Icon style={styles.iconfb}
            name = {'facebook-square'}
            size={26}
          />
          <Icon style={styles.icongg}
            name = {'google'}
            size={26}
          />
        </View>
        
        <Text style={styles.text4}>Chưa có tài khoản?</Text>
        <View style={styles.btnView2}>
          <Text style={styles.btn2}>Đăng Kí</Text>
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

  textView1 : {
    marginHorizontal: 20,
    alignItems :'center',
    justifyContent: 'center',
  },
  text1: {
    fontWeight : 'bold',
    fontSize : 16,
  },
  textInputView1 : {
    marginHorizontal : 20,
    borderBottomWidth : 1,
    borderBottomColor: '#C0C0C0',
    width : '90%',
    marginTop : 27

  },
  textInput1 : {
  },
  textView2 : {
    marginHorizontal : 20,
    alignItems :'center',
    justifyContent: 'center',
    marginTop : 27

  },
  text2 : {
    color : '#B0ADAD',
    fontSize : 13,
    borderBottomWidth : 1,
    borderBottomColor : '#FF6363'
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
    color : 'white'
  },
  text3 : {
    fontWeight : 'bold',
    fontSize : 15,
    marginTop : 57
  },
  text4 : {
    color : '#B0ADAD',
    fontSize : 13,
    borderBottomWidth : 1,
    borderBottomColor : colors.inactive,
    marginTop : 58
  },
  btnView2 : {
    width : '90%',
    height : 55,
    borderRadius : 25,
    borderWidth: 1,
    backgroundColor : '#fff',
    alignItems :'center',
    justifyContent: 'center',
    marginTop : 11,
    borderColor : colors.primary
  },
  btn2 : {
    color : colors.primary,
    fontWeight : 'bold',
    fontSize : 15
  },

  iconitems : {
    flexDirection : "row"
  },
  iconfb : {
    marginRight: 10
  }
  
  
})