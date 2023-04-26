import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, Linking} from 'react-native';
import Constants from 'expo-constants';

import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.oi}>
        <Image style={styles.img} source={require('./assets/passaro.png')}></Image>
      </View>

      <Text style={styles.paragraph}>
        Participe hoje do Twitter.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nome completo"
      />

      <TextInput
        style={styles.input}
        placeholder="Celular ou email"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.TouchableOpacity}>
        <Text>Increva-se</Text>
      </TouchableOpacity>

      <Text style={styles.azul} onPress={() => Linking.openURL('https://twitter.com/account/begin_password_reset')}>
        Esqueceu sua senha?
      </Text>

      <Text style={styles.azul} onPress={() => Linking.openURL('https://twitter.com/i/flow/signup')}>
        Inscrever-se no Twitter
      </Text>
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
    margin: 15,
    paddingHorizontal: 10,
    
  },
  img: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
    margin: 'auto',
  },
  azul: {
    color: '#1DA1F3',
    textAlign: 'center',
    margin: 10,
  },
  TouchableOpacity: {
    padding: 10,
    height: 40,
    width: '100%',
    backgroundColor: '#1DA1F3',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  oi: {
    alignItems: 'center',
  },
});
