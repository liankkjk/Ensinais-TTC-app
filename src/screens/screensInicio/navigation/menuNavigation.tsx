import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Modal, Animated, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { doc, getDoc, setDoc } from 'firebase/firestore'; 
import { FIREBASE_DB, FIREBASE_AUTH } from '../../../../FireBaseConfig';
import styles from '../../../styles/styleInicio';

export default function Menu({ navigation }) {
  const [exp, setExp] = useState(0);
  const [nivel, setNivel] = useState(0);

  useEffect(() => {
    const fetchUserData = async () => {
      const userRef = doc(FIREBASE_DB, 'usuarios', FIREBASE_AUTH.currentUser?.uid || '');
      const userSnap = await getDoc(userRef);
      
      if (userSnap.exists()) {
        const userData = userSnap.data();
        setExp(userData?.exp || 0);
        setNivel(userData?.nivel || 0);
      }
    };

    fetchUserData();
  }, []);

  const cards = [
    ['Saudações', 'Animais'],
    ['Comidas', 'Profissões'],
    ['Estudo', 'Transporte']
  ];

  const imagensPorTema = {
    Saudações: require('../../../../assets/aperto-de-mao.png'),
    Animais: require('../../../../assets/animais.png'),
    Comidas: require('../../../../assets/comidas.png'),
    Profissões: require('../../../../assets/profissoes.png'),
    Estudo: require('../../../../assets/educacao.png'),
    Transporte: require('../../../../assets/transporte.png'),
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.expContainer}>
          <View style={styles.expBarBackground}>
            <View style={[styles.expBarFill, { width: `${(exp / 200) * 100}%` }]} />
            <Text style={styles.expText}>{exp} EXP / 200 EXP</Text>
          </View>
          <TouchableOpacity style={styles.trofeuButton}>
            <Text style={styles.trofeuText}>Troféu</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.level}>
          <Text style={styles.levelText}>Level {nivel}</Text>
        </View>

        <ScrollView contentContainerStyle={{ paddingBottom: 110 }} showsVerticalScrollIndicator={false}>
          {cards.map((linha, index) => (
            <View style={styles.row} key={index}>
              {linha.map((item, i) => (
                <TouchableOpacity key={i} style={styles.card} onPress={() => navigation.navigate(`${item}Screen`)}>
                  <Image style={styles.icon} source={imagensPorTema[item]} />
                  <Text style={styles.cardText}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}