import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import Router from './Router.js';
//import Account from './Create/Account.js';
import LoginButton from './Login/LoginButton';


export default class App extends React.Component {
  render() {
    return (
      <LoginButton/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
