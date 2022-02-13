import React, { useState } from "react";
import { FlatList,Alert,Modal,Pressable, SafeAreaView, StatusBar,ImageBackground, StyleSheet, Text,useWindowDimensions ,TouchableOpacity,Dimensions, View, Button } from "react-native";
// import { TabView, SceneMap } from 'react-native-tab-view';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Tailors from "../model/tailors";
import { SliderBox } from "react-native-image-slider-box";
import { Card } from "react-native-shadow-cards";
import { ScrollView } from "react-native-gesture-handler";
import products from "../model/products";

const FirstRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
  );
  
  const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
  );
  
//   const renderScene = SceneMap({
//     first: FirstRoute,
//     second: SecondRoute,
//   });
export default function TailorDetails({route,navigation}){
    // console.log(route);
    // console.log(route.params);
  
    const {tailorId} = route.params;
    const {name} = route.params;
    navigation.setOptions({title:name});
    const tailors = Tailors;
  const data1 = tailors.filter(aux =>aux.id == tailorId);
  //console.log(data1);
  //console.log(data1["username"]+'data1');
      // Changing the state after 2 sec
      // from the time when the component
      // is rendered
 

    // console.log(tailors["tailorId"]);
  const [modalVisible, setModalVisible] = useState(false);
    // console.log(tailors[tailorId].images);
    const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  
    const [width, setWidth] = useState(0);
    const renderItem = ({ item }) => {
        if(item["id"] == tailorId ){
            // console.log(item.products[0].kurta);
            //console.log(item["tailorId"]);
            return (
                
                <View style={{backgroundColor:'#fff',flex:1}} >
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                          <Text>Review</Text>
                          <ScrollView>
                            <Text style={styles.modalText}>Blouseadsdaaaaaaaaaaaaaaaaaaaaaa</Text>
                            
                            <Text style={styles.modalText}>Blouse</Text>
                            
                            <Text style={styles.modalText}>Blouse</Text>
                            
                            <Text style={styles.modalText}>Blouse</Text>
                            <Text style={styles.modalText}>Blouseadsdaaaaaaaaaaaaaaaaaaaaaa</Text>
                            
                            <Text style={styles.modalText}>Blouse</Text>
                            
                            <Text style={styles.modalText}>Blouse</Text>
                            
                            <Text style={styles.modalText}>Blouse</Text>
                            <Text style={styles.modalText}>Blouseadsdaaaaaaaaaaaaaaaaaaaaaa</Text>
                            
                            <Text style={styles.modalText}>Blouse</Text>
                            
                            <Text style={styles.modalText}>Blouse</Text>
                            
                            <Text style={styles.modalText}>Blouse</Text>
                            <Text style={styles.modalText}>Blouseadsdaaaaaaaaaaaaaaaaaaaaaa</Text>
                            
                            <Text style={styles.modalText}>Blouse</Text>
                            
                            <Text style={styles.modalText}>Blouse</Text>
                            
                            <Text style={styles.modalText}>Blouse</Text>
                            <Text style={styles.modalText}>Blouseadsdaaaaaaaaaaaaaaaaaaaaaa</Text>
                            
                            <Text style={styles.modalText}>Blouse</Text>
                            
                            <Text style={styles.modalText}>Blouse</Text>
                            
                            <Text style={styles.modalText}>Blouse</Text>
                            <Text style={styles.modalText}>Blouseadsdaaaaaaaaaaaaaaaaaaaaaa</Text>
                            
                            <Text style={styles.modalText}>Blouse</Text>
                            
                            <Text style={styles.modalText}>Blouse</Text>
                            
                            <Text style={styles.modalText}>Blouse</Text>
                            </ScrollView>
                            <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                            >
                            <Text style={styles.textStyle}>Back</Text>
                            </Pressable>
                        </View>
                        </View>
                    </Modal>
                    <View style={styles.images} onLayout={(event)=> setWidth(event.nativeEvent.layout.width)}>
                        <SliderBox images={item.images} 
                        parentWidth={width}
                        sliderBoxHeight={260} 
                        dotColor="#FFEE58"
                        inactiveDotColor="#90A4AE"
                        autoplay
                        circleLoop/>
                    </View>
                    <View style={{flex:1, flexWrap:'wrap',flexDirection:'row',marginTop:10}}>
                        <View style={{flex:0.71,paddingLeft:15}} >
                             <Text style={{fontSize:30, fontWeight:'bold'}}>{item.username}</Text>
                        </View>  
                        <View style={{flex:0.17, flexWrap:'wrap',backgroundColor:'green',borderRadius:5}} >
                            <View style={{ flexDirection: 'row', justifyContent: 'center' } }>
                                <Text style={styles.ratingText} >{item.rating}</Text>
                                <FontAwesome name='star' style={styles.iconn}/>
                            </View>
                        </View>
                    </View>
                    <View style={{flex:1, flexWrap:'wrap',flexDirection:'row',marginTop:10,marginBottom:10}}>
                        <View style={{flex:0.6,paddingLeft:15}} >
                            <View style={{ flexDirection: 'row' } }>
                                <FontAwesome name='map-marker' style={styles.locIconn}/>
                                <Text style={{marginLeft:10}}>{item.address},{item.locality},{item.city}</Text>
                            </View>
                        </View>  
                        <View style={{flex:0.4, flexWrap:'wrap'}} >
                            <View style={{ flexDirection: 'row', justifyContent: 'center' } }>
                                {/* <Text style={styles.ratingText} >Reviews</Text> */}
                                <Pressable
                                    style={[styles.button, styles.buttonOpen]}
                                    onPress={() => setModalVisible(true)}
                                >
                                    <Text style={styles.ratingText}>Reviews</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </View>
            );
        };
    }
    
    const renderAllProduct = ({item})=>{

      //   console.log(item);
        //   console.log(item["products"]["name"]);
           let items = [];
           if( item["products"]) {
             items = item["products"].map(row => {
               return ( 
              
         <View style={{margin:10}}>
                 <Text style = {{fontSize:20,textAlign:'center',padding:10,borderColor:'red',borderWidth:3,borderRadius:30,color:'red'}}>{row.name}</Text>
                 </View>
            
                 );
             })
           } 
       
       return (
         <View style={{backgroundColor:'white',marginTop:2}}>
         <Text style={styles.heading}>My Services</Text>
         <View style={{flex:1,flexDirection:'row',flexWrap:'wrap'}}>{items}</View>
       
            </View>
       );
       
     }

    const renderProduct = ({item})=>{

     //   console.log(item);
       //   console.log(item["products"]["name"]);
          let items = [];
          if( item["products"]) {
            items = item["products"].map(row => {
              return ( 
             
                <Card style={{ justifyContent:'center', marginLeft:20, marginBottom:10,marginTop:10, borderRadius:15,padding:20}}>
        
                <Text style = {{fontSize:20,padding:10}}>{row.name}</Text>
                <Text style = {{fontSize:20,paddingLeft:10}}>{row.price}</Text>
                <Pressable
                    style={{backgroundColor:"#fdeb93",height:40,justifyContent:'center',alignContent:'center',borderRadius:10,elevation: 10}}
                    onPress={()=>navigation.navigate("ProductSpecification",{selectedProduct:row.name})}
                >
                    <Text style={{textAlign: 'center',color:'red'}}>BOOK NOW</Text>
                </Pressable>
        
                </Card>
                );
            })
          } 
      
      return (
        <View>
        
        <View>{items}</View>
      
           </View>
      );
      
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
                data={tailors.filter(aux =>aux.id == tailorId)}
                renderItem={renderAllProduct}
                keyExtractor={(item) => item.id}
                />
                <Text style={styles.heading}>Book Your Porducts</Text>
                <FlatList
                data={tailors.filter(aux =>aux.id == tailorId)}
                renderItem={renderProduct}
                keyExtractor={(item) => item.id}
                />
            </ScrollView>
        </View>

      );

}

const styles = StyleSheet.create({
    container:{
flex:1
    },
    images: {
        backgroundColor:'#f5f5f5',
        flex:1,
        flexDirection:'column'
    },
    text:{
        position:'relative'
    },
    locIconn:{
        color:'red',
        fontSize:25
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
        textAlign:'center',
        justifyContent: 'center',
        alignContent:'center'
      },
      ratingText:{
        fontSize:25,
        color:'white',
      },
      iconn:{
        color:'white',
        marginTop:10,
        marginLeft:5
      },
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      heading:{
        fontSize:30,
        marginVertical: 8,
        marginHorizontal: 10,
        marginLeft:10,
        fontWeight:'bold'
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.75,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 5,
        padding: 5,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "green",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }

})


