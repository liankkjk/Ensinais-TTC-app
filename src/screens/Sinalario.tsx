import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SinalarioNavigation from './screensSinalario/navigation/SinalarioNavigation';

export default function Sinalario () {
  return(
    <SafeAreaProvider>
      <SinalarioNavigation />
    </SafeAreaProvider>
  )
}