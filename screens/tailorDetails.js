import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar,ImageBackground, StyleSheet, Text,useWindowDimensions ,TouchableOpacity,Dimensions, View, Button } from "react-native";
import { TabView, SceneMap } from 'react-native-tab-view';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Tailors from "../model/tailors";
import { SliderBox } from "react-native-image-slider-box";
import { Card } from "react-native-shadow-cards";
import { ScrollView } from "react-native-gesture-handler";

const FirstRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
  );
  
  const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
  );
  
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
export default function TailorDetails({route,navigation}){
    // console.log(route);
    // console.log(route.params);
  
    const {tailorId} = route.params;
    const {name} = route.params;
    navigation.setOptions({title:name});
    const tailors = Tailors;
  
    // console.log(tailors[tailorId].images);
    const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  
    const [width, setWidth] = useState(0);
    const renderItem = ({ item }) => {
        if(item["id"] == tailorId ){
            console.log(item);
            return (
              <View style={{backgroundColor:'#fff',flex:1}} >
                    
                        <View style={styles.images} onLayout={(event)=> setWidth(event.nativeEvent.layout.width)}>
                            <SliderBox images={item.images} 
                            parentWidth={width}
                            sliderBoxHeight={260} 
                            dotColor="#FFEE58"
                            inactiveDotColor="#90A4AE"
                            autoplay
                            circleLoop/>
                            
                            <View style={{flex:1, flexWrap:'wrap'}}>
            <View >
          <Text style={{marginLeft:15,marginTop:15,fontSize:30, fontWeight:'bold'}}>{item.username}</Text>
          
          <View style={styles.ratingBlock}>
          <Text style={styles.ratingText} >{item.rating}</Text>
          <FontAwesome name='star' style={styles.iconn}/>
          </View>
          </View>
          <View style={styles.addressBlock}>
          <FontAwesome name='map-marker' style={styles.locIconn}/>
          <Text style={{marginLeft:10,flexShrink:1}}>{item.address},{item.locality},{item.city}</Text>
          </View>
          </View>
                        </View>
                  
      
            </View>
            );
        };
    }
    const renderProduct = ({item})=>{
      if(item["id"] == tailorId ){
      return (
        // <View style={styles.productContainer}>
        <Card style={{ margin: 15, borderRadius:15}}>
        
        <Text>Hello</Text>

        </Card>
          // </View>
      );
      }
    }


    return (
        <View style={styles.container}>
          <ScrollView>
        <FlatList
          data={tailors}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
         <FlatList
          data={tailors}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id}
        />
   </ScrollView>
    </View>

        // <View>
        //     <View style={styles.images} >
        //                     <SliderBox images={tailors[tailorId].images}
        //                     sliderBoxHeight={200} 
        //                     dotColor="#FFEE58"
        //                     inactiveDotColor="#90A4AE"
        //                     autoplay
        //                     circleLoop/>
        //                 </View>
        //   <Text >tailorId -- {tailorId}</Text>
        //   <Text >name -- {name}</Text>
        // </View>
      );

}

const styles = StyleSheet.create({
    container:{
flex:1
    },
    images: {
        backgroundColor:'#f5f5f5',
    },
    text:{
        position:'relative'
    },
    locIconn:{
        color:'red',
        marginLeft:15,
        fontSize:20
      },
      addressBlock:{
          marginTop:10,
        marginLeft:10,
        width:300,
        height:32,
        justifyContent: 'center',
        alignContent:'center',
        flexDirection:'row',
      },
      ratingBlock:{
        backgroundColor:'#228B22',
        width:60,
        height:32,
        marginLeft:300,
        marginTop:-30,
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
      },

})


