import React, { useState } from "react";
import Tailors from "../model/tailors";
import {Card} from 'react-native-shadow-cards';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity,Dimensions, View, Button } from "react-native";


import { SliderBox } from "react-native-image-slider-box";

export default function listTailors({route}){
    
        state = {
          images: [
            require('../assets/Tailors.jpg'),
            "https://source.unsplash.com/1024x768/?nature",
            "https://source.unsplash.com/1024x768/?water",
            "https://source.unsplash.com/1024x768/?girl",
            "https://source.unsplash.com/1024x768/?tree", 
          ]
        };
    
    const { selectedItem } = route.params;
    console.log(selectedItem);
    const tailors = Tailors;
    console.log(Tailors[0]["simpleBlouse"]);
    const renderItem = ({ item }) => {
        if(item[selectedItem] == 'true' ){
            return (
              <View >
                    <Card style={{padding: 10, margin: 10}}>
                        <View style={styles.container} >
                            <SliderBox images={state.images}
                            sliderBoxHeight={200} 
                            dotColor="#FFEE58"
                            inactiveDotColor="#90A4AE"
                            autoplay
                            circleLoop/>
                        </View>
                        <Text style={styles.itemText} >{item.username}</Text>
                    </Card>
      {/* <Card style={{padding: 10, margin: 10}}>
        <Button
          onPress={()=>{}}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </Card>
      <Card style={{padding: 10, margin: 10, height: 50}}>
      </Card> */}
                {/* <TouchableOpacity >
              <Text   >{item.id}--{item.username}</Text>
              </TouchableOpacity> */}
            </View>
            );
          };
    }
        
          return (
            <View style={styles.container}>
              <FlatList
                data={tailors}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
              />
            </View>
          );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#f5f5f5',
    },
    tailorCard: {
        backgroundColor:'#FFFFFF',
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        margin:10,
    },
    itemText:{
        marginTop:20,
        color:'black',
        fontSize:30,
        fontWeight:'bold',
    }

});