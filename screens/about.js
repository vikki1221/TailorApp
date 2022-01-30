import React from 'react';
import { StyleSheet, Text, View ,Image,FlatList,TouchableOpacity,StatusBar,SafeAreaView,ScrollView,ImageBackground} from 'react-native';
import { globalStyles } from '../styles/global';
import Tailors from "../model/tailors";
import Products from "../model/products";
import {Card} from 'react-native-shadow-cards';
const TAILORS = Tailors
const PRODUCTS = Products
const DATA = [
  {
    id: "1",
    title: "Men",
    val: "male"
  },
  {
    id: "2",
    title: "Women",
    val: "female"
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
            <TouchableOpacity onPress={() => navigation.navigate("WomenItem",{gender:item.val})  }>
            <Image style={styles.image}source={require('../assets/male.png')}
      />
          <Text>{item.title}</Text>
          </TouchableOpacity>
            </View>
        );
      };
      const renderTailor = ({item})=>{
        return (
          // <View style={styles.tailorContainer}>
            <Card style={{padding: 10, margin: 15, borderRadius:15,width:270}}>
            <TouchableOpacity onPress={() => navigation.navigate("WomenItem",{gender:item.val})  }>
            <Image style={styles.tailorimage}source={require('../assets/Tailors.jpg')}
      />
          <Text>{item.username}</Text>
          </TouchableOpacity>
          </Card>
            // </View>
        );
      }
      const renderProduct = ({item})=>{
        return (
          // <View style={styles.productContainer}>
          <Card style={{padding: 10, margin: 15, borderRadius:15,width:200}}>
            <TouchableOpacity onPress={() => navigation.navigate("ListTailors",{selectedItem:item.val})  }>
      
          
          <ImageBackground source={require('../assets/images.png')} resizeMode="cover" style={styles.productimage}>
          <Text style={styles.productText}>{item.title}</Text>
    </ImageBackground>
          </TouchableOpacity>
          </Card>
            // </View>
        );
      }
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
   
            <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
         <Text style={styles.heading}>Tailors Near By</Text>
            <FlatList
          data={TAILORS}
          renderItem={renderTailor}
          keyExtractor={(item) => item.id}
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
        <Text style={styles.heading}>Our Services</Text>
         <FlatList
          data={PRODUCTS}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id}
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
        </ScrollView>
  </SafeAreaView>
      
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
image:{
height:100,
width:100,
borderRadius:50
},
heading:{
  fontSize:20,
  marginVertical: 8,
  marginHorizontal: 10,
},
productimage:{
    height:200,
    width:200,
    justifyContent: "center",

},
  item:{
    marginVertical: 8,
    marginHorizontal: 10,
  },
  productContainer:{
    marginVertical: 8,
    marginHorizontal: 10,
    backgroundColor:'#FFFFFF',
    height:200,
    width:200,
    textAlign: "center",
  },
  productText:{
    color: "white",
    fontSize: 22,
    lineHeight: 44,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },
  tailorContainer:{
    marginVertical: 8,
    marginHorizontal: 10,
    backgroundColor:'#FFFFFF',
    height:250,
    width:250,
    textAlign: "center",
  },
  tailorimage:{
    width:250,
    justifyContent: "center",

},
  });

  