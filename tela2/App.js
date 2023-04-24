import * as React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
    <Image  style = {styles.img}source = {require('./assets/oi.png')}></Image>
      <Text style={styles.paragraph}>
        
      </Text>
      <Card>
        
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#1DA1F3',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  img:{
    alignSelf: 'center',
    margin: 50,
    height:100,
    width:100,

  }
});
