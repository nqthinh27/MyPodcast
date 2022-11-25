import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity} from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome'

export default function PostScreen(props) {
    //navigation
    const {navigation, route} = props;
    //function of navigate  
    const {navigate, goback} = navigation;
    return (

        <View style={styles.main}>
            {/* <Text onPress={() => {
                navigate('Thư viện')
            }} style = {{
                marginTop: 100,
                fontSize: 30
            }}></Text> */}

            <View style={styles.header}>
                {/* <Icon style={styles.back}
                name = {'angle-left'}
                size={26}
                /> */}
                {/* <Text style={styles.textHeader}>Đăng bài</Text> */}
            </View>

            <View style={styles.container}>
                <View style={styles.viewimg1}>
                    <Image
                        style={styles.imgpost1}
                        source={{
                        uri: 'https://scontent.fhan4-2.fna.fbcdn.net/v/t1.15752-9/313359250_1085514542146254_9210850966065127227_n.png?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=-z7LbTXq6nQAX90VA0U&_nc_ht=scontent.fhan4-2.fna&oh=03_AdSsHODEO4YAEOozWh-7S2mubPN0lKsJDZ4bzh8iYKbdNg&oe=63A408EE',
                    }}
                    />
                </View>

                <View style={styles.viewtext}>
                    <Text style={styles.text}>Tải lên âm thanh của bạn tại đây</Text>
                </View>

                <TouchableOpacity style={styles.viewimg2} onPress = {()=>{props.navigation.navigate('PostScreen2')}}>
                    <Image
                        style={styles.imgpost2}
                        source={{
                        uri: 'https://scontent.fhan3-5.fna.fbcdn.net/v/t1.15752-9/313394803_1817286368635183_1537591071517221617_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=pwfIRVLD8cQAX-djzNS&_nc_ht=scontent.fhan3-5.fna&oh=03_AdQNdQxiJTQYtNvV0cKfXYuqprUbVbOnto4JQ-tociK2KA&oe=63A42BB9',
                    }}
                    />
                </TouchableOpacity>
                
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
        marginTop : 0,
        flexDirection : "row",
        justifyContent: "flex-start",
        alignItems : "center",
      },
    
      textHeader : {
        fontWeight : "",
        fontSize: 21
      },
      container : {
        flex: 20,
        backgroundColor : '#fff',
        alignItems :'center',
        justifyContent: "center",
      },

      viewtext: {
        marginVertical: 35
      },

      imgpost1: {
        height: 216,
        width: 200
      },

      imgpost2: {
        height: 47,
        width: 62
      },
      text: {
        fontStyle: "italic",
        fontSize: 15,
        color: "#5C5C5C"
      }

      
})