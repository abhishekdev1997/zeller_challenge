import { View, StyleSheet } from "react-native";
import Components from "../../components";
import UserType from "./UserType";
import UserList from "./UserList";
import { Divider } from 'react-native-paper';
import { colorVariables, strings } from "../../utils";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import * as Queries from "../../graphql/listCustomersQuery";
import { getUserTypeById } from "./UserTypeArray";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";

type UserListNavigationProp = StackNavigationProp<RootStackParamList>

type Props = {
    navigation: UserListNavigationProp
}

const UserListScreen = ({ navigation }: Props) => {
    const [selectedType, changeSelectedType] = useState(0)
    const [customerList, updateCustomerList] = useState([])
    const { data, loading, error } = useQuery(Queries.ZELLER_LIST_CUSTOMER_QUERY)

    useEffect(() => {
        console.log("graphqldata", data, error)
        if (!loading && data.listZellerCustomers) {
            updateCustomerList(data.listZellerCustomers.items)
        }
    })

    useEffect(() => { console.log("selectedType", selectedType) }, [selectedType])

    const onUserClick = () => {
        navigation.navigate("HomeScreen")
    }

    return (
        <View style={styles.container}>
            <View style={styles.user_type}>
                <Components.Heading1 title={strings.UserType} />
                <UserType containerStyle={styles.user_type_view} changeSelectedType={changeSelectedType} />
            </View>
            <Divider style={styles.divider} />
            <View style={styles.user_list}>
                <Components.Heading1 title={getUserTypeById(selectedType)?.label + " " + strings.Users} />
                {customerList.length > 0 ? <UserList containerStyle={styles.user_list_view} list={customerList} selectedType={selectedType} onUserClick={onUserClick} /> : null}
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
        marginTop: "10%",
    },
    user_type_view: {
        marginTop: "4%"
    },
    user_list: {
        marginLeft: "10%",
        marginTop: "10%",
    },
    user_list_view: {
        marginTop: "4%"
    },
    divider: {
        width: "80%",
        marginTop: "8%",
        alignSelf: "center"
    }
})

export default UserListScreen