import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Telas from './screensInicio';

type RootStackParamList = {
  Menu: undefined;
  SaudaçõesScreen: undefined;
  AnimaisScreen: undefined;
  ComidasScreen: undefined;
  ProfissõesScreen: undefined;
  EstudoScreen: undefined;
  TransporteScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Inicio() {
  return (
    <SafeAreaProvider>
        <Stack.Navigator initialRouteName="Menu">
          <Stack.Screen name="Menu" options={{ headerShown: false }} component={Telas.Menu} />
          <Stack.Screen name="SaudaçõesScreen" options={{ headerShown: false }} component={Telas.SaudaçõesScreen} />
          <Stack.Screen name="AnimaisScreen" options={{ headerShown: false }} component={Telas.AnimaisScreen} />
          <Stack.Screen name="ComidasScreen" options={{ headerShown: false }} component={Telas.ComidasScreen} />
          <Stack.Screen name="ProfissõesScreen" options={{ headerShown: false }} component={Telas.ProfissõesScreen} />
          <Stack.Screen name="EstudoScreen" options={{ headerShown: false }} component={Telas.EstudoScreen} />
          <Stack.Screen name="TransporteScreen" options={{ headerShown: false }} component={Telas.TransporteScreen}/>
        </Stack.Navigator>
    </SafeAreaProvider>
  );
}