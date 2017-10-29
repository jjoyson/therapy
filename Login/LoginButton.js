import React, {Component} from 'react';
import { StyleSheet, AppRegistry, View, Image, Text, TouchableOpacity,Animated,Easing} from 'react-native';
import { Icon } from 'react-native-elements'

export default class LoginButton extends Component {
    render() {
        const animatedStyle = { height: this.animatedValue }
        return (
            <Image source={require('../Images/blue.png')} style={styles.container}>
            <TouchableOpacity>
                <Text style = {styles.button}>Log In</Text>
                </TouchableOpacity> 
                <Text style = {styles.title}>Welcome to Speranza</Text>
                <Icon name="leaf" size = {200} type = 'entypo' color = 'white' style = {styles.logo}/>
                <TouchableOpacity style = {styles.buttonContainer}>
                    <Text style = {styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </Image>
        );
    }
}

const styles = StyleSheet.create ({
   logo: {
       flex : 1,
       justifyContent:'center',
       alignItems: 'center'
   },
   container: {
        flex: 1,
        height: null,
        width: null
    },
    title: {
        paddingBottom: 32,
        paddingTop: 10,
        fontSize: 26,
        color: '#FFF',
        marginTop: 10,
        fontSize: 30,
        textAlign: 'center'
    },
    button: {
        marginTop: 20,
        paddingTop: 20,
        paddingRight: 10,
        color: '#333333',
        fontSize: 25,
        textAlign: 'right'
    },
    buttonText: {
        textAlign: 'center',
        color: '#3782b6',
        fontWeight: '700'
    },
    buttonContainer: {
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#ecf0f1',
        paddingVertical: 15,
        paddingHorizontal: 15
    }
});
