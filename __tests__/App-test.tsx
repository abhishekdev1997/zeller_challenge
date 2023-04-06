/**
 * @format
 */

import 'react-native';
import React from 'react';
import HomeScreen from '../src/screens/Home/HomeScreen';
import UserListScreen from '../src/screens/UserList/UserListScreen';
import { render } from "@testing-library/react-native";
import { MockedProvider } from '@apollo/react-testing';
import * as Queries from "../src/graphql/listCustomersQuery";
jest.useFakeTimers()

const mocks = [
  {
    request: {
      query: Queries.ZELLER_LIST_CUSTOMER_QUERY
    }
  },
];

let props: any;
const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn()
  },
  ...props
});

it('renders correctly', () => {

  props = createTestProps({});
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <UserListScreen {...props} />
    </MockedProvider>
  );
});
