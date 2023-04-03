import { View } from "react-native";
import Name from "./Name";
import { RadioButton } from 'react-native-paper';
import { List, Avatar } from 'react-native-paper';
import { colorVariables } from "../utils";
import { CustomerListProps } from "../types";


const RadioButtonList = (props: CustomerListProps) => {
    return (
        <View>
            {
                props.list.map((user) => {
                    return (
                        <List.Item
                            key={user.id}
                            title={props => <Name name={user.name} />}
                            left={props => <RadioButton
                                uncheckedColor={colorVariables.grey}
                                color={colorVariables.blue}
                                value={user.id}
                            />}
                        />
                    )
                })
            }
        </View>
    )
}

const AvatarList = (props: CustomerListProps) => {
    return (
        <View>
            {
                props.list.map((user) => {
                    return (
                        <List.Item
                            key={user.id}
                            title={props => <Name name={user.name} />}
                            left={props => <Avatar.Text size={30} label="XD" style={{ borderRadius: 5, backgroundColor: colorVariables.blue }} />}
                        />
                    )
                })
            }
        </View>
    )
}

export {
    RadioButtonList,
    AvatarList
}

