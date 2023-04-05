import { Dispatch, SetStateAction, useState } from 'react';
import { View, ViewStyle } from 'react-native';
import Components from '../../components';
import { UserTypeProps } from '../../types';
import { USER_TYPES } from './UserTypeArray';

type UserTypeMethodProps = {
    changeSelectedType: Dispatch<SetStateAction<number>>,
    containerStyle: ViewStyle
}

const UserType = (props: UserTypeMethodProps) => {
    const [userType, updateUserType] = useState<UserTypeProps["list"]>(USER_TYPES)

    const updateSelected = (id: number) => {
        props.changeSelectedType(id)
        updateUserType(prevVal => {
            let updatedUserType = prevVal.map(userType => {
                if (userType.id === id) {
                    userType.selected = true
                    return userType
                }
                userType.selected = false
                return userType
            })
            return updatedUserType
        })
    }

    return (
        <View style={props.containerStyle}>
            <Components.RadioButtonList list={userType} updateSelected={updateSelected} />
        </View>
    )
}

export default UserType;