import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Telas from './screensInicio';
import { SafeAreaView, View, ScrollView, Modal } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

// Fontes personalizadas
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync(); // mantém a splash até fontes carregarem

type RootStackParamList = {
  Menu: undefined;
  RelacoesScreen: undefined;
  AnimaisScreen: undefined;
  ComidasScreen: undefined;
  ProfissoesScreen: undefined;
  EstudoScreen: undefined;
  TransporteScreen: undefined;
  JogoScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Inicio() {
  const [fontsLoaded] = useFonts({
    'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),

  });

  if (!fontsLoaded) return null;
  SplashScreen.hideAsync(); // esconde splash quando fontes carregam

  return (
    <SafeAreaProvider>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" options={{ headerShown: false }} component={Telas.Menu} />
        <Stack.Screen name="RelaçõesScreen" options={{ headerShown: false }} component={Telas.RelaçõesScreen} />
        <Stack.Screen name="AnimaisScreen" options={{ headerShown: false }} component={Telas.AnimaisScreen} />
        <Stack.Screen name="ComidasScreen" options={{ headerShown: false }} component={Telas.ComidasScreen} />
        <Stack.Screen name="ProfissõesScreen" options={{ headerShown: false }} component={Telas.ProfissõesScreen} />
        <Stack.Screen name="EstudoScreen" options={{ headerShown: false }} component={Telas.EstudoScreen} />
        <Stack.Screen name="TransporteScreen" options={{ headerShown: false }} component={Telas.TransporteScreen} />
        <Stack.Screen name="JogoScreen" component={JogoScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
}

function JogoScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ paddingBottom: 110 }} showsVerticalScrollIndicator={false}>
        </ScrollView>
        <Modal animationType="none" transparent={true}>
        </Modal>
      </View>
    </SafeAreaView>
  );
}
