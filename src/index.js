import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    AsyncStorage,
    Alert
} from 'react-native';

import appHeader from './src/components/appHeader';
import appFooter from './src/components/appFooter';
import api from './services/api';

export default class App extends Component {
    state = {
        errorMessage: null
    }

    signIn = async() => {
        try {

            const response = await api.post('/cadastrarCliente', {
                nome: 'Lucas Pacheco',
                cpf: '021.845.110-12',
                email: 'lukinha10@gmail.com',
                senha: "lukinha10",
                senha_confirmation: "lukinha10",
                telefone: "(12) 3123-13212"
            });

            // const response = await api.delete('/deletarCliente',{   id: 5, });
         

        } catch (response) {
            this.setState({errorMessage: response.data.message})
            console.log(response.data)

        }
    };

    render() {
        return (
            <View style={styles.container}>

                <appHeader/>
                
                <View style={styles.container}>
                  {this.state.errorMessage && <Text>{this.state.errorMessage} </Text>}
          
                  <Button onPress={this.signIn} title='Entrar'></Button>
                  <Button title='Cadastre-se'></Button>
                </View>

                <appFooter/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
});
