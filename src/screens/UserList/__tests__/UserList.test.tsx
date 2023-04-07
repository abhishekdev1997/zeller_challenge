import 'react-native';
import React from 'react';
import UserListScreen from '../UserListScreen';
import UserType from '../UserType';
import { fireEvent, render, act, waitFor } from "@testing-library/react-native";
import { MockedProvider } from '@apollo/react-testing';
import * as Queries from "../../../graphql/listCustomersQuery";
import { strings } from "../../../utils";
import { getUserTypeById, USER_TYPES } from '../UserTypeArray';

jest.useFakeTimers()

const mocks = [
    {
        request: {
            query: Queries.ZELLER_LIST_CUSTOMER_QUERY
        }
    },
];

const changeSelectedType = jest.fn()

let props: any;
const createTestProps = (props: Object) => ({
    navigation: {
        navigate: jest.fn()
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
    const { getByTestId, getAllByText } = render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <UserListScreen {...props} >
                <UserType {...props} />
            </UserListScreen>
        </MockedProvider>
    );
    fireEvent.press(getByTestId(strings.USER_TYPE_ITEM_TEST_ID + "_" + getUserTypeById(1)?.label))
    expect(getAllByText(getUserTypeById(1)?.label + " " + strings.Users).length).toBe(1)
});


it('test click on user from users list', () => {

    props = createTestProps({});
    const { getByTestId } = render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <UserListScreen {...props} />
        </MockedProvider>
    );
    //fireEvent.press(getByTestId("_userType_Admin"))
});


