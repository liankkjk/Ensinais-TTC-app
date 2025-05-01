import React, { useState, useRef, useCallback } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Modal, Animated, SafeAreaView, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'; 
import { FIREBASE_DB, FIREBASE_AUTH } from '../../../../FireBaseConfig';
import styles from '../../../styles/styleInicio';

export default function Menu({ navigation }) {
  const [exp, setExp] = useState(0);
  const [nivel, setNivel] = useState(0);

  useFocusEffect(
    useCallback(() => {
      const fetchUserData = async () => {
        const uid = FIREBASE_AUTH.currentUser?.uid;
        if (!uid) return;
  
        const userRef = doc(FIREBASE_DB, 'usuarios', uid);
        const userSnap = await getDoc(userRef);
  
        if (userSnap.exists()) {
          const userData = userSnap.data();
          let expAtual = userData?.exp || 0;
          let nivelAtual = userData?.nivel || 0;
          let subiuNivel = false;
  
          while (expAtual >= 200) {
            expAtual -= 200;
            nivelAtual += 1;
            subiuNivel = true;
          }
  
          if (subiuNivel) {
            await updateDoc(userRef, {
              exp: expAtual,
              nivel: nivelAtual,
            });
  
            Alert.alert("Parabéns!", `Você chegou ao level: ${nivelAtual}`);
          }
  
          setExp(expAtual);
          setNivel(nivelAtual);
        }
      };
  
      fetchUserData();
    }, [])
  );  

  const getInfoTrofeuPorNivel = (nivel) => {
    if (nivel >= 20) {
      return { imagem: require('../../../../assets/trofeu_diamante.png'), titulo: 'Troféu Diamante', descricao: 'Você alcançou a elite!' };
    } else if (nivel >= 10) {
      return { imagem: require('../../../../assets/trofeu_ouro.png'), titulo: 'Troféu de Ouro', descricao: 'Você é um verdadeiro guerreiro!' };
    } else if (nivel >= 5) {
      return { imagem: require('../../../../assets/trofeu_prata.png'), titulo: 'Troféu de Prata', descricao: 'Você está evoluindo bem!' };
    } else {
      return { imagem: require('../../../../assets/trofeu_bronze.png'), titulo: 'Troféu de Bronze', descricao: 'Você começou sua jornada!' };
    }
  };

  const trofeu = getInfoTrofeuPorNivel(nivel);

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
          <View style={styles.trofeuIcon}>{trofeu && (
            <Image
              source={trofeu.imagem}
              resizeMode="contain"
              style={{ width: 60, height: 60, marginLeft: 4 }}
            />
          )}
          </View>
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