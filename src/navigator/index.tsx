import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import screens from '../screens';
import { RootStackParamList } from '../types';

const Stack = createStackNavigator<RootStackParamList>();

function Navigator() {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName='UserListScreen'>
                <Stack.Screen
                    name="UserListScreen"
                    component={screens.UserList.UserListScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="HomeScreen"
                    component={screens.Home.HomeScreen}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;