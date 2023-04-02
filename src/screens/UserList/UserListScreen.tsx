import { View, Text, StyleSheet } from "react-native";
import Components from "../../components";
import UserType from "./UserType";
import UserList from "./UserList";
import { Divider } from 'react-native-paper';
import { colorVariables, strings } from "../../utils";

const UserListScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.user_type}>
                <Components.Heading1 title={strings.UserType} />
                <UserType />
            </View>
            <Divider style={styles.divider} />
            <View style={styles.user_list}>
                <Components.Heading1 title={strings.AdminUsers} />
                <UserList />
            </View>
            <Divider style={styles.divider} />
        </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorVariables.white,
    },
    user_type: {
        marginLeft: "10%",
        marginTop: "4%",
    },
    user_list: {
        marginLeft: "10%",
        marginTop: "4%",
    },
    divider: {
        width: "80%",
        margin: "4%"
    }
})

export default UserListScreen