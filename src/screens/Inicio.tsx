import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Telas from './screensInicio';
import { SafeAreaView, View, Text, TouchableOpacity, Modal, Animated, ScrollView, Image } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

type RootStackParamList = {
  Menu: undefined;
  SaudaçõesScreen: undefined;
  AnimaisScreen: undefined;
  ComidasScreen: undefined;
  ProfissõesScreen: undefined;
  EstudoScreen: undefined;
  TransporteScreen: undefined;
  // Adicionar nova tela, caso necessário
  JogoScreen: undefined;
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
        <Stack.Screen name="TransporteScreen" options={{ headerShown: false }} component={Telas.TransporteScreen} />
        {/* Adicionando a nova tela de Jogo */}
        <Stack.Screen name="JogoScreen" component={JogoScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
}

// Aqui vai o código da tela de jogo, caso seja necessária uma tela com interatividade
function JogoScreen() {
  // Definições e componentes específicos para a tela do jogo
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {/* Conteúdo da tela, como EXP, botões e animações */}
        <ScrollView contentContainerStyle={{ paddingBottom: 110 }} showsVerticalScrollIndicator={false}>
          {/* Mapeamento e renderização dos cards */}
        </ScrollView>

        {/* Modal para exibir questões ou resultados */}
        <Modal animationType="none" transparent={true}>
          {/* Modal de interação */}
        </Modal>
      </View>
    </SafeAreaView>
  );
}
