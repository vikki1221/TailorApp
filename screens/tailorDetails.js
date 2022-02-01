import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity,Dimensions, View, Button } from "react-native";

export default function TailorDetails({route,navigation}){
    console.log(route);
    console.log(route.params);
    const {tailorId} = route.params;
    const {name} = route.params;
    
    return (
        <View>
          <Text >tailorId -- {tailorId}</Text>
          <Text >name -- {name}</Text>
        </View>
      );

}