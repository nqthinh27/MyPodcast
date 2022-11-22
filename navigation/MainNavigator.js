import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HeaderUI from '../components/HeaderUI';
import { FollowingScreen } from '../screens';
import HomeScreen from '../screens/HomeScreen';
import LibraryScreen from '../screens/LibraryScreen';
import SignIn from '../screens/SignIn'

const Stack = createStackNavigator();

export default function MainNavigator() {
    return 
            <Stack.Navigator initialRouteName="Header">
                <Stack.Screen name='Header' component={HeaderUI} />
                <Stack.Screen name="SignIn" component={SignIn} />
            </Stack.Navigator>
}
