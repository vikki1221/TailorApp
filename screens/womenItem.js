import React, { useState } from "react";

import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity,Dimensions, View } from "react-native";

const DATA = [
    {
      id: "1",
      title: "Simple Blouse",
      val: "simpleBlouse"
    },
    {
      id: "2",
      title: "Designer Blouse",
      val: "designerBlouse"
    },
    {
      id: "3",
      title: "Kurta/Kurti",
      val: "kurta"
    },
    {
      id: "4",
      title: "Garara",
      val: "gharara"
    },
    {
      id: "5",
      title: "Sharara",
      val: "sharara"
    },
    {
      id: "6",
      title: "Pyjamas",
      val: "pyjamas"
    },
   
  ];

  const numcolums = 2;
  const WIDTH=Dimensions.get('window').width;
export default function womenItem({navigation}) {
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
      return (
        <View style={styles.item}>
          <TouchableOpacity onPress={() => navigation.navigate("ListTailors",{selectedItem:item.val})  }>
        <Text style={styles.itemText}  >{item.title}</Text>
        </TouchableOpacity>
          </View>
      );
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
 backgroundColor:'#f9c2ff',
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
      fontSize:20,
     margin:20

    }
  });