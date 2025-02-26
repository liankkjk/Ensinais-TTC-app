import React from 'react';
import { TouchableOpacity, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Perfil from '../screens/Perfil';
import Sinalario from '../screens/Sinalario';
import Inicio from '../screens/Inicio';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const { width } = Dimensions.get('window');

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
       animation: 'fade',

       tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          marginLeft: 12,
          marginRight: 10,
          elevation: 0,
          height: width * 0.28,
          paddingBottom: width * 0.03,
          paddingTop: 10,
          paddingLeft: 10,
          paddingRight: 10,
          backgroundColor: '#121212',
          borderRadius: 20,
       },

      tabBarIconStyle: { 
        marginBottom: 2,
        width: width * 0.20,
        height: width * 0.20,
      },
     
      tabBarInactiveBackgroundColor: '#5f4ff3', //a cor de fundo do icon quando não estiver focado

      tabBarActiveBackgroundColor: '#2145f1',
      }}
    >
      <Tab.Screen 
      name="Sinalário" 
      component={Sinalario} 
      options={{
        tabBarIcon: ({ focused }) => (
          <Icon name="book-alphabet" size={focused ? width * 0.20 : width * 0.18} color='#ffffff'/>
        ),
        tabBarButton: (props) => <TouchableOpacity activeOpacity={1} {...props}/>, //isso tira o efeito de click do botão
        headerShown: false,
        tabBarShowLabel: false,
      }}
      />

      <Tab.Screen 
      name="Inicio" 
      component={Inicio} 
      options={{
        tabBarIcon: ({ focused }) => (
          <Icon name="home" size={focused ? width * 0.20 : width * 0.18} color='#ffffff' />
        ),
        tabBarButton: (props) => <TouchableOpacity activeOpacity={1} {...props}/>, //isso tira o efeito de click do botão
        headerShown: false,
        tabBarShowLabel: false,
      }}
      />
      
      <Tab.Screen 
      name="Perfil" 
      component={Perfil}
      options={{
        tabBarIcon: ({ focused }) => (
          <Icon name="account" size={focused ? width * 0.20 : width * 0.18} color='#ffffff' />
        ),
        tabBarButton: (props) => <TouchableOpacity activeOpacity={1} {...props}/>, //isso tira o efeito de click do botão
        headerShown: false,
        tabBarShowLabel: false,
      }} 
      />
    </Tab.Navigator>
  )
}