import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/Routes';

export default function Ensinais() {
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );
}