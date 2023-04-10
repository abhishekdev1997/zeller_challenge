import 'react-native';
import React from 'react';
import UserListScreen from '../UserListScreen';
import UserType from '../UserType';
import UserList from '../UserList';
import { fireEvent, render, act, waitFor } from "@testing-library/react-native";
import { MockedProvider } from '@apollo/react-testing';
import * as Queries from "../../../graphql/listCustomersQuery";
import { strings } from "../../../utils";
import { getUserTypeById } from '../UserTypeArray';

jest.useFakeTimers()
const list = [{
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
    id: "2",
    name: "Zeller2",
    email: "Zeller2@gmail.com",
    role: "Admin"
}]


const mocks = [
    {
        request: {
            query: Queries.ZELLER_LIST_CUSTOMER_QUERY
        },
        result: {
            data: {
                listZellerCustomers: {
                    items: list
                }
            }
        }
    },
];

const changeSelectedType = jest.fn()

let props: any;
const navigate = jest.fn()
const createTestProps = (props: Object) => ({
    navigation: {
        navigate: navigate
    },
    changeSelectedType: changeSelectedType,
    ...props
});

it('renders all default elements', () => {

    props = createTestProps({});
    const { getAllByText, getAllByTestId } = render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <UserListScreen {...props} />
        </MockedProvider>
    );
    expect(getAllByText(strings.UserType).length).toBe(1)
    expect(getAllByText(getUserTypeById(0)?.label + " " + strings.Users).length).toBe(1)
    expect(getAllByTestId(strings.USER_TYPES_LIST_TEST_ID).length).toBe(1)
    expect(getAllByTestId(strings.DIVIDER_TEST_ID).length).toBe(2)
    expect(getAllByTestId(strings.USER_TYPE_ITEM_TEST_ID + "_", { exact: false }).length).toBe(2)
    expect(getAllByTestId(strings.SEARCH_BOX_TEST_ID).length).toBe(1)
});


it('test click on user type radio button', async () => {
    props = createTestProps({});
    const { getByTestId, getAllByText, getAllByTestId } = render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <UserListScreen {...props} >
                <UserType {...props} />
            </UserListScreen>
        </MockedProvider>
    );
    fireEvent.press(getByTestId(strings.USER_TYPE_ITEM_TEST_ID + "_" + getUserTypeById(1)?.label))
    expect(getAllByText(getUserTypeById(1)?.label + " " + strings.Users).length).toBe(1)

    await act(async () => {
        await waitFor(() => {
            expect(getAllByTestId(strings.USER_LIST_ITEM_ID + "_Zeller").length).toBeGreaterThan(0)
        })
    })
});


it('test search box', async () => {
    props = createTestProps({});
    const { getByTestId, getAllByTestId } = render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <UserListScreen {...props} >
                <UserType {...props} />
            </UserListScreen>
        </MockedProvider>
    );


    await act(async () => {
        await waitFor(() => {
            fireEvent(getByTestId(strings.SEARCH_BOX_TEST_ID), "onChangeText", "Abhishek2")
            expect(getAllByTestId(strings.USER_LIST_ITEM_ID + "_Abhishek2").length).toEqual(1)
        })
    })
});


it('test navigation on click on user from users list', async () => {
    props = createTestProps({});
    const { getByTestId } = render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <UserListScreen {...props} >
                <UserType {...props} />
            </UserListScreen>
        </MockedProvider>
    );


    await act(async () => {
        await waitFor(() => {
            fireEvent.press(getByTestId(strings.USER_LIST_ITEM_ID + "_Abhishek"))
            expect(navigate).toBeCalledWith("HomeScreen")
        })
    })
});


test('test click on user from users list', () => {
    props = createTestProps({});
    const onUserClick = jest.fn()
    const { getByTestId } = render(
        <UserList {...props} onUserClick={onUserClick} list={list} selectedType={0} itemTestId={strings.USER_LIST_ITEM_ID} />
    );
    fireEvent.press(getByTestId(strings.USER_LIST_ITEM_ID + "_Abhishek"))
    expect(onUserClick).toBeCalled()
});
