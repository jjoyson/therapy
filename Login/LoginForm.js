import React, {Component} from 'react';
import { StyleSheet, TouchableOpacity, View, TextInput, Text} from 'react-native';
import { Icon } from 'react-native-elements'

export default class LoginForm extends Component {
  render() {
    return (
        <View style={styles.container}>
         <TextInput
          placeholder = "Email"
          placeholderTextColor = "rgba(255,255,255,0.7)"
          underlineColorAndroid='#ecf0f1'
          onSubmitEditing ={() => this.passwordInput.focus()}
          keyboardType= "email-address"
          autoCapitalize="none"
          autoCorrect = {false}
          style = {styles.input}
         /> 
         <TextInput
          placeholder = "Password"
          placeholderTextColor = "rgba(255,255,255,0.7)"
          underlineColorAndroid='#ecf0f1'
          keyboardType= "email-address"
          secureTextEntry
          style = {styles.input}
          ref = {(input) => this.passwordInput = input}
         />
      <TouchableOpacity style = {styles.buttonContainer}>
        <Text style = {styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.buttonContainer}>
        <Text style = {styles.buttonText}>CREATE ACCOUNT</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  title: {
    paddingBottom: 16,
    textAlign: 'center',
    color: '#404d5b',
    fontSize: 30,
    fontWeight: 'bold',
    opacity: 0.8,
  },
  input: {
    height: 60,
    backgroundColor: "rgba(255,255,255,0.2)",
    marginBottom: 10,
    color: '#FFF',
    paddingHorizontal: 10,
    fontWeight: '700'
  },
  buttonContainer: {
    backgroundColor: '#ecf0f1',
    paddingVertical: 15,
    marginBottom: 10
  },
  buttonText: {
    textAlign: 'center',
    color: '#3782b6',
    fontWeight: '700'
  }
});