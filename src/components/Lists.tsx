import { View, FlatList, ListRenderItem } from "react-native";
import Name from "./Name";
import { RadioButton } from 'react-native-paper';
import { List, Avatar } from 'react-native-paper';
import { colorVariables } from "../utils";
import { CustomerListProps, UserTypeProps } from "../types";
import { getNameInitial } from "../utils";

interface UserTypePropsExtended extends UserTypeProps {
    updateSelected: (id: number) => void,
    itemTestId: string
}

interface CustomerListPropsExtended extends CustomerListProps {
    onItemClick: () => void,
    pullToRefresh: () => void,
    itemTestId: string
}


const RadioButtonList = (props: UserTypePropsExtended) => {
    const { updateSelected, itemTestId } = props
    return (
        <View>
            {
                props.list.map((type) => {
                    return (
                        <List.Item
                            key={type.id}
                            title={props => <Name name={type.label} />}
                            left={props => <RadioButton
                                testID={itemTestId + "_" + type.label}
                                status={type.selected ? "checked" : "unchecked"}
                                uncheckedColor={colorVariables.grey}
                                color={colorVariables.blue}
                                value={type.type}
                                onPress={() => updateSelected(type.id)}
                            />}
                        />
                    )
                })
            }
        </View>
    )
}

const AvatarList = (props: CustomerListPropsExtended) => {

    const renderList: ListRenderItem<CustomerListProps["list"][0]> = (item) => {
        return (
            <List.Item
                testID={props.itemTestId + "_" + item.item.name}
                key={item.item.id}
                title={props => <Name name={item.item.name} />}
                description={item.item.role}
                left={props => <Avatar.Text size={32} label={getNameInitial(item.item.name)} labelStyle={{ color: colorVariables.blue }} style={{ borderRadius: 5, backgroundColor: colorVariables.light_blue, alignSelf: "center" }} />}
                onPress={() => props.onItemClick()}
            />
        )
    }


    return (
        <View>
            <FlatList
                data={props.list}
                renderItem={renderList}
                keyExtractor={item => item.id}
                refreshing={false}
                onRefresh={() => props.pullToRefresh()}
            />
        </View>
    )
}

export {
    RadioButtonList,
    AvatarList
}

