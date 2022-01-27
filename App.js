import React from 'react';
import Home from './screens/home';
import Login from './screens/login';
import Signup from './screens/signup';

import About from './screens/about';
import WomenItem from './screens/womenItem';

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
      headerShown: false
    }}>
      <Stack.Screen name="Home" component={Home} />
      
      <Stack.Screen name="Splash" component={Splash} />
      
     <Stack.Screen name="Login" component={Login} />
     
     <Stack.Screen name="Signup" component={Signup} />
     <Stack.Screen name="About" component={About} />
     <Stack.Screen name="WomenItem" component={WomenItem} />
     

    </Stack.Navigator>
  </NavigationContainer>
  );
}


