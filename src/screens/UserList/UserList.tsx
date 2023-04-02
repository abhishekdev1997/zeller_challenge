import { View } from 'react-native';
import Components from '../../components';

let users = [
    {
        id: "12",
        name: "abhishek",
        email: "aps@gmail.com",
        role: "manager"
    }
]

const UserList = () => {
    return (
        <View>
            <Components.AvatarList list={users} />
        </View>
    )
}

export default UserList;