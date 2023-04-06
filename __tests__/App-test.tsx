/**
 * @format
 */

import 'react-native';
import React from 'react';
import HomeScreen from '../src/screens/Home/HomeScreen';
import { render} from "@testing-library/react-native";


it('renders correctly', () => {
  render(<HomeScreen />);
});
