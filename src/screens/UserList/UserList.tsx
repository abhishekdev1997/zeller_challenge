import { memo } from 'react';
import { View, ViewStyle } from 'react-native';
import Components from '../../components';
import { CustomerListProps } from '../../types';
import { getUserTypeById } from './UserTypeArray';

interface CustomerListPropsExtends extends CustomerListProps {
    selectedType: number,
    containerStyle: ViewStyle,
    onUserClick: () => void,
    pullToRefresh: () => void,
    testId: string
}

const UserList = (props: CustomerListPropsExtends) => {
    console.log("userlist")
    const { list, selectedType, onUserClick } = props;

    let filteredList = list.filter(user => user.role === getUserTypeById(selectedType)?.label)
    return (
        <View testID={props.testId} style={props.containerStyle}>
            <Components.AvatarList list={filteredList} onItemClick={onUserClick} pullToRefresh={props.pullToRefresh} />
        </View>
    )
}

export default memo(UserList);