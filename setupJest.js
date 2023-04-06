jest.mock('@react-navigation/stack', () => {
    return {
      createStackNavigator: jest.fn(() => Promise.resolve('My App')),
    };
  });