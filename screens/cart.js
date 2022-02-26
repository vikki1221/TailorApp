import React, { useState, useEffect } from "react";
import { FlatList,Alert,Modal,Pressable, SafeAreaView, StatusBar,ImageBackground, StyleSheet,Image, Text,useWindowDimensions ,TouchableOpacity,Dimensions, View, Button } from "react-native";

export default function ProductSpecification({route,navigation}){
    const {Product} = route.params;
    console.log(Product);
    return (
        <View>
            <Text>this is our cart.</Text>
        </View>

    );

}