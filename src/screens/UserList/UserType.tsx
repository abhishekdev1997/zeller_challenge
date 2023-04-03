import { useState } from 'react';
import { View } from 'react-native';
import Components from '../../components';
import { UserTypeProps } from '../../types';

const UserType = () => {
    const [userType, updateUserType] = useState<UserTypeProps["list"]>([
        {
            id: 0,
            type: "manager",
            label: "Manager",
            selected: false
        },
        {
            id: 1,
            type: "admin",
            label: "Admin",
            selected: true
        }
    ])

    const updateSelected = (id: number) => {
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
        <View>
            <Components.RadioButtonList list={userType} updateSelected={updateSelected} />
        </View>
    )
}

export default UserType;