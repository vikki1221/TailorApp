import React from 'react';
import Home from './screens/home';
import Login from './screens/login';
import Signup from './screens/signup';

import About from './screens/about';
import WomenItem from './screens/womenItem';
import ListTailors from './screens/listTailors';
import TailorDetails from './screens/tailorDetails';
import ProductSpecification from './screens/productSpecification';

import Splash from './screens/splash';
//import Navigator from './routes/homeStack'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import Login from './screens/login';
//import Home from '../screens/home';
//import ReviewDetails from '../screens/reviewDetails';
const Stack = createNativeStackNavigator();
export default function App() {
 // const [isFirstLaunch,setIsFirstLaunch] = React.useState(null);
  
  return (
    <NavigationContainer>
    <Stack.Navigator
     screenOptions={{
    }}>
      <Stack.Screen      options={{ headerShown: false }} name="Home" component={Home} />
      
      <Stack.Screen options={{ headerShown: false }} name="Splash" component={Splash} />
      
     <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
     
     <Stack.Screen options={{ headerShown: false }} name="Signup" component={Signup} />
     <Stack.Screen options={{ headerShown: false }} name="About" component={About} />
     <Stack.Screen options={{ headerShown: false }} name="WomenItem" component={WomenItem} />
     <Stack.Screen options={{ headerShown: false }} name="ListTailors" component={ListTailors} />
     <Stack.Screen  options={{title: 'Default'}}name="TailorDetails" component={TailorDetails} />
     <Stack.Screen  options={{title: 'Default'}}name="ProductSpecification" component={ProductSpecification} />
     

    </Stack.Navigator>
  </NavigationContainer>
  );
}


