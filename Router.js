import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './Login/Login.js';
import Account from './Create/Account.jas';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key = "root">
                <Scene 
                    key ="LOGIN" 
                    component = {LoginForm} 
                    title = "Home" 
                    initial
                />
                <Scene 
                    key ="CREATE ACCOUNT" 
                    component = {LoginForm} 
                    title = "Create" 
                />
            </Scene>
        </Router>
    );
};

export default RouterComponent;