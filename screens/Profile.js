import { StyleSheet, Text, TextInput, View, Image } from 'react-native'
import React from 'react'
import colors from '../constants/colors'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function Profile() {
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Icon style={styles.back}
          name = {'angle-left'}
          size={26}
        />
        <Text style={styles.textHeader}>Trang cá nhân</Text>
        <Text> </Text>
      </View>

      <View style={styles.container}>
        <View style={styles.x}>
            <View style={styles.viewavatar}>
                <Image style={styles.imgavatar}
                source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
                />
            </View>

            <View style={styles.viewuser}>
                    <View style={styles.textView1}>
                        <Text style={styles.text1}>Nguyễn Quang Thịnh</Text>
                    </View>

                    <View style={styles.textView2}>
                        <View style={styles.viewpost}>
                            <Text style={styles.text3}>5</Text>
                            <Text style={styles.text2}>Bài đăng</Text>
                        </View>
                        <View style={styles.viewfollower}>
                            <Text style={styles.text3}>5</Text>
                            <Text style={styles.text2}>Người theo dõi</Text>
                        </View>
                        <View style={styles.viewfollowing}>
                            <Text style={styles.text3}>5</Text>
                            <Text style={styles.text2}>Đang theo dõi</Text>
                        </View>
                    </View>
                    
            </View>
        </View>
        
        <View style={styles.btnView1}>
                    <Text style={styles.btn1}>Chỉnh sửa trang cá nhân</Text>
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
    alignItems :'center',
    marginTop: 5

  },

  viewuser : {
    flex: 4,
    marginRight: 20
  },

  textView1 : {
    flex: 1,
    justifyContent: "center",
    alignItems :"flex-start",
    marginTop: 10

  },

  text1: {
    fontWeight : 'bold',
    fontSize : 19,
  },

  textView2 : {
    flex: 1,
    flexDirection : 'row',
    alignItems :'center',
    justifyContent: "space-around",

  },
  text2 : {
    fontSize: 13
  },

  text3: {
    fontSize: 15
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

  
  
  btnView1 : {
    width : "62%",
    height : 30,
    borderRadius : 6,
    borderWidth: 1,
    backgroundColor : "#D6D6D6",
    alignItems :'center',
    justifyContent: 'center',
    marginTop : 10,
    borderColor : 'white',
    // paddingHorizontal: 40
  },

  
  
  viewavatar: {
    marginLeft: 20,
    marginRight: 20
  },

  imgavatar: {
    width: 81,
    height: 81,
    borderRadius: 50
  },
  
  x: {
    flexDirection: "row",
  },

  viewpost: {
    justifyContent: "center",
    alignItems: "center",
  },

  viewfollower: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 15
  },

  viewfollowing: {
    justifyContent: "center",
    alignItems: "center"
  }
  
  
})