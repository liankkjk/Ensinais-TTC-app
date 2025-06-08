import React, { useEffect, useCallback, useState } from 'react';
import { View } from 'react-native';
import Routes from './src/routes';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

SplashScreen.preventAutoHideAsync();

export default function Ensinais() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'Poppins-Bold': require('../Ensinais-TTC-app/assets/fonts/Poppins-Bold.ttf'),
          'Poppins-Medium': require('../Ensinais-TTC-app/assets/fonts/Poppins-Medium.ttf'),
          'Poppins-ExtraBold': require('../Ensinais-TTC-app/assets/fonts/Poppins-ExtraBold.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null; 
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Routes />
    </View>
  );
}
