import React from 'react';
import { StyleSheet, Text, View,Button ,Image} from 'react-native';
import { globalStyles } from '../styles/global';
import Onboarding from 'react-native-onboarding-swiper';

export default function Home({navigation}) {
  return (
    <Onboarding
      onSkip={()=>navigation.replace("Splash")}
      onDone={()=>navigation.navigate("Login")}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: <Image source={require('../assets/images.png')} />,
          title: 'Step 1',
          subtitle: 'Select the Service You Want',
        },
        {
          backgroundColor: '#fdeb93',
          image: <Image source={require('../assets/Tailors.jpg')} />,
          title: 'Step 2',
          subtitle: 'Select Your Tailor',
        },
        {
          backgroundColor: '#e9bcbe',
          image: <Image source={require('../assets/measurement.png')} />,
          title: 'Step 3',
          subtitle: 'Give Your Measurement And Book',
        },
      ]}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    padding:30
  },
});