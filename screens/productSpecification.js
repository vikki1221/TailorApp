import React, { useState, useEffect } from "react";
import { FlatList,Alert,Modal,Pressable, SafeAreaView, StatusBar,ImageBackground, StyleSheet,Image, Text,useWindowDimensions ,TouchableOpacity,Dimensions, View, Button } from "react-native";
// import { TabView, SceneMap } from 'react-native-tab-view';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Products from "../model/products";
import { SliderBox } from "react-native-image-slider-box";
import { Card } from "react-native-shadow-cards";
import { ScrollView, TextInput } from "react-native-gesture-handler";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ProductSpecification({route,navigation}){
    const {selectedProduct} = route.params;
    navigation.setOptions({title:selectedProduct});
    
    const products = Products;
    const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');

//   useEffect(() => {
//     //Get device Height
//     setHeight(Dimensions.get('window').height);
//     //Get device Width
//     setWidth(Dimensions.get('window').width);
//   }, []);

    const renderProductDetails = ({item})=>{

        //   console.log(item);
          //   console.log(item["products"]["name"]);
             let items = [];
             if( item["measurementImages"]) {
               items = item["measurementImages"].map(row => {
                 return ( 
                    <View>
                    <Image source={row}
                    />
                    </View>
                   );
               })
             } 
         
         return (
           <View >
           
           <View>{items}</View>
         
              </View>
         );
         
       }
   
       const renderMeasurementDetails = ({item})=>{

        //   console.log(item);
          //   console.log(item["products"]["name"]);
             let items = [];
             if( item["measurement"]) {
               items = item["measurement"].map(row => {
                 return ( 
                    <View> 
                        <Text>{row}</Text>
                         <TextInput

                    placeholder={row}
                    keyboardType="numeric"
                  />
                    </View>
                   );
               })
             } 
         
         return (
           <View >
           
           <View>{items}</View>
         
              </View>
         );
         
       }

    return (
        <View style={styles.container}>
            <ScrollView>
            <View style={{backgroundColor:'#F0FFFF'}}>

            <FlatList
                data={products.filter(aux =>aux.title == selectedProduct)}
                renderItem={renderProductDetails}
                keyExtractor={(item) => item.id}
                />
                   <FlatList
                data={products.filter(aux =>aux.title == selectedProduct)}
                renderItem={renderMeasurementDetails}
                keyExtractor={(item) => item.id}
                />
            </View>
            </ScrollView>
        </View>

      );

}

const styles = StyleSheet.create({
    container:{
flex:1
    },

})


