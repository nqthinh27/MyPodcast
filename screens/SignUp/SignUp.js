import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../../constants/colors'
import Icon from 'react-native-vector-icons/Entypo'


export default function SignUp(props) {
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
          onPress={()=>{navigate('SignIn')}}
        />
        <Text style={styles.textHeader}>Đăng ký</Text>
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
            secureTextEntry={true}
            ></TextInput>
        </View>

        <View style={styles.textInputView2}>
          <TextInput style={styles.textInput2}
            placeholder='Nhập lại Mật khẩu'
            secureTextEntry={true}
          ></TextInput>
        </View>
        
        <TouchableOpacity 
        style={styles.btnView1} 
        onPress={()=> {
            navigate('OTPcodeSU');
        }}>
          <Text style={styles.btn1}>Đăng ký</Text>
        </TouchableOpacity>

        <View style={styles.textView2}>
          <Text style={styles.text2}>Đã có tài khoản? </Text>
          <Text 
          style={styles.text3} 
          onPress={()=> {
            navigate('SignIn');
        }}>Đăng nhập</Text>
        </View>

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
    justifyContent: 'center',
    marginTop: 20
  },
  
  textInputView1 : {
    marginHorizontal : 20,
    borderBottomWidth : 1,
    borderBottomColor: '#C0C0C0',
    width : '90%',
  },

  textInputView2 : {
    flexDirection : "row",
    marginHorizontal : 20,
    borderBottomWidth : 1,
    borderBottomColor: '#C0C0C0',
    width : '90%',
    marginTop : 46,
    justifyContent: "space-between"
  },

  textView2 : {
    flexDirection : "row",
    marginHorizontal : 20,
    alignItems :'center',
    justifyContent: 'center',
    marginTop : 63,

  },
  textInput1: {
    fontSize:15
  },
  textInput2: {
    fontSize:15,
    width: "100%"
  },
  text2 : {
    color : '#B0ADAD',
    fontSize : 15,
    borderBottomWidth : 1,
    borderBottomColor : '#FF6363'
  },
  text3 : {
    fontSize : 15,
    color: "#FF6363"
  },

  btnView1 : {
    width : '90%',
    height : 55,
    borderRadius : 25,
    borderWidth: 1,
    backgroundColor : colors.primary,
    alignItems :'center',
    justifyContent: 'center',
    borderColor : 'white',
    marginTop : 63

  },
  btn1 : {
    color : 'white',
    fontSize:17,
    fontWeight: 'bold'
  },
  
})