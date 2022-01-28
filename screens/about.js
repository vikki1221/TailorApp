import React from 'react';
import { StyleSheet, Text, View ,Image,FlatList,TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/global';

const DATA = [
  {
    id: "1",
    title: "Men",
    val: "men"
  },
  {
    id: "2",
    title: "Women",
    val: "women"
  },
  {
    id: "3",
    title: "Kids",
    val: "kids"
  },
];
const numcolums = DATA.length
export default function About({navigation}) {
  const renderItem = ({ item }) => {

        return (
          <View style={styles.item}>
            <TouchableOpacity onPress={() => navigation.navigate("WomenItem")  }>
            <Image style = {styles.image}
             source={require('../assets/male.png')}
      />
          <Text>{item.title}</Text>
          </TouchableOpacity>
            </View>
        );
      };
  return (
    <View style={styles.container}>
       <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={numcolums}
        />
  </View>
      
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    height: "100%",
    textAlign: "center"
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height:100,
    width:100,
    borderRadius:50
  },
  marginofbutton :{
    alignItems:"center"
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
  },
  item:{
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: 'center',
    margin:20,
    alignItems: "center",
  },
  });