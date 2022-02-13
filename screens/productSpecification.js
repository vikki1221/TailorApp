import React, { useState } from "react";
import { FlatList,Alert,Modal,Pressable, SafeAreaView, StatusBar,ImageBackground, StyleSheet, Text,useWindowDimensions ,TouchableOpacity,Dimensions, View, Button } from "react-native";
// import { TabView, SceneMap } from 'react-native-tab-view';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Tailors from "../model/tailors";
import { SliderBox } from "react-native-image-slider-box";
import { Card } from "react-native-shadow-cards";
import { ScrollView } from "react-native-gesture-handler";



export default function ProductSpecification({route,navigation}){
    const {selectedProduct} = route.params;
    navigation.setOptions({title:selectedProduct});
    return (
        <View style={styles.container}>
         <Text>Hello Kitti</Text>
        </View>

      );

}

const styles = StyleSheet.create({
    container:{
flex:1
    },

})


