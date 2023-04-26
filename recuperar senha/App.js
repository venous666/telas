import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, Linking } from 'react-native';
import Constants from 'expo-constants';

import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.oi}>
        <Image style={styles.img} source={require('./assets/passaro.png')}></Image>
      </View>

      <Text style={styles.paragraph}>
        Encontre sua conta no Twitter
      </Text>
      <Text style={styles.oi}>
        Informe o email, o numero de celular ou nome de usuario associado a sua conta para alterar sua senha
      </Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail, numero de celular ou nome de usuario"
      />
      <Card>

      </Card>
      <TouchableOpacity style={styles.TouchableOpacity}>
        <Text style={styles.buttonText}>Avançar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    border: 'inline',
    margin: 15,
  },
  img: {
    textAlign: 'center',
    height: 100,
    width: 100,
    resizeMode: 'contain',
    margin: 'auto',
  },

  TouchableOpacity: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#1DA1F3',
    borderRadius: 10,
    borderWidth: 1,
    fontColor:'white',
   

  },
 
  oi:{
    alignItems: 'center',
  },
});
