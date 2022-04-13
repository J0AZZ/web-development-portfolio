import React from 'react';
import { StatusBar } from 'react-native';
import {AppLoading} from 'expo';
import {Roboto_400Regular, Roboto_500Medium, useFonts} from '@expo-google-fonts/roboto';
import {Poppins_400Regular, Poppins_500Medium} from '@expo-google-fonts/poppins';

import AppRoutes from './src/routes/app.routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Poppins_400Regular,
    Poppins_500Medium,
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent"/>
      <AppRoutes/>
    </>
  );
}
