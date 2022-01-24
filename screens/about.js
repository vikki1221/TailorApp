import React from 'react';
import { StyleSheet, Text, View ,ImageBackground,TouchableHighlight} from 'react-native';
import { globalStyles } from '../styles/global';


export default function About({navigation}) {
  return (
    <View style={styles.container}>
    <ImageBackground source={require('../assets/images.png')} resizeMode="cover" style={styles.image}>
    <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => navigation.navigate("WomenItem")}>
          <Text style={styles.loginText}>Women</Text>
        </TouchableHighlight>
    </ImageBackground>
    <ImageBackground source={require('../assets/Tailors.jpg')} resizeMode="cover" style={styles.image}>
    <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => navigation.navigate("About")}>
          <Text style={styles.loginText}>Men</Text>
        </TouchableHighlight>
    </ImageBackground>
  </View>
      
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
  });