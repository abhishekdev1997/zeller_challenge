import { View } from 'react-native';
import Components from '../../components';
import { CustomerListProps } from '../../types';


const UserList = (props: CustomerListProps) => {
    const { list } = props;
    return (
        <View>
            <Components.AvatarList list={list} />
        </View>
    )
}

export default UserList;