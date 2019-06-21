import React, {Component} from 'react';



import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Login from './src/routes/Login';

const Navigator = createSwitchNavigator({
    Login:{
        screen:Login
    }
})
export default createAppContainer(Navigator);

