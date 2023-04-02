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



function App(): JSX.Element {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{flex:1}}>
       <Navigator/>
      </View>
    </SafeAreaView>
  );
}


export default App;
