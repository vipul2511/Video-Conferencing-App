/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import RouterComponent from './components/Router';

class App extends Component {
  render() { 
    return <RouterComponent />;
  }
}

const styles = StyleSheet.create({});

export default App;
