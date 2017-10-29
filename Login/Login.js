import React, {Component} from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView} from 'react-native';
import LoginForm from './LoginForm';
//import ColorBlending from 'gl-react-color-blending';

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior = "padding" style={styles.back}>
      <Image source={require('../Images/blue.png')} style={styles.back}>
          <View>
              <View style = {styles.logoContainer}>
              <Text style = {styles.title}>Log In</Text>
              <Image
                  style = {styles.logo}
                  source = {require('../Images/user.png')}
                  />
              </View>
              <View style = {styles.formContainer}>
              <LoginForm/> 
              </View>
          </View>
      </Image>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  back: {
    flex: 1,
    width: null,
    height: null,
  },
  container: {
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    borderRadius: 50,
    height: 100
  },
  title: {
    paddingBottom: 30,
    paddingTop: 50,
    fontSize: 26,
    color: '#FFF',
    marginTop: 10,
    width: 160,
    textAlign: 'center'
  }
});
