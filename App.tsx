import React, { useEffect } from 'react';
import { View } from 'react-native';
import Routes from './src/routes';
import * as SplashScreen from 'expo-splash-screen';

export default function Ensinais() {
  useEffect(() => {
    async function hideSplash() {
      await SplashScreen.hideAsync();
    }

    hideSplash();
  }, []);

  return <Routes />;
}
