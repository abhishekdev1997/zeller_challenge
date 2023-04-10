import 'react-native';
import React from 'react';
import HomeScreen from '../HomeScreen';
import { render } from "@testing-library/react-native";
import renderer from "react-test-renderer";

jest.useFakeTimers()


describe("test homecreen component", () => {
    test('homescreen renders correctly', () => {
        render(
            <HomeScreen />
        );
    });
})

describe("test homescreen snapshot", () => {
    test("homescreen renders correctly", () => {
        const tree = renderer.create(<HomeScreen />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})