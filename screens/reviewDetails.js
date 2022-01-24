import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableHighlight} from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({navigation}) {
    return (
        <View style={styles.regform}>
          <Text style={styles.header}>Registration</Text>
          <TextInput style={styles.textinput} placeholder="Enter Your Name" underlineColorAndroid={'transparent'}></TextInput>
          
          <TextInput style={styles.textinput} placeholder="Enter Your Email" underlineColorAndroid={'transparent'}></TextInput>
          
          <TextInput style={styles.textinput} placeholder="Enter Your Password" secureTextEntry={true} underlineColorAndroid={'transparent'}></TextInput>
          <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]}onPress={()=>navigation.navigate("Login")}>
          <Text style={styles.loginText}>Register</Text>
        </TouchableHighlight>
        </View>
      );
}
const styles = StyleSheet.create({
  regform: {
      alignSelf:'stretch',
      backgroundColor:'#36485f',
      justifyContent:'center',
      flex:1,
      paddingLeft:60,
      paddingRight:60,
    },
    header:{
      fontSize:24,
      color:'#fff',
      paddingBottom :10,
      marginBottom:40,
      borderBottomColor:'#199187',
      borderBottomWidth:1,
    },
    textinput :{
      alignSelf:'stretch',
      height:40,
      marginBottom:30,
      color:'#fff',
      borderBottomColor:'#f8f8f8',
      borderBottomWidth :1,
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