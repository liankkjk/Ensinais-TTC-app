import React from 'react';
import { TouchableOpacity, Dimensions, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import 'react-native-reanimated';
import 'react-native-gesture-handler';
import * as Telas from '../screens';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useAuth } from './authcontext'; 
import { FIREBASE_AUTH } from '../../FireBaseConfig';
import { signOut } from 'firebase/auth';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const { width } = Dimensions.get('window');

const DrawerContent = (props: any) => {
  const handleLogout = async () => {
    try {
      await signOut(FIREBASE_AUTH);
      props.navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    } catch (error) {
      console.log('Erro ao sair:', error);
    }
  };
  return (
    <DrawerContentScrollView {...props}>
      <Text style={{fontSize:18, fontWeight:"bold", marginLeft: 15, marginBottom: 10}}>Configurações</Text>

      <DrawerItem
        label="Editar Perfil"
        onPress={() => props.navigation.navigate("EditarPerfil")}
      />

      <DrawerItem
        label="Alterar Senha"
        onPress={() => console.log("Alterar senha")}
      />

      <DrawerItem
        label="Sair"
        onPress={handleLogout}
      />
    </DrawerContentScrollView>
  );
};

const ProfileScreenWithDrawer = () => {
  return (
    <Drawer.Navigator 
      initialRouteName="Perfil" 
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Perfil" component={Telas.Perfil} />
    </Drawer.Navigator>
  );
};

const MainTabs = () => {
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
          backgroundColor: '#000',
          borderRadius: 40,
        },
        tabBarIconStyle: { 
          marginBottom: 2,
          width: width * 0.20,
          height: width * 0.20,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen 
        name="Sinalário" 
        component={Telas.Sinalario}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: focused ? '#2145f1' : '#5f4ff3',
                borderRadius: 50, 
                width: width * 0.22, 
                height: width * 0.22,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Icon
                name="book-alphabet"
                size={focused ? width * 0.18 : width * 0.16}
                color='#ffffff'
              />
            </View>
          ),
          tabBarButton: (props) => <TouchableOpacity activeOpacity={1} {...props} />,
          headerShown: false,
        }}
      />

      <Tab.Screen 
        name="Inicio" 
        component={Telas.Inicio}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: focused ? '#2145f1' : '#5f4ff3',
                borderRadius: 50,
                width: width * 0.22,
                height: width * 0.22,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Icon
                name="home"
                size={focused ? width * 0.18 : width * 0.16}
                color='#ffffff'
              />
            </View>
          ),
          tabBarButton: (props) => <TouchableOpacity activeOpacity={1} {...props} />,
          headerShown: true,
        }}
      />
      
      <Tab.Screen 
        name="Perfil" 
        component={ProfileScreenWithDrawer}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: focused ? '#2145f1' : '#5f4ff3',
                borderRadius: 50,
                width: width * 0.22,
                height: width * 0.22,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Icon
                name="account"
                size={focused ? width * 0.18 : width * 0.16}
                color='#ffffff'
              />
            </View>
          ),
          tabBarButton: (props) => <TouchableOpacity activeOpacity={1} {...props} />,
          headerShown: false,
        }} 
      />
    </Tab.Navigator>
  );
};

const LoginNav = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? 'MainTabs' : 'Login'}>
        <Stack.Screen name="Login" component={Telas.Login} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastrar" component={Telas.Cadastrar} options={{ headerShown: false }} />
        <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LoginNav;