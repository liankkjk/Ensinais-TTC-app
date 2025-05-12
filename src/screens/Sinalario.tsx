import React from 'react';
import { SafeAreaView, ScrollView, Text, Pressable, Image, Animated, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import style from '../styles/styleSinalario';
import { useFonts } from 'expo-font';

const { height } = Dimensions.get('window');

const AnimatedButton = ({ icon, label, onPress }) => {
  const scale = new Animated.Value(1);

  const onPressIn = () => {
    Animated.spring(scale, {
      toValue: 1.1,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={{ transform: [{ scale }] }}>
      <Pressable
        style={style.pressable}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onPress={onPress}
      >
        <MaterialCommunityIcons name={icon} size={40} style={style.pressableIcon} />
        <Text style={[style.pressableText, { fontFamily: 'Poppins-Medium' }]}>{label}</Text>
      </Pressable>
    </Animated.View>
  );
};

export default function SinalarioMenu({ navigation }) {
  const [fontsLoaded] = useFonts({
    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Carregando fontes...</Text>;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={style.view}
        contentContainerStyle={{ paddingBottom: height * 0.30 }}
      >
        <Text style={[style.tituloSina, { fontFamily: 'Poppins-Bold' }]}>Com dúvidas?</Text>
        <Text style={[style.tituloSinaSub, { fontFamily: 'Poppins-Medium' }]}>Consulte no sinalário!</Text>

        <Image
          source={require('../../assets/icons/IconSetaInicial.png')}
          style={style.imgSeta}
        />

        <AnimatedButton
          icon="alphabetical-variant"
          label="Alfabetização"
          onPress={() => navigation.navigate('SinalarioTab', { screen: 'SinaisAlfabetizacao' })}
        />

        <AnimatedButton
          icon="account-group"
          label="Relações"
          onPress={() => navigation.navigate('SinalarioTab', { screen: 'SinaisRelacoes' })}
        />

        <AnimatedButton
          icon="leaf"
          label="Natureza"
          onPress={() => navigation.navigate('SinalarioTab', { screen: 'SinaisNatureza' })}
        />

        <AnimatedButton
          icon="food-apple"
          label="Comidas"
          onPress={() => navigation.navigate('SinalarioTab', { screen: 'SinaisComidas' })}
        />

        <AnimatedButton
          icon="briefcase-variant"
          label="Profissões"
          onPress={() => navigation.navigate('SinalarioTab', { screen: 'SinaisProfissoes' })}
        />

        <AnimatedButton
          icon="train-car"
          label="Transporte"
          onPress={() => navigation.navigate('SinalarioTab', { screen: 'SinaisTransporte' })}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
