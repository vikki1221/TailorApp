import React, { useState, useEffect } from "react";
import { FlatList,Alert,Modal,Pressable, SafeAreaView, StatusBar,ImageBackground, StyleSheet,Image, Text,useWindowDimensions ,TouchableOpacity,Dimensions, View, Button } from "react-native";
// import { TabView, SceneMap } from 'react-native-tab-view';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Products from "../model/products";
import { SliderBox } from "react-native-image-slider-box";
import { Card } from "react-native-shadow-cards";
import { ScrollView, TextInput } from "react-native-gesture-handler";
//import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default function ProductSpecification({route,navigation}){
    const {selectedProduct} = route.params;
    navigation.setOptions({title:selectedProduct});
    
    const products = Products;

//  HeadTable= ['Head1', 'Head2', 'Head3', 'Head4', 'Head5'],
//  DataTable= [
//   ['1', '2', '3', '4', '5'],
//   ['a', 'b', 'c', 'd', 'e'],
//   ['1', '2', '3', '4', '5'],
//   ['a', 'b', 'c', 'd', 'e'],
//   ['1', '2', '3', '4', '5']
// ]
    const renderProductDetails = ({item})=>{ 
         return (
         // <Card style={{margin: 15, borderRadius:15,width:"100%",paddingBottom:10}}>
           
           <View style={{padding:20}}><Image style={{resizeMode: 'stretch',width:'100%',height:250}} source={item.measurementImage}/></View>
         
           //    </Card>
         );
         
       }
   
       const renderMeasurementDetails = ({item})=>{

        //   console.log(item);
          //   console.log(item["products"]["name"]);
             let items = [];
             console.log(item["measurement"])
      //        <Table borderStyle={{borderWidth: 1, borderColor: '#ffa1d2'}}>
      //   <Row data={item["measurement"]} style={styles.HeadStyle} textStyle={styles.TableText}/>
      //   {/* <Rows data={DataTable} textStyle={styles.TableText}/> */}
      //  </Table>
             if( item["measurement"]) {
               items = item["measurement"].map(row => {
                   console.log(row);
                 return ( 
                    <View> 
                        {/* <Table borderStyle={{borderWidth: 1, borderColor: '#ffa1d2'}}>
        <Row data={row} style={styles.HeadStyle} textStyle={styles.TableText}/>
        {/* <Rows data={DataTable} textStyle={styles.TableText}/> */}
      {/* </Table> */} 
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
    HeadStyle: { 
        height: 50,
        alignContent: "center",
        backgroundColor: '#ffe0f0'
      },
      TableText: { 
        margin: 10
      }

})


