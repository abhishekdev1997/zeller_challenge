import { CustomerListProps } from "../types"

export const searchList = (searchQuery: string, customerList: CustomerListProps["list"]) => {
    if (!searchQuery || searchQuery === '') {
        return customerList
    }
    let text = searchQuery.toLowerCase()
    let users = customerList
    let filteredUsers = users.filter((item) => {
        return item.name.toLowerCase().match(text)
    })

    if (!Array.isArray(filteredUsers) || !filteredUsers.length) {
        return []
    }
    return filteredUsers
}