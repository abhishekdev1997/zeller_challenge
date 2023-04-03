/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  View
} from 'react-native';
import Navigator from './src/navigator';
import {ApolloProvider } from "@apollo/client";
import client from "./src/graphql/client";


function App(): JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ApolloProvider client={client}>
          <Navigator />
        </ApolloProvider>
      </View>
    </SafeAreaView>
  );
}


export default App;
