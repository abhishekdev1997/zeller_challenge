export const USER_TYPES = [
    {
        id: 0,
        type: "manager",
        label: "Manager",
        selected: true
    },
    {
        id: 1,
        type: "admin",
        label: "Admin",
        selected: false
    }
]

export const getUserTypeById = (id: number) => {
    let userType = USER_TYPES.find(userType => userType.id === id)
    return userType
}