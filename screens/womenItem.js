import React, { useState } from "react";

import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity,Dimensions, View,ImageBackground } from "react-native";

import {Card} from 'react-native-shadow-cards';
import Products from "../model/products";

// const DATA = [
//     {
//       id: "1",
//       title: "Simple Blouse",
//       val: "simpleBlouse"
//     },
//     {
//       id: "2",
//       title: "Designer Blouse",
//       val: "designerBlouse"
//     },
//     {
//       id: "3",
//       title: "Kurta/Kurti",
//       val: "kurta"
//     },
//     {
//       id: "4",
//       title: "Garara",
//       val: "gharara"
//     },
//     {
//       id: "5",
//       title: "Sharara",
//       val: "sharara"
//     },
//     {
//       id: "6",
//       title: "Pyjamas",
//       val: "pyjamas"
//     },
   
//   ];
  const DATA = Products;
  const numcolums = 2;
  const WIDTH=Dimensions.get('window').width;
export default function womenItem({route, navigation}) {
  const {gender} = route.params;
  const formatData = (DATA,numcolums) =>{
    const totalRows = Math.floor(DATA.length/numcolums)
    let totalLastRow = DATA.length - (totalRows * numcolums)

    while(totalLastRow !==0 && totalLastRow !== numcolums){
      DATA.push({id: 'blank',title:'blank',empty:true})
      totalLastRow++
    }
    return DATA
  }

    const renderItem = ({ item }) => {
  if(item.empty){
return <View style={[styles.item,styles.itemInvisible]} />
  }
  else if(item[gender]=='true'){
      return (
        <Card style={styles.item}>
            <TouchableOpacity onPress={() => navigation.navigate("ListTailors",{selectedItem:item.val})  }>
      
          
          <ImageBackground imageStyle={{ borderRadius: 10}} source={item.images[0]} resizeMode="cover" style={styles.productimage}>
          <Text style={styles.productText}>{item.title}</Text>
    </ImageBackground>
          </TouchableOpacity>
          </Card>

        // <View style={styles.item}>
        //   <TouchableOpacity onPress={() => navigation.navigate("ListTailors",{selectedItem:item.val})  }>
        // <Text style={styles.itemText}  >{item.title}</Text>
        // </TouchableOpacity>
        //   </View>
      );
  }
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.headingContainer}>
        <Text style={styles.heading}>Select Your Item</Text>
        </View>
        <FlatList
          data={formatData(DATA,numcolums)}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={numcolums}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
 alignItems:'center',
 justifyContent:'center',
 flex:1,
 margin:10,
 height:WIDTH/numcolums,
 borderRadius:20
    },
    itemText: {
      color:'black',
      fontSize:20
    },
    itemInvisible: {
      backgroundColor:'transparent'
    },
    headingContainer:{
      justifyContent:'center',
      alignItems:'center',
    },
    heading:{
      fontSize:40,
     margin:20,
     fontWeight:'bold'

    },
    productimage:{
      height:190,
      width:178,
      justifyContent: "center",
  
  },
  productText:{
    color: "white",
    fontSize: 22,
    lineHeight: 44,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },
  });