import { View, FlatList, ListRenderItem } from "react-native";
import Name from "./Name";
import { RadioButton } from 'react-native-paper';
import { List, Avatar } from 'react-native-paper';
import { colorVariables } from "../utils";
import { CustomerListProps, UserTypeProps } from "../types";
import { getNameInitial } from "../utils";

interface UserTypePropsExtended extends UserTypeProps {
    updateSelected: (id: number) => void
}


const RadioButtonList = (props: UserTypePropsExtended) => {
    const { updateSelected } = props
    return (
        <View>
            {
                props.list.map((type) => {
                    return (
                        <List.Item
                            key={type.id}
                            title={props => <Name name={type.label} />}
                            left={props => <RadioButton
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

const AvatarList = (props: CustomerListProps) => {


    const renderList: ListRenderItem<CustomerListProps["list"][0]> = (item) => {
        return (
            <List.Item
                key={item.item.id}
                title={props => <Name name={item.item.name} />}
                description={item.item.role}
                left={props => <Avatar.Text size={32} label={getNameInitial(item.item.name)} labelStyle={{ color: colorVariables.blue }} style={{ borderRadius: 5, backgroundColor: colorVariables.light_blue, alignSelf: "center" }} />}
            />
        )
    }


    return (
        <View>
            <FlatList
                data={props.list}
                renderItem={renderList}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export {
    RadioButtonList,
    AvatarList
}

