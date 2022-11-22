import {
    SafeAreaView,
    Text,
    View,
    Image,
    StyleSheet,
    TextInput,
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

export default function HeaderUI(props) {
    //navigation
    // const { navigation, route } = props;
    // //function of navigate 
    // const { navigate, goback } = navigation;
    return (
        <SafeAreaView style={styles.Header}>
            <Image source={
                {uri: 'https://firebasestorage.googleapis.com/v0/b/mypodcast-88135.appspot.com/o/avatar.jpg?alt=media&token=fc074eb8-e67f-4235-8230-160cae1557b5'}} 
                style={styles.avatar} 
                onPress={()=>{
                    // props.navigation.navigate('Theo dõi');
                    // Alert.alert('aaa','aaa')
                }} />
            {/* <View style={styles.blank}></View> */}
            <View style={styles.searchSection}>
                <Icon style={styles.searchIcon} name="search" size={20} color="#ccc" />
                <TextInput
                    style={styles.input}
                    placeholder="Tìm kiếm podcast, tác giả, album,..."
                    // onChangeText={(searchString) => { this.setState({ searchString }) }}
                    // underlineColorAndroid="transparent"
                />
            </View>
            <Icon style={styles.bell} name="bell" size={26} color="#000" />
            {/* <View><Text onPress={()=> {
                // props.navigation.navigate('Theo dõi');
            }}>abc</Text></View> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 16
    },
    blank: {
        flex: 1
    },
    avatar: {
        width: 35,
        height: 35,
        borderRadius: 35,
    },
    input: {
        height: 32,
        marginRight: 12,
        backgroundColor: "#F0F0F0",
        // borderRadius: 32,
        padding: 0,
        flex: 1,
        color: '#A0A0A0'
    },
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
        color: '#A0A0A0',
        borderRadius: 32,
        marginHorizontal: 8
    },
    searchIcon: {
        paddingVertical: 8,
        paddingRight: 4,
        paddingLeft: 10
    },
    bell: {
    }
})