import React, { useState } from "react";
import Tailors from "../model/tailors";
import {Card} from 'react-native-shadow-cards';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity,Dimensions, View, Button } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { SliderBox } from "react-native-image-slider-box";

export default function listTailors({route,navigation}){
    
        // state = {
        //   images: [
        //     require('../assets/Tailors.jpg'),
        //     "https://source.unsplash.com/1024x768/?nature",
        //     "https://source.unsplash.com/1024x768/?water",
        //     "https://source.unsplash.com/1024x768/?girl",
        //     "https://source.unsplash.com/1024x768/?tree", 
        //   ]
        // };
  const [width, setWidth] = useState(0);
  const { selectedItem } = route.params;
  console.log(selectedItem);
  const tailors = Tailors;
  console.log(Tailors[0]["simpleBlouse"]);
  const renderItem = ({ item }) => {
    if(item[selectedItem] == 'true' ){
      return (
        <View >
          <TouchableOpacity onPress={() => navigation.navigate("TailorDetails",{tailorId:item.id, name:item.username})  }>
            <Card style={{padding: 10, margin: 20, borderRadius:15}}>
              <View style={styles.images} onLayout={(event)=> setWidth(event.nativeEvent.layout.width)}>
                <SliderBox images={item.images} 
                parentWidth={width}
                sliderBoxHeight={200} 
                dotColor="#FFEE58"
                inactiveDotColor="#90A4AE"
                autoplay
                circleLoop/>
              </View>
              <View>
                <View style={styles.ratingBlock}>
                  <Text style={styles.ratingText} >{item.rating}</Text>
                  <FontAwesome name='star' style={styles.iconn}/>
                </View>
                <Text style={styles.itemText} >{item.username}</Text>
              </View>
            </Card>
          </TouchableOpacity>
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
        keyExtractor={(item) => item.id}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor:'#f5f5f5',
  },
  images: {
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
      marginTop:-20,
      color:'black',
      fontSize:30,
      fontWeight:'bold',
  },
  ratingBlock:{
      backgroundColor:'#228B22',
      width:60,
      height:32,
      marginLeft:250,
      marginTop:20,
      zIndex:1,
      borderRadius:5,
      flex:1,
      flexWrap:'wrap',
      justifyContent: 'center',
      alignContent:'center'
  },
  ratingText:{
      fontSize:25,
      color:'white',
  },
  iconn:{
      color:'white',
      marginLeft:5
  }
});