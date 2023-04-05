import { View, ViewStyle } from 'react-native';
import Components from '../../components';
import { CustomerListProps } from '../../types';
import { getUserTypeById } from './UserTypeArray';

interface CustomerListPropsExtends extends CustomerListProps {
    selectedType: number,
    containerStyle: ViewStyle,
    onUserClick: ()=>void
}

const UserList = (props: CustomerListPropsExtends) => {
    const { list, selectedType, onUserClick } = props;

    let filteredList = list.filter(user => user.role === getUserTypeById(selectedType)?.label)
    return (
        <View style={props.containerStyle}>
            <Components.AvatarList list={filteredList} onItemClick={onUserClick}/>
        </View>
    )
}

export default UserList;