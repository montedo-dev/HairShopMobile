import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    Alert
} from 'react-native';


class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Tela de Login</Text>
            </View>
        );
    }
}

export default Login;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
});
