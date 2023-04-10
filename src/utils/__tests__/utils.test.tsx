import 'react-native';
import { searchList } from '../searchList';
import { getNameInitial } from '../getNameInitial';

describe("testing utils", () => {
    let users = [{
        id: "1",
        name: "Abhishek",
        email: "abhishek@gmail.com",
        role: "Manager"
    },
    {
        id: "4",
        name: "Abhishek2",
        email: "abhishek2@gmail.com",
        role: "Manager"
    },
    {
        id: "2",
        name: "Zeller",
        email: "Zeller@gmail.com",
        role: "Admin"
    },
    {
        id: "3",
        name: "Zeller2",
        email: "Zeller2@gmail.com",
        role: "Admin"
    }]

    test("search list method", () => {
        const output = searchList("abhishek", users)
        expect(output).toStrictEqual(
            [{
                id: "1",
                name: "Abhishek",
                email: "abhishek@gmail.com",
                role: "Manager"
            },
            {
                id: "4",
                name: "Abhishek2",
                email: "abhishek2@gmail.com",
                role: "Manager"
            }]
        )
    })

    test("getNameInitialMethod", () => {
        const output = getNameInitial(" Zeller")
        expect(output).toBe("Z")
    })
})