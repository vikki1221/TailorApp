import React, { useState, useEffect } from "react";
import { FlatList,Alert,Modal,Pressable, SafeAreaView, StatusBar,ImageBackground, StyleSheet,Image, Text,useWindowDimensions ,TouchableOpacity,Dimensions, View, Button } from "react-native";
import { Card } from "react-native-shadow-cards";
import products from "../model/products";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function ProductSpecification({route,navigation}){
    const {Product} = route.params;
    const {tailorName} = route.params;
    const {productPrice} = route.params;
    const Products = products;
    const [image,setImage] = useState([]);
    const [deliveryCharge,setDeliveryCharge] = useState(40);
    const [couponDiscount,setCouponDiscount] = useState(20);
    const [creditUsed,setCreditUsed] = useState(10);
    const [totalPrice, setTotalPrice] = useState(210);
//  const tp = {productPrice}+{deliveryCharge}-{creditUsed}-{couponDiscount}
//  setTotalPrice(tp);
//  console.log(tp)
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
            <Card style={{marginTop:20,padding:20,height:200}}>
                <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{flex:0.4,backgroundColor:'red'}}>            
                <Image source={selectedProduct[0].images[0]} style={{width:'100%',height:'100%'}}/> 
                </View>
                <View style={{flex:0.6,marginLeft:10}}>    
                <Text style={{fontSize:20}}>{Product}</Text>
                <Text style={{fontSize:15}}>By: {tailorName}</Text>
               
                <Text style={{fontSize:15,paddingTop:12,fontWeight:'bold'}}> <FontAwesome name='rupee' style={{fontSize:15}}/> {productPrice}</Text>
                </View>
                </View>

            </Card>
            </View>
            <View style={{height:230,padding:20}}>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Price Details</Text>
                <View style={{flex:0.8,flexDirection:'row',marginTop:10,marginBottom:10, borderBottomColor: 'black',
    borderBottomWidth: 1}}>
                    <View style={{flex:0.5}}>
                            <Text style={{fontSize:15,marginTop:5}}>Price</Text>
                            <Text style={{fontSize:15,marginTop:5}}>Coupon Discount</Text>
                            <Text style={{fontSize:15,marginTop:5}}>Credit Used</Text>
                            <Text style={{fontSize:15,marginTop:5}}>Delivery Charge</Text>
                            
                    </View>
                    <View style={{flex:0.5,alignItems:'flex-end'}}>
                            <Text style={{fontSize:15,marginTop:5}}><FontAwesome name='rupee' style={{fontSize:15}}/> {productPrice}</Text>
                            <Text style={{fontSize:15,marginTop:5}}><FontAwesome name='rupee' style={{fontSize:15}}/> - {couponDiscount}</Text>
                            <Text style={{fontSize:15,marginTop:5}}><FontAwesome name='rupee' style={{fontSize:15}}/> - {creditUsed}</Text>
                            <Text style={{fontSize:15,marginTop:5}}><FontAwesome name='rupee' style={{fontSize:15}}/> {deliveryCharge}</Text>
                            
                    </View>
                </View>
                <View style={{flex:0.2,flexDirection:'row'}}>
                    <View style={{flex:0.5}}>
                            <Text style={{fontSize:20,fontWeight:'bold'}}>Total Amount</Text>
                            
                    </View>
                    <View style={{flex:0.5,alignItems:'flex-end'}}>
                            <Text style={{fontSize:20,fontWeight:'bold'}}><FontAwesome name='rupee' style={{fontSize:15}}/> {totalPrice}</Text>
                          
                            
                    </View>
                </View>
                
        </View>
        </View>

    );

}