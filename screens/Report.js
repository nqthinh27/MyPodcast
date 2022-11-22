import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import colors from '../constants/colors'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function Report() {
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Icon style={styles.back}
          name = {'angle-left'}
          size={26}
        />
        <Text style={styles.textHeader}>Vui lòng chọn một lý do</Text>
        <Icon style={styles.back}
          name = {'angle-down'}
          size={26}
        />
      </View>

      <View style={styles.container}>
        <View style={styles.textView1}>
          <Text style={styles.text1}>Đăng nội dung không phù hợp</Text>
          <Icon style={styles.back}
            name = {'angle-right'}
            size={26}
            /> 
        </View>
        <View style={styles.textView1}>
          <Text style={styles.text1}>Giả mạo ai đó</Text>
          <Icon style={styles.back}
            name = {'angle-right'}
            size={26}
            /> 
        </View>
        <View style={styles.textView1}>
          <Text style={styles.text1}>Thông tin hồ sơ không phù hợp</Text>
          <Icon style={styles.back}
            name = {'angle-right'}
            size={26}
            /> 
        </View>
        <View style={styles.textView1}>
          <Text style={styles.text1}>Người dùng có thể dưới 13 tuổi</Text>
          <Icon style={styles.back}
            name = {'angle-right'}
            size={26}
            /> 
        </View>
        <View style={styles.textView1}>
          <Text style={styles.text1}>Vi phạm quyền sở hữu trí tuệ</Text>
          <Icon style={styles.back}
            name = {'angle-right'}
            size={26}
            /> 
        </View>
        <View style={styles.textView1}>
          <Text style={styles.text1}>Khác</Text>
          <Icon style={styles.back}
            name = {'angle-right'}
            size={26}
            /> 
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
    marginTop : 30,
    flexDirection : "row",
    justifyContent: "space-between",
    alignItems : "flex-start",
    borderBottomWidth : 0.3,
    paddingVertical: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },

  back : {
    marginHorizontal: 20,
  },

  textHeader : {
    fontWeight : "bold",
    fontSize: 16
  },
  container : {
    flex: 20,
    backgroundColor : '#fff',
  },

  textView1 : {
    flexDirection : "row",
    marginLeft: 20,
    alignItems : "flex-start",
    justifyContent: "space-between",
    marginTop : 20
  },
  text1: {
    fontWeight : 'bold',
    fontSize : 16,
  },
 
  
})