import React, { useState, useEffect } from "react";
import { FlatList,Alert,Modal,Pressable, SafeAreaView, StatusBar,ImageBackground, StyleSheet,Image, Text,useWindowDimensions ,TouchableOpacity,Dimensions, View, Button } from "react-native";
import { Card } from "react-native-shadow-cards";
import products from "../model/products";

export default function ProductSpecification({route,navigation}){
    const {Product} = route.params;
    const {tailorName} = route.params;
    const {productPrice} = route.params;
    const Products = products;
    const [image,setImage] = useState([]);
 //   var selectedProduct = '';
 const selectedProduct  = Products.filter(aux =>aux.title == Product);
 console.log(selectedProduct[0].images[0]);
    useEffect(async () =>{
     //  const selectedProduct  = Products.filter(aux =>aux.title == Product);
    //   setImage(selectedProduct["images"]);
       //console.log(selectedProduct["images"]);
      },[])

   // console.log(productPrice);
    return (
        <View>
         <View style={{alignItems:'center'}}>            
            <Card style={{marginTop:20,padding:20}}>
             <Image source={selectedProduct[0].images[0]} style={{width:"20%",height:140}}/> 
                <Text>{Product}</Text>
                <Text>{tailorName}</Text>
                <Text>{productPrice}</Text>
            </Card>
        </View>
        </View>

    );

}