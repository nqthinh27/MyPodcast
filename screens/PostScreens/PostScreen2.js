import React from "react";
import { Text, View, StyleSheet, Image, Touchable, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Entypo'
import { SafeAreaView } from "react-navigation";
import colors from "../../constants/colors";
import GlobalStyles from "../../components/GlobalStyles";


export default function PostScreen2(props) {
  navigation
  const {navigation, route} = props;
  //function of navigate 
  const {navigate, goback} = navigation;
  return (

    <SafeAreaView style={[{ backgroundColor: "#fff" }, GlobalStyles.droidSafeArea]}>
      <View style={styles.header}>
        <View style={styles.viewback}>
          <Icon style={styles.back}
            name={'chevron-left'}
            size={26}
            onPress = {()=>{navigate('UIScreen')}}
          />
          <Text style={styles.textHeader1}>Đăng bài</Text>
        </View>
            <TouchableOpacity style = {styles.textHeader2Container} onPress = {()=>{navigate('SuccessP')}}>
        <Text style={styles.textHeader2}>Chia sẻ</Text>
            </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <View style={styles.viewuser}>
          <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/mypodcast-88135.appspot.com/o/avatar.jpg?alt=media&token=fc074eb8-e67f-4235-8230-160cae1557b5' }} style={styles.avatar} />
          <Text style={styles.textnameuser}>User name</Text>
        </View>

        <View style={styles.viewtextinput}>
          <TextInput style={styles.textinput}
            placeholder="Bạn đang nghĩ gì?"
          // multiline
          ></TextInput>
        </View>

        <View style={styles.viewprocess}>
          <View style={styles.viewimgaudio}>
            <Image
              style={styles.imgaudio}
              source={{
                uri: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/314573032_516013240472528_2976447931800781789_n.png?_nc_cat=102&ccb=1-7&_nc_sid=aee45a&_nc_ohc=t7_4im4NhzoAX8bkW8N&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRl9cuu05rLrhAo3tIhCGuQ8KntH_2CjeifeiPOo9hYQA&oe=63A458BC',
              }}
            />
          </View>

          <Text style={styles.textnameaudio}></Text>
          <View style={styles.viewnameaudio}>
            <Text style={styles.textnameaudio}>audio.mp3</Text>

          </View >
          <Icon style={styles.check}
            name={'check'}
            size={24}
          />
          {/* <Seekbar/> */}
        </View>
      </View>
    </SafeAreaView>




  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },

  header: {
    flex: 1,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  viewback: {
    flexDirection: "row"
  },

  textHeader1: {
    fontSize: 21,
    paddingStart: 8
  },
  textHeader2: {
    fontSize: 16,
    color: "#fff",
    fontWeight: '500'
  },

  textHeader2Container:{ 
    backgroundColor: colors.primary,
    padding:6,
    borderRadius:6,
    justifyContent: "flex-end"
  },

  container: {
    flex: 20,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: "space-between"
  },

  viewuser: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "center",
    marginHorizontal: 20
  },

  viewtextinput: {
    flex: 5,
    marginLeft: 20,
    alignSelf: 'flex-start',
    width: "100%",
  },
  textinput: {
    //paddingBottom: "100%",
  },

  imgpost1: {
    height: 216,
    width: 200
  },

  imgaudio: {
    height: 53,
    width: 40
  },

  textnameuser: {
    fontSize: 15,
    marginLeft: 7,
    fontWeight: "bold"
  },

  viewprocess: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#D9D9D9",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center"
  },

  viewimgaudio: {
    flex: 1.5,
    marginLeft: 20
  },

  viewnameaudio: {
    flex: 6
  },

  check: {
    flex: 1,
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 35,
  }
})