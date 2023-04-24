import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image,} from 'react-native';
import Constants from 'expo-constants';


import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
     <Image  style = {styles.img }source = {require('./assets/passaro.png')}></Image>
    
     <Text style={styles.paragraph}>
        Entrar no Twitter
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
      <Button text style= {styles.button}/>
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
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input:{
    height: 40,
    width:'100%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    border:'none',

  },
img: {
    display:'flex',
    height: 100,
    width: 100,
    resizeMode:'contain',  
    margin:'auto',
      },
      azul:{
        display:'flex',
        color:'#1DA1F3',
      },
      button:{
        padding:200,

      },

});

