import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity,Dimensions, View, Button } from "react-native";

import Tailors from "../model/tailors";
import { SliderBox } from "react-native-image-slider-box";
export default function TailorDetails({route,navigation}){
    // console.log(route);
    // console.log(route.params);
    const {tailorId} = route.params;
    const {name} = route.params;
    
    const tailors = Tailors;
    // console.log(tailors[tailorId].images);
    
    const [width, setWidth] = useState(0);
    const renderItem = ({ item }) => {
        if(item["id"] == tailorId ){
            console.log(item);
            return (
              <View >
                   <TouchableOpacity onPress={() => navigation.navigate("TailorDetails",{tailorId:item.id, name:item.username})  }>
                    
                        <View style={styles.images} onLayout={(event)=> setWidth(event.nativeEvent.layout.width)}>
                            <SliderBox images={item.images} 
                            parentWidth={width}
                            sliderBoxHeight={260} 
                            dotColor="#FFEE58"
                            inactiveDotColor="#90A4AE"
                            autoplay
                            circleLoop/>
                        </View>
                    </TouchableOpacity>
               <View style={styles.text}>
        <Text >helooo</Text>
        <Text >helooo</Text>
        <Text>helooo</Text>
        <Text>helooo</Text>
        <Text>helooo</Text>
        <Text>helooo</Text>
        <Text>helooo</Text>
        <Text>helooo</Text>
        <Text>helooo</Text>
        <Text>helooo</Text>
        <Text>helooo</Text>
        <Text>helooo</Text>
        <Text>helooo</Text>
        <Text>helooo</Text>
        <Text>helooo</Text>
        <Text>helooo</Text>
        <Text>helooo</Text>
        <Text>helooo</Text>
        <Text>helooo</Text>
        <Text>helooo</Text>
        <Text>helooo</Text>
        <Text>helooo</Text>
        <Text>helooo</Text>
        <Text>helooo</Text>
        </View>     
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
        /></View>
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
    images: {
        flex: 1,
        backgroundColor:'#f5f5f5',
    },
    text:{
        position:'relative'
    }

})


