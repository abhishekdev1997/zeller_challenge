import { View, Text, StyleSheet } from "react-native";
import Components from "../../components";
import UserType from "./UserType";
import UserList from "./UserList";
import { Divider } from 'react-native-paper';

const UserListScreen = () => {
    return (
        <View style={styles.container}>
            <Components.Heading1 title="This is title" />
            <View style={{ marginLeft: "4%" }}>
                <UserType />
            </View>
            <Divider style={{ width: "80%" }} />
            <Components.Heading1 title="This is title" />
            <View style={{ marginLeft: "4%" }}>
                <UserList />
            </View>
            <Divider style={{ width: "80%" }} />
        </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: "10%",
        marginTop: "4%"
    }
})

export default UserListScreen