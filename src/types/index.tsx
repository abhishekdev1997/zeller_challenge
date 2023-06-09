type RootStackParamList = {
    UserListScreen: undefined,
    HomeScreen: undefined
}

type CustomerListProps = {
    list: {
        id: string,
        name: string,
        email: string,
        role: string
    }[]
}

type UserTypeProps = {
    list: {
        id: number,
        type: string,
        label: string,
        selected: boolean
    }[]
}

export type { RootStackParamList, CustomerListProps, UserTypeProps }