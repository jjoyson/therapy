import React, {Component} from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Image, KeyboardAvoidingView} from 'react-native';

export default class Account extends Component {
  render() {
    return (
            <View style={styles.bigContainer}>
                <View style={styles.container}>
                    <View style = {styles.logoContainer}>
                        <Image
                            style = {styles.logo}
                            source = {require('../Images/user.png')}
                        />
                    </View>
                    <KeyboardAvoidingView behavior = "padding" style={styles.container}>
                    <TextInput
                        placeholder = "First Name"
                        placeholderTextColor = "rgba(255,255,255,0.7)"
                        underlineColorAndroid='rgba(0,0,0,0)'
                        onSubmitEditing ={() => this.passwordInput.focus()}
                        keyboardType= "default"
                        autoCapitalize="none"
                        autoCorrect = {false}
                        style = {styles.input}
                    />
                    <TextInput
                        placeholder = "Last Name"
                        placeholderTextColor = "rgba(255,255,255,0.7)"
                        underlineColorAndroid='rgba(0,0,0,0)'
                        onSubmitEditing ={() => this.passwordInput.focus()}
                        keyboardType= "default"
                        autoCapitalize="none"
                        autoCorrect = {false}
                        style = {styles.input}
                    />
                    <TextInput
                        placeholder = "Phone Number"
                        placeholderTextColor = "rgba(255,255,255,0.7)"
                        underlineColorAndroid='rgba(0,0,0,0)'
                        onSubmitEditing ={() => this.passwordInput.focus()}
                        keyboardType= "phone-pad"
                        autoCapitalize="none"
                        autoCorrect = {false}
                        style = {styles.input}
                    />
                    <TextInput
                        placeholder = "Email"
                        placeholderTextColor = "rgba(255,255,255,0.7)"
                        underlineColorAndroid='rgba(0,0,0,0)'
                        onSubmitEditing ={() => this.passwordInput.focus()}
                        keyboardType= "email-address"
                        autoCapitalize="none"
                        autoCorrect = {false}
                        style = {styles.input}
                    />
                    <TextInput
                        placeholder = "Password"
                        placeholderTextColor = "rgba(255,255,255,0.7)"
                        underlineColorAndroid='rgba(0,0,0,0)'
                        secureTextEntry
                        style = {styles.input}
                        ref = {(input) => this.passwordInput = input}
                        />
                    <TouchableOpacity style = {styles.buttonContainer}>
                        <Text style = {styles.buttonText}>CREATE ACCOUNT</Text>
                    </TouchableOpacity>
                    </KeyboardAvoidingView>
                </View>
            </View>
    );
  }
}

const styles = StyleSheet.create({
    bigContainer: {
        paddingVertical: 10,
        flex: 1,
        backgroundColor: '#2ecc71'
    },
    logo: {
        width: 100,
        borderRadius: 50,
        height: 100
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: "rgba(255,255,255,0.2)",
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10,
        paddingVertical : 10
    },
    buttonContainer: {
        backgroundColor: '#27ae60',
        paddingVertical: 15,
        marginBottom: 10
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    }
});
