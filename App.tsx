/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  View,
  Text
} from 'react-native';
import Navigator from './src/navigator';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://192.168.29.75:9002/graphql",
  cache: new InMemoryCache()
})

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
