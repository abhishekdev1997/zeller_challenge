import 'react-native';
import React from 'react';
import HomeScreen from '../HomeScreen';
import { render } from "@testing-library/react-native";
jest.useFakeTimers()


it('homescreen renders correctly', () => {
    render(
        <HomeScreen />
    );
});
