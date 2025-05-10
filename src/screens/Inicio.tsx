import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Telas from './screensInicio';
import { SafeAreaView, View, ScrollView, Modal, Text } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

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

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <Stack.Navigator
        initialRouteName="Menu"
        screenOptions={{
          headerTitleStyle: {
            fontFamily: 'Poppins-Bold',
            fontSize: 20,
          },
        }}
      >
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
          <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 16 }}>Conteúdo do jogo aqui</Text>
        </ScrollView>
        <Modal animationType="none" transparent={true}>
          <View>
            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 16 }}>Texto do Modal</Text>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}