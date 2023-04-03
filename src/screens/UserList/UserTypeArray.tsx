export const USER_TYPES = [
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
]

export const getUserTypeById = (id: number) => {
    let userType = USER_TYPES.find(userType => userType.id === id)
    return userType
}