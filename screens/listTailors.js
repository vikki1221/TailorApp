import React, { useState } from "react";
import Tailors from "../model/tailors";

import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity,Dimensions, View } from "react-native";

export default function listTailors({route}){
    const { selectedItem } = route.params;
    console.log(selectedItem);
    const tailors = Tailors;
    console.log(Tailors[0]["simpleBlouse"]);

    const renderItem = ({ item }) => {
        if(item[selectedItem] == 'true' ){
            return (
              <View >
                <TouchableOpacity >
              <Text   >{item.id}--{item.username}</Text>
              </TouchableOpacity>
                </View>
            );
          };
    }
        
          return (
            <View>
              <FlatList
                data={tailors}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
              />
            </View>
          );



    return (
        <View>
          <TouchableOpacity onPress={()=>{console.log("hi")}  }>
        <Text >hiii</Text>
        </TouchableOpacity>
          </View>
      );
}