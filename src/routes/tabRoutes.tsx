import React from 'react';
import { TouchableOpacity, Dimensions, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { LinearGradient } from 'expo-linear-gradient';
import 'react-native-reanimated';
import 'react-native-gesture-handler';
import * as Telas from '../screens';
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
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 15, marginBottom: 10 }}>Configurações</Text>
      <DrawerItem label="Editar Perfil" onPress={() => props.navigation.navigate("EditarPerfil")} />
      <DrawerItem label="Alterar Senha" onPress={() => console.log("Alterar senha")} />
      <DrawerItem label="Sair" onPress={handleLogout} />
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
          borderRadius: 40,
          backgroundColor: 'transparent',
        },
        tabBarIconStyle: { 
          marginBottom: 2,
          width: width * 0.20,
          height: width * 0.20,
        },
        tabBarShowLabel: false,
        tabBarBackground: () => (
          <LinearGradient
            colors={['#f2921d', '#d94929']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              top: 0,
              borderRadius: 40,
            }}
          />
        ),
      }}
    >
      <Tab.Screen 
        name="Sinalário" 
        component={Telas.Sinalario}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: '#FFF',
                borderRadius: 50, 
                width: width * 0.22, 
                height: width * 0.22,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  backgroundColor: focused ? '#f2921d' : '#FFF',
                  borderRadius: 50,
                  width: width * 0.20,
                  height: width * 0.20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image
                  source={
                    focused
                      ? require('../../assets/icons/Sinalário.png')
                      : require('../../assets/icons/Sinalário.png')
                  }
                  style={{
                    width: width * 0.1,
                    height: width * 0.1,
                    resizeMode: 'contain',
                  }}
                />
              </View>
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
                backgroundColor: '#fff',
                borderRadius: 50,
                width: width * 0.22,
                height: width * 0.22,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  backgroundColor: focused ? '#f2921d' : '#FFF',
                  borderRadius: 50,
                  width: width * 0.20,
                  height: width * 0.20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image
                  source={
                    focused
                      ? require('../../assets/icons/Início.png')
                      : require('../../assets/icons/Início.png')
                  }
                  style={{
                    width: width * 0.1,
                    height: width * 0.1,
                    resizeMode: 'contain',
                  }}
                />
              </View>
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
                backgroundColor: '#FFF',
                borderRadius: 50,
                width: width * 0.22,
                height: width * 0.22,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  backgroundColor: focused ? '#f2921d' : '#FFF',
                  borderRadius: 50,
                  width: width * 0.20,
                  height: width * 0.20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image
                  source={
                    focused
                      ? require('../../assets/icons/Perfil.png')
                      : require('../../assets/icons/Perfil.png')
                  }
                  style={{
                    width: width * 0.1,
                    height: width * 0.1,
                    resizeMode: 'contain',
                  }}
                />
              </View>
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