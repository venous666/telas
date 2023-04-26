import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image,Linking} from 'react-native';
import Constants from 'expo-constants';

import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.oi}>
        <Image  style = {styles.img }source = {require('./assets/passaro.png')}></Image>
      </View>
    
      <Text style={styles.paragraph}>
        Encontre sua conta no Twitter
      </Text>
      <TextInput
        style= {styles.input}
        placeholder="Celular, email ou nome de usuário"
      />
      <TextInput
        style= {styles.input}
        placeholder="Senha"
      />
      <Card>
      
      </Card>
      <TouchableOpacity style={styles.TouchableOpacity}>
        <Text>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Button}>
        <Text>Esqueceu a senha?</Text>
      </TouchableOpacity>
      <Text style={styles.azul}>
        Esqueceu sua senha?
      </Text>
      <Text style={styles.azul}>
        Increver-se no Twitter
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
  input:{
    height: 40,
    width:'100%',
    borderColor: 'gray',
    border:'none',
    margin:15,
  },
  img: {
    textAlign: 'center',
    height: 100,
    width: 100,
    resizeMode:'contain',  
    margin:'auto',
  },
  azul:{
    display:'flex',
    color:'#1DA1F3',
  },
  TouchableOpacity:{
    padding: 10,
    height: 40,
    width: '100%',
    backgroundColor: '#1DA1F3',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  Button:{
    padding: 10,
    height: 40,
    width: '100%',
    backgroundColor: '#1DA1F3',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  oi:{
    alignItems: 'center',
  },
});
