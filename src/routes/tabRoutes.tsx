import React, { useEffect, useRef } from 'react';
import { TouchableOpacity, Dimensions, Text, View, Image, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { LinearGradient } from 'expo-linear-gradient';
import 'react-native-reanimated';
import 'react-native-gesture-handler';
import * as Telas from '../screens';
import * as Font from 'expo-font';
import * as TelasSinalario from '../screens/screensSinalario';
import { useAuth } from './authcontext'; 
import { FIREBASE_AUTH } from '../../FireBaseConfig';
import { signOut } from 'firebase/auth';
import styles from '../styles/styleNavigation';
import AlterarSenha from '../screens/AlterarSenha';
import RankingGlobal from '../screens/RankingGlobal';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const PerfilStack = createStackNavigator();
const SinalarioStack = createStackNavigator();

const SinalarioStackScreen = () => {
  return (
    <SinalarioStack.Navigator screenOptions={{ headerShown: false }}>
      <SinalarioStack.Screen name="Sinalario" component={Telas.Sinalario} />
      <SinalarioStack.Screen name="SinaisAlfabetizacao" component={TelasSinalario.SinaisAlfabetizacao} />
      <SinalarioStack.Screen name="SinaisRelacoes" component={TelasSinalario.SinaisRelacoes} />
      <SinalarioStack.Screen name="SinaisNatureza" component={TelasSinalario.SinaisNatureza} />
      <SinalarioStack.Screen name="SinaisComidas" component={TelasSinalario.SinaisComidas} />
      <SinalarioStack.Screen name="SinaisProfissoes" component={TelasSinalario.SinaisProfissoes} />
      <SinalarioStack.Screen name="SinaisTransporte" component={TelasSinalario.SinaisTransporte} />
    </SinalarioStack.Navigator>
  );
};

const PerfilStackScreen = () => {
  return (
    <PerfilStack.Navigator screenOptions={{ headerShown: false }}>
      <PerfilStack.Screen name="PerfilHome" component={Telas.Perfil} />
      <PerfilStack.Screen name="EditarPerfil" component={Telas.EditarPerfil} />
    </PerfilStack.Navigator>
  );
};

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

   const [fontsLoaded] = Font.useFonts({
      'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
      'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
      'Poppins-ExtraBold': require('../../assets/fonts/Poppins-ExtraBold.ttf'),
    });

  return (
      <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1, paddingTop: 80 }}>
        <Text style={[styles.drawerContentTitle, { fontFamily: 'Poppins-ExtraBold' }]}>Configurações</Text>
        <DrawerItem
          label={() => <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 26, color:'#FFA500', marginTop: 26}}>Editar Perfil</Text>}
          onPress={() => props.navigation.navigate("PerfilStack", { screen: "EditarPerfil" })}
        />
        <DrawerItem
          label={() => <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 26, color:'#FFA500', marginTop: 20}}>Alterar Senha</Text>}
          onPress={() => props.navigation.navigate("AlterarSenha")}
        />
        <DrawerItem
          label={() => <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 26, color:'#FFA500', marginTop: 20}}>Ranking Global</Text>}
          onPress={() => props.navigation.navigate("RankingGlobal")}
        />
        <DrawerItem
          label={() => <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 26, color:'#FFA500', marginTop: 20}}>Sair</Text>}
          onPress={handleLogout}
        />
      </DrawerContentScrollView>
  );
};

const ProfileScreenWithDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="PerfilStack"
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="PerfilStack" component={PerfilStackScreen} />
      <Drawer.Screen name="RankingGlobal" component={RankingGlobal} />
    </Drawer.Navigator>
  );
};

const MainTabs = () => {
  const scaleAnim = useRef(new Animated.Value(0)).current;  
  const fadeAnim = useRef(new Animated.Value(0)).current;   

  useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
    
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [scaleAnim, fadeAnim]);

  return (
    <Tab.Navigator
      screenOptions={{
        animation: 'fade',
        tabBarStyle: styles.tabBarStyle,
        tabBarIconStyle: styles.tabBarIconStyle,
        tabBarShowLabel: false,
        tabBarBackground: () => (
          <LinearGradient
            colors={['#f2921d', '#d94929']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.tabBarBackground}
          />
        ),
      }}
    >
      <Tab.Screen 
        name="SinalarioTab" 
        component={SinalarioStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Animated.View style={[styles.iconContainer, { transform: [{ scale: scaleAnim }], opacity: fadeAnim }]}>
              <View style={[styles.iconInnerContainer, { backgroundColor: focused ? '#f2921d' : '#FFF' }]}>
                <Image
                  source={
                    focused
                      ? require('../../assets/icons/SinalárioBranco.png')
                      : require('../../assets/icons/SinalárioLaranja.png')     
                  }
                  style={styles.iconImage}
                />
              </View>
            </Animated.View>
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
            <Animated.View style={[styles.iconContainer, { transform: [{ scale: scaleAnim }], opacity: fadeAnim }]}>
              <View style={[styles.iconInnerContainer, { backgroundColor: focused ? '#f2921d' : '#FFF' }]}>
                <Image
                  source={
                    focused
                      ? require('../../assets/icons/LiçõesBranco.png')
                      : require('../../assets/icons/LiçõesLaranja.png')     
                  }
                  style={styles.iconImage}
                />
              </View>
            </Animated.View>
          ),
          tabBarButton: (props) => <TouchableOpacity activeOpacity={1} {...props} />,
          headerShown: false,
        }}
      />

      <Tab.Screen 
        name="Perfil" 
        component={ProfileScreenWithDrawer}
        options={{
          tabBarIcon: ({ focused }) => (
            <Animated.View style={[styles.iconContainer, { transform: [{ scale: scaleAnim }], opacity: fadeAnim }]}>
              <View style={[styles.iconInnerContainer, { backgroundColor: focused ? '#f2921d' : '#FFF' }]}>
                <Image
                  source={
                    focused
                      ? require('../../assets/icons/UsuárioBranco.png')
                      : require('../../assets/icons/UsuárioLaranja.png')     
                  }
                  style={styles.iconImage}
                />
              </View>
            </Animated.View>
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

  if (loading) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? 'MainTabs' : 'Login'}>
        <Stack.Screen name="Login" component={Telas.Login} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastrar" component={Telas.Cadastrar} options={{ headerShown: false }} />
        <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen name="EditarPerfil" component={Telas.EditarPerfil} />
        <Stack.Screen name="AlterarSenha" component={AlterarSenha} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LoginNav;