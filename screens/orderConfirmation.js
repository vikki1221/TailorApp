import React, { useState, useEffect } from "react";
import { FlatList,Alert,Modal,Pressable, SafeAreaView, StatusBar,ImageBackground, StyleSheet,Image, Text,useWindowDimensions ,TouchableOpacity,Dimensions, View, Button, TextInputBase } from "react-native";

import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function OrderConfirmation({route, navigation}) {
    useEffect(async () =>{
        setTimeout(() => {
            navigation.navigate('About')
         }, 5000)
         },[])
    
    return(
        <View style={{flex:1}}>
            <View style={{justifyContent:'center', flex:1, alignItems:'center'}}>
            
            <Text style={{fontSize:30}}><FontAwesome name='check-circle' style={{fontSize:40, color:'green'}}/>  Yayyy!!!  </Text>
            <Text style={{fontSize:30}}> Your order is confirmed.</Text>
            </View>
        </View>
    )
}