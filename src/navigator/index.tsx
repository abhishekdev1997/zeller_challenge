import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import screens from '../screens';
const Stack = createStackNavigator();
function Navigator() {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName='UserList'>
                <Stack.Screen
                    name="UserList"
                    component={screens.UserList.UserListScreen}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;