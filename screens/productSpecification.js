import React, { useState, useEffect } from "react";
import { FlatList,Alert,Modal,Pressable, SafeAreaView, StatusBar,ImageBackground, StyleSheet,Image, Text,useWindowDimensions ,TouchableOpacity,Dimensions, View, Button } from "react-native";
// import { TabView, SceneMap } from 'react-native-tab-view';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Products from "../model/products";
import { SliderBox } from "react-native-image-slider-box";
import { Card } from "react-native-shadow-cards";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import CheckBox from 'react-native-check-box';

export default function ProductSpecification({route,navigation}){
    const {selectedProduct} = route.params;
    const [next, setNext] = useState(false);
    const [frontPhoto, setFrontPhoto] = useState(null);
    const [backPhoto, setBackPhoto] = useState(null);
    const [otherText, setOtherText] = useState('');
    const [full, setFull] = useState('');
    const [arm, setArm] = useState('');
    navigation.setOptions({title:selectedProduct});
    
    const products = Products;

    const renderProductDetails = ({item})=>{ 
         return (
         // <Card style={{margin: 15, borderRadius:15,width:"100%",paddingBottom:10}}>
           
           <View style={{padding:20,paddingLeft:40,paddingRight:40}}><Image style={{resizeMode: 'stretch',width:'100%',height:250}} source={item.measurementImage}/></View>
         
           //    </Card>
         );
         
       }
       
      //  const handleChange = ({event})=>{
      //    console.log(event.target.value);
      //  }

       const setInputValue = (row, value)=>{
          // console.log("Text row:" + row);
          // console.log("Text value:" + value);
          if(row=="Full Shoulder"){
            setFull(value);
            console.log(full);
          }
          // const value = event.currentTarget.value;
          // setOtherText(){
          //   const otherText = [...state.othertext];
          //   otherText[row.index] = {
          //     ...row,
          //     value
          //   };
          //   console.log(otherText);
          // }
          // switch(row){
          //   case "Full Shoulder": setFull{
          //     full:value;
          //   }
          // }
    // const Textdata = [...otherText]; 
    // Textdata[i]=value;
    // console.log(Textdata);
    // setOtherText(
    //   {
    //     otherText: Textdata
    //   },
    //   () => {
    //     console.log("Text data = " + otherText);
    //   }
    // );


       }

       const renderMeasurementDetails = ({item})=>{

        //   console.log(item);
          //   console.log(item["products"]["name"]);
             let items = [];
             console.log(item["measurement"]);
             if( item["measurement"]) {
               var i=-1;
               items = item["measurement"].map(row => {
                //  console.log(index);
                i++;
                console.log(i);
                 var part = {row}
                   console.log(part["row"]);
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
                              onChangeText={value=>setInputValue({row}["row"],value)}
                              // onChangeText={event=>setInputValue(row,event)}
                              // value={row.value}
                              value={otherText[{row}["row"]]}
                              // onChange={part}
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

       const renderProductAddons = ({item})=>{

        //   console.log(item);
          //   console.log(item["products"]["name"]);
             let items = [];
             console.log(item["measurement"]);
             if( item["addons"]) {
               var i=-1;
               items = item["addons"].map(row => {
                //  console.log(index);
                i++;
                console.log(i);
                 var part = {row}
                   console.log(part["row"]);
                 return ( 
                    <View> 
                      {/* <View style={{flex:1, flexWrap:'wrap',flexDirection:'row',marginTop:10}}> */}
                        <View style={{paddingLeft:15}} >
                        <CheckBox
                              // value={isSChecked}
                              // onValueChange={setSelection}
                              style={styles.checkbox}
                              rightText={row}
                            />
                        </View>  
                        {/* <View style={{flex:0.5, flexWrap:'wrap',
                                borderBottomWidth:1}} >
                            <View style={{ flexDirection: 'row', justifyContent: 'center' } }>
                            
                            <Text style={{fontSize:15}}>{row}</Text>
                            </View>
                        </View> */}
                    </View>
                    // </View>
                   );
               })
             } 
         
         return (
           <View >
           {/* <View style={{flex:1, flexWrap:'wrap',flexDirection:'row',backgroundColor:'#a6e4d0',padding:10}}> */}
           <Text style={{marginLeft:10,marginTop:20,fontSize:20, 
            fontWeight:'bold'}}>Ask tailor to add these items for your product.</Text>
            
                   {/* </View> */}
           <View style={{padding:10,margin:10}}>{items}</View>
           <Text style={{margin:10,color:'red'}}>*If not selecting, Please send all extra items like astar etc.</Text>
               
         
              </View>
         );
         
       }

       const handleFrontPhoto =async()=>{
         let result = await ImagePicker.launchImageLibraryAsync({
           mediaTypes:ImagePicker.MediaTypeOptions.All,
           allowsEditing:true,
           aspect:[4,3],
           quality:1
         })
         console.log(result);
         if(!result.cancelled){
           setFrontPhoto(result.uri);
         }
       }

       const handleBackPhoto =async()=>{
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes:ImagePicker.MediaTypeOptions.All,
          allowsEditing:true,
          aspect:[4,3],
          quality:1
        })
        console.log(result);
        if(!result.cancelled){
          setBackPhoto(result.uri);
        }
      }

    return (
        <View style={styles.container}>
            <ScrollView>
            {next ? 
            <View>
            {/* <Text style={{marginTop:20,fontSize:25, fontWeight:'bold',textAlign:'center'}}> MORE INFORMATION</Text> */}
            
            <Text style={{marginLeft:10,marginTop:20,fontSize:20, fontWeight:'bold'}}>UPLOAD DESIGNS</Text>
            <View style={{flex:1, flexDirection:'row',backgroundColor:'white',padding:20,margin:10,borderRadius:10}}>
            <View style={{flex:0.5,padding:10}}>
                {/* <Pressable  onPress={handleFrontPhoto} 
                    style={{marginBottom:15,backgroundColor:"#1E90FF",padding:10,justifyContent:'center',borderRadius:10,elevation: 6}}
                   >
                  
                <Text style={{color:'white',fontSize:15,textAlign:'center'}}>CHOOSE FRONT PHOTO</Text>
                  </Pressable> */}
                {frontPhoto ?
                <View>
                <Image source={{uri:frontPhoto}} style={{width:"90%",height:140,alignSelf:'center'}}/>
                <Pressable onPress={handleFrontPhoto} 
                style={{justifyContent:'center'}}
                   >
                <Text style={{textAlign:'center'}}>Change Front Photo</Text>
                </Pressable>
                </View>
                  :<View style={{width:"80%",height:140,justifyContent:"center",alignSelf:'center',
                  borderColor: '#DCE0DF',
                  borderWidth: 2,
                  borderStyle:'dashed',
                  borderRadius:1}}>
                    <Pressable  onPress={handleFrontPhoto} 
                    style={{justifyContent:'center'}}
                   >
                        <FontAwesome name='upload' style={{color:'#DCE0DF',textAlign:'center', fontSize:25}}/>
                        <Text style={{textAlign:'center',color:'#DCE0DF',fontSize:25}} >FRONT PHOTO</Text> 
                        </Pressable>
                    </View>
              }
              </View>
              <View style={{flex:0.5,padding:10}}>
                {/* <Pressable onPress={handleBackPhoto} 
                style={{marginBottom:15,backgroundColor:"#1E90FF",padding:10,justifyContent:'center',borderRadius:10,elevation: 6}}
                   >
                     <Text style={{color:'white',fontSize:15,textAlign:'center'}}>CHOOSE BACK PHOTO</Text>
                 
                  </Pressable> */}
                {backPhoto ?
                <View>
                <Image source={{uri:backPhoto}} style={{width:"90%",height:140,alignSelf:'center'}}/>
                <Pressable onPress={handleBackPhoto} 
                style={{justifyContent:'center'}}
                   >
                <Text style={{textAlign:'center'}}>Change Back Photo</Text>
                </Pressable>
                </View>
                :<View style={{width:"80%",height:140,justifyContent:"center",alignSelf:'center',
                borderColor: '#DCE0DF',
                borderWidth: 2,
                borderStyle:'dashed',
                borderRadius:1}}>
                   <Pressable onPress={handleBackPhoto} 
                style={{justifyContent:'center'}}
                   >
                       <FontAwesome name='upload' style={{color:'#DCE0DF',textAlign:'center', fontSize:25}}/>
                  <Text style={{textAlign:'center',color:'#DCE0DF',fontSize:25}} >BACK PHOTO</Text> 
                  </Pressable>
                  </View>
                }
              </View>
            </View>
            <View>
            <FlatList
                data={products.filter(aux =>aux.title == selectedProduct)}
                renderItem={renderProductAddons}
                keyExtractor={(item) => item.id}
                />
            </View>
            <Text style={{marginLeft:10,marginTop:20,fontSize:20, fontWeight:'bold'}}>ADDITIONAL COMMENTS</Text>
                        
            <View style={styles.textAreaContainer}>
            <TextInput
      style={styles.textArea}
            placeholder="bhagggg bhenchod sdkdnskjsksms"
            multiline={true}
            numberOfLines={4}
            />
            </View>
            {/* <View style={styles.textAreaContainer} >
    <TextInput
      style={styles.textArea}
      underlineColorAndroid="transparent"
      placeholder="Type something"
      placeholderTextColor="grey"
      numberOfLines={10}
      multiline={true}
    />
  </View> */}
            
            
              
            <View style={{flex:1, flexWrap:'wrap',flexDirection:'row',padding:10}}>
            <View style={{flex:0.5}}>
               <Pressable
                  
                  onPress={() => setNext(false)}
              >
                <View style={{ flexDirection: 'row', justifyContent: 'center' } }>
                    
                <FontAwesome name='arrow-left' style={styles.iconn}/>
                    
                  <Text style={{color:'black',textAlign:'left',fontSize:20}}>Previous</Text>
                              </View>
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
          
            :<View style={{backgroundColor:'#F0FFFF'}}>

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
                <View style={{flex:1, flexWrap:'wrap',flexDirection:'row',padding:10}}>
            <View style={{flex:0.8}}>
               
                      </View>  
                      <View style={{flex:0.2}}>
                      <Pressable
                    
                    onPress={() => setNext(true)}
                >
                  <View style={{ flexDirection: 'row', justifyContent: 'center' } }>
                    
                  <Text style={{color:'black',fontSize:20}}>Next</Text>
                    <FontAwesome name='arrow-right' style={styles.iconn}/>
                            </View>
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
      },
      iconn:{
        color:"black",
        marginTop:8,
        marginLeft:7,
        fontSize:15
      },
      textAreaContainer: {
        margin:10,
        borderColor: '#DCE0DF',
        borderWidth: 2,
        padding: 5
      },
      textArea: {
        // height: 50, 
        justifyContent: "flex-start"
      }

})


