import { View } from "react-native";
import Name from "./Name";
import { RadioButton } from 'react-native-paper';
import { List, Avatar } from 'react-native-paper';


type RadioButtonListProps = {
    list: {
        id: string,
        name: string,
        email: string,
        role: string
    }[]
}
const RadioButtonList = (props: RadioButtonListProps) => {
    return (
        <View>
            {
                props.list.map((user) => {
                    return (
                        <List.Item
                            title={props => <Name name={user.name} />}
                            left={props => <RadioButton
                                value={user.id}
                            />}
                        />
                    )
                })
            }
        </View>
    )
}

const AvatarList = (props: RadioButtonListProps) => {
    return (
        <View>
            {
                props.list.map((user) => {
                    return (
                        <List.Item
                            title={props => <Name name={user.name} />}
                            left={props => <Avatar.Text size={30} label="XD" style={{borderRadius:5}}/>}
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

