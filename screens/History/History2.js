import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '../../constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import RecentList from '../../components/RecentList';

export default function History2() {
  return (
    
    <View style={styles.main}>
        <View style={styles.header}>
        <Icon style={styles.back}
          name = {'angle-left'}
          size={26}
        />
        <Text style={styles.textHeader}>Lịch sử</Text>
        <Text>Huỷ  </Text>
      </View>
      
      <View style={styles.container}>
        <RecentList style={styles.list} />
        <View style={styles.viewdelete}>  
            <Icon style={styles.circle}
            name = {'circle-o'}
            size={30}
            />
            <Text style={styles.textcen}>Chọn tất cả lịch sử xem</Text>
            <View style={styles.viewtextdelete}>
                <Text style={styles.textdelete}>Xoá</Text>
            </View>
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
        alignSelf: "center",
        fontWeight : "bold",
        fontSize: 21
      },
      container : {
        flex: 20,
        backgroundColor : '#fff',
        // alignItems :'center',
        // justifyContent: 'center'
      },

      viewdelete: {
        height: 55,
        flexDirection: "row",
        borderTopWidth: 0.5,
        alignItems :'center',
        justifyContent: 'center'
      },
      circle: {
        flex: 1,
        marginLeft: 20,
      },

      textcen: {
        flex: 5,
        color: colors.inactive
      },

      viewtextdelete: {
        flex: 1,
        alignItems :'center',
        justifyContent: 'center',
        backgroundColor: "#FF6363",
        marginHorizontal: 20,
        padding: 5
      }
})