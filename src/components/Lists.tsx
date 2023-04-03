import { View } from "react-native";
import Name from "./Name";
import { RadioButton } from 'react-native-paper';
import { List, Avatar } from 'react-native-paper';
import { colorVariables } from "../utils";
import { CustomerListProps, UserTypeProps } from "../types";

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

