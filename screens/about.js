import React from 'react';
import { StyleSheet, Text, View ,Image,FlatList,TouchableOpacity,StatusBar,SafeAreaView,ScrollView,ImageBackground} from 'react-native';
import { globalStyles } from '../styles/global';
import Tailors from "../model/tailors";
import Products from "../model/products";
import {Card} from 'react-native-shadow-cards';


import FontAwesome from 'react-native-vector-icons/FontAwesome';
const TAILORS = Tailors
const PRODUCTS = Products
const DATA = [
  {
    'id': "1",
    'title': "Men",
    'val': "male",
    'image': [
      require('../assets/male.png'),
    ]
  },
  {
    'id': "2",
    'title': "Women",
    'val': "female",
    'image': [
      require('../assets/female.png'),
    ]
  },
  // {
  //   id: "3",
  //   title: "Kids",
  //   val: "kids"
  // },
];


const numcolums = DATA.length
export default function About({navigation}) {
  const renderItem = ({ item }) => {

        return (
          <View style={styles.item}>
            <TouchableOpacity onPress={() => navigation.navigate("WomenItem",{gender:item.val})  }>
            <Image style={styles.image} source={item.image[0]}
      />
          <Text style={{textAlign:"center"}}>{item.title}</Text>
          </TouchableOpacity>
            </View>
        );
      };
      const renderTailor = ({item})=>{
        return (
          // <View style={styles.tailorContainer}>
            <Card style={{ margin: 15, borderRadius:15,width:300,paddingBottom:10}}>
            <TouchableOpacity onPress={() => navigation.navigate("TailorDetails",{tailorId:item.id, name:item.username})  }>
            <Image style={styles.tailorimage} source={item.images[0]}
      />
          <View style={{flex:1, flexWrap:'wrap'}}>
            <View>
          <Text style={{marginLeft:12,marginTop:12,fontSize:20, fontWeight:'bold'}}>{item.username}</Text>
          <View style={styles.ratingBlock}>
          <Text style={styles.ratingText} >{item.rating}</Text>
          <FontAwesome name='star' style={styles.iconn}/>
          </View>
          </View>
          <View style={styles.addressBlock}>
          <FontAwesome name='map-marker' style={styles.locIconn}/>
          <Text style={{marginLeft:10,marginTop:6}}>{item.email}</Text>
          </View>
          </View>
          </TouchableOpacity>
          </Card>
            // </View>
        );
      }
      const renderProduct = ({item})=>{
        return (
          // <View style={styles.productContainer}>
          <Card style={{ margin: 15, borderRadius:15,width:200}}>
            <TouchableOpacity onPress={() => navigation.navigate("ListTailors",{selectedItem:item.val})  }>
      
          
          <ImageBackground imageStyle={{ borderRadius: 15}} source={item.images[0]} resizeMode="cover" style={styles.productimage}>
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
  fontSize:35,
  marginVertical: 8,
  marginHorizontal: 10,
  marginLeft:10,
  fontWeight:'bold'
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
    width:300,
    justifyContent: "center",
    height:170,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,

},

locIconn:{
  color:'red',
  marginLeft:15,
  fontSize:20
},
addressBlock:{
  marginLeft:5,
  width:60,
  height:32,
  flex:1,
  flexWrap:'wrap',
  justifyContent: 'center',
  alignContent:'center'
},
ratingBlock:{
  backgroundColor:'#228B22',
  width:60,
  height:32,
  marginLeft:200,
  marginTop:-30,
  zIndex:1,
  borderRadius:5,
  flex:1,
  flexWrap:'wrap',
  justifyContent: 'center',
  alignContent:'center'
},
ratingText:{
  fontSize:25,
  color:'white',
},
iconn:{
  color:'white',
  marginLeft:5
},
  });

  