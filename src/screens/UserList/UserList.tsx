import { View } from 'react-native';
import Components from '../../components';
import { CustomerListProps } from '../../types';
import { getUserTypeById } from './UserTypeArray';

interface CustomerListPropsExtends extends CustomerListProps {
    selectedType: number
}

const UserList = (props: CustomerListPropsExtends) => {
    const { list, selectedType } = props;

    let filteredList = list.filter(user => user.role === getUserTypeById(selectedType)?.label)
    return (
        <View>
            <Components.AvatarList list={filteredList} />
        </View>
    )
}

export default UserList;