import { CustomerListProps } from "../types"

export const searchList = (searchQuery: string, customerList: CustomerListProps["list"]) => {
    let text = searchQuery.toLowerCase()
    let users = customerList
    let filteredUsers = users.filter((item) => {
        return item.name.toLowerCase().match(text)
    })
    return filteredUsers
}