import { View, StyleSheet } from "react-native";
import Components from "../../components";
import UserType from "./UserType";
import UserList from "./UserList";
import { Divider, TextInput } from 'react-native-paper';
import { colorVariables, strings, searchList } from "../../utils";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import * as Queries from "../../graphql/listCustomersQuery";
import { getUserTypeById } from "./UserTypeArray";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";
import { CustomerListProps } from "../../types";

type UserListNavigationProp = StackNavigationProp<RootStackParamList>

type Props = {
    navigation: UserListNavigationProp
}

const UserListScreen = ({ navigation }: Props) => {
    const [selectedType, changeSelectedType] = useState(0)
    const [customerList, updateCustomerList] = useState<CustomerListProps["list"]>([])
    const [searchQuery, updateSearchQuery] = useState('')
    const { data, loading, error } = useQuery(Queries.ZELLER_LIST_CUSTOMER_QUERY)

    useEffect(() => {
        if (!loading && data?.listZellerCustomers) {
            let filteredUsers = searchList(searchQuery, data.listZellerCustomers.items)
            updateCustomerList(filteredUsers)
        }
    }, [data, searchQuery])

    const onUserClick = () => {
        navigation.navigate("HomeScreen")
    }

    const pullToRefresh = () => {
        updateSearchQuery('')
    }

    return (
        <View style={styles.container}>
            <View style={styles.user_type}>
                <Components.Heading1 title={strings.UserType} />
                <UserType testId={strings.USER_TYPES_LIST_TEST_ID} itemTestId={strings.USER_TYPE_ITEM_TEST_ID} containerStyle={styles.user_type_view} changeSelectedType={changeSelectedType} />
            </View>
            <Divider testID={strings.DIVIDER_TEST_ID} style={styles.divider} />
            <TextInput testID={strings.SEARCH_BOX_TEST_ID} style={styles.search_box} textColor={colorVariables.grey} activeUnderlineColor={colorVariables.grey} underlineColor={colorVariables.grey} label="Search" value={searchQuery} onChangeText={text => updateSearchQuery(text)} />
            <View style={styles.user_list}>
                <Components.Heading1 title={getUserTypeById(selectedType)?.label + " " + strings.Users} />
                {customerList.length > 0 ? <UserList itemTestId={strings.USER_LIST_ITEM_ID} testId={strings.USER_LIST_TEST_ID} containerStyle={styles.user_list_view} list={customerList} selectedType={selectedType} onUserClick={onUserClick} pullToRefresh={pullToRefresh} /> : null}
            </View>
            <Divider testID={strings.DIVIDER_TEST_ID} style={styles.divider} />
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
    },
    search_box: {
        width: "80%",
        alignSelf: "center",
        borderTopEndRadius: 10,
        marginTop: "4%",
        marginBottom: "4%",
        backgroundColor: colorVariables.white
    }
})

export default UserListScreen