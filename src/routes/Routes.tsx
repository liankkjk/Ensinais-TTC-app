import React from 'react';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Perfil from '../screens/Perfil';
import Sinalario from '../screens/Sinalario';
import Inicio from '../screens/Inicio';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
       animation: 'fade',

       tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          marginLeft: 12,
          elevation: 0,
          width: 370,
          paddingBottom: 15,
          paddingTop: 10,
          paddingLeft: 10,
          backgroundColor: '#121212',
          borderRadius: 20, 
          height: 100,
       },

       tabBarLabelPosition: 'below-icon',

       tabBarLabelStyle: {
        fontSize: 18,
        fontFamily: 'Georgia',
        fontWeight: 'bold',
      },

      tabBarIconStyle: { 
        marginBottom: 2,
        width: 45,
        height: 45,
      },

      tabBarInactiveTintColor: '#fffff5', //a cor da label quando estiver inativo (não-focado)
     
      tabBarActiveTintColor: '#707807', //a cor da label quando o tab's for pressionado (focado)

      tabBarInactiveBackgroundColor: '#5f4ff3', //a cor de fundo do icon quando não estiver focado

      tabBarActiveBackgroundColor: '#2145f1',
      }}
    >
      <Tab.Screen 
      name="Sinalário" 
      component={Sinalario} 
      options={{
        tabBarIcon: ({ focused }) => (
          <Icon name="book-alphabet" size={focused ? 45 : 35} color='#ffffff' />
        ),
        tabBarButton: (props) => <TouchableOpacity activeOpacity={1} {...props}/>, //isso tira o efeito de click do botão
        headerShown: false,
      }}
      />

      <Tab.Screen 
      name="Inicio" 
      component={Inicio} 
      options={{
        tabBarIcon: ({ focused }) => (
          <Icon name="home" size={focused ? 45 : 35} color='#ffffff' />
        ),
        tabBarButton: (props) => <TouchableOpacity activeOpacity={1} {...props}/>, //isso tira o efeito de click do botão
        headerShown: false,
      }}
      />
      
      <Tab.Screen 
      name="Perfil" 
      component={Perfil}
      options={{
        tabBarIcon: ({ focused }) => (
          <Icon name="account" size={focused ? 45 : 35} color='#ffffff' />
        ),
        tabBarButton: (props) => <TouchableOpacity activeOpacity={1} {...props}/>, //isso tira o efeito de click do botão
        headerShown: false,
      }} 
      />
    </Tab.Navigator>
  )
}