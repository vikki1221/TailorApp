import React, { useState, useEffect } from "react";
import { FlatList,Alert,Modal,Pressable, SafeAreaView, StatusBar,ImageBackground, StyleSheet,Image, Text,useWindowDimensions ,TouchableOpacity,Dimensions, View, Button } from "react-native";
// import { TabView, SceneMap } from 'react-native-tab-view';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Products from "../model/products";
import { SliderBox } from "react-native-image-slider-box";
import { Card } from "react-native-shadow-cards";
import { ScrollView, TextInput } from "react-native-gesture-handler";

export default function ProductSpecification({route,navigation}){
    const {selectedProduct} = route.params;
    const [next, setNext] = useState(true);
    navigation.setOptions({title:selectedProduct});
    
    const products = Products;

    const renderProductDetails = ({item})=>{ 
         return (
         // <Card style={{margin: 15, borderRadius:15,width:"100%",paddingBottom:10}}>
           
           <View style={{padding:20,paddingLeft:40,paddingRight:40}}><Image style={{resizeMode: 'stretch',width:'100%',height:250}} source={item.measurementImage}/></View>
         
           //    </Card>
         );
         
       }
   
       const renderMeasurementDetails = ({item})=>{

        //   console.log(item);
          //   console.log(item["products"]["name"]);
             let items = [];
             console.log(item["measurement"]);
             if( item["measurement"]) {
               items = item["measurement"].map(row => {
                   console.log(row);
                 return ( 
                    <View> 
                      <View style={{flex:1, flexWrap:'wrap',flexDirection:'row',marginTop:10}}>
                        <View style={{flex:0.6,paddingLeft:15}} >
                             <Text style={{fontSize:15}}>{row}</Text>
                        </View>  
                        <View style={{flex:0.25, flexWrap:'wrap',
                                borderBottomWidth:1}} >
                            <View style={{ flexDirection: 'row', justifyContent: 'center' } }>
                            <TextInput
                              placeholder={row}
                              keyboardType="numeric"
                              />
                            </View>
                        </View>
                    </View>
                        {/* <Text>{row}</Text>
                         <TextInput

                    placeholder={row}
                    keyboardType="numeric"
                  /> */}
                    </View>
                   );
               })
             } 
         
         return (
           <View style={{margin:10,borderWidth:2}}>
           <View style={{flex:1, flexWrap:'wrap',flexDirection:'row',backgroundColor:'#a6e4d0',padding:10}}>
                        <View style={{flex:0.6,paddingLeft:15}} >
                             <Text style={{fontSize:15, fontWeight:'bold'}}>CUSTOM MEASUREMENTS</Text>
                        </View>  
                        <View style={{flex:0.25, flexWrap:'wrap'}} >
                            <View style={{ flexDirection: 'row', justifyContent: 'center' } }>
                            
                            <Text style={{fontSize:15, fontWeight:'bold'}}>(in cms)</Text>
                            </View>
                        </View>
                    </View>
           <View style={{padding:10,margin:10}}>{items}</View>
         
              </View>
         );
         
       }

    return (
        <View style={styles.container}>
            <ScrollView>
            {next ? 
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
                <Pressable
                    
                    onPress={() => setNext(false)}
                >
                    <Text style={{color:'black',textAlign:'right',padding:10,fontSize:20}}>Next</Text>
                </Pressable>
            </View>
            :<View>
              <Text>Next Screen</Text>
              <View style={{flex:1, flexWrap:'wrap',flexDirection:'row',padding:10}}>
              <View style={{flex:0.5}}>
                 <Pressable
                    
                    onPress={() => setNext(true)}
                >
                    <Text style={{color:'black',textAlign:'left',padding:10,fontSize:20}}>Previous</Text>
                </Pressable>
                        </View>  
                        <View style={{flex:0.5}}>
                 <Pressable
                    
                    onPress={() => setNext(true)}
                >
                    <Text style={{color:'black',textAlign:'right',padding:10,fontSize:20}}>Submit</Text>
                </Pressable>
                        </View>  
    
                </View>
            </View>
            }
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


