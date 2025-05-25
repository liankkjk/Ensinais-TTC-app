import React, { useEffect, useState, useRef } from 'react';
import { View, Text, FlatList, Image, Animated, TouchableOpacity } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { FIREBASE_DB } from '../../FireBaseConfig';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';
import styles from '../styles/styleRanking';

const Ranking = ({ navigation }: any) => {
  const [players, setPlayers] = useState<any[]>([]);
  const [fontsLoaded] = Font.useFonts({
    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
  });
  const shineAnim = useRef(new Animated.Value(1)).current;

  useFocusEffect(
    React.useCallback(() => {
      const fetchPlayers = async () => {
        try {
          const q = query(
            collection(FIREBASE_DB, 'usuarios'),
            orderBy('nivel', 'desc'),
            limit(6)
          );

          const snapshot = await getDocs(q);
          const playersList = snapshot.docs.map(doc => {
            const data = doc.data();
            return data;
          });
          setPlayers(playersList);
        } catch (error) {
        }
      };

      fetchPlayers();
    }, [])
  );

  useEffect(() => {
    Animated.loop(
      Animated.sequence([ 
        Animated.timing(shineAnim, {
          toValue: 0.6,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(shineAnim, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [shineAnim]);

  const getMedalIcon = (index: number) => {
    const medals = ['trophy', 'trophy', 'trophy'];
    const colors = ['#FFD700', '#C0C0C0', '#CD7F32'];

    if (index < 3) {
      return (
        <Animated.View
          style={{
            opacity: shineAnim,
          }}
        >
          <Icon
            name={medals[index]}
            size={24}
            color={colors[index]}
            style={styles.medalIcon}
          />
        </Animated.View>
      );
    }
    return <Text style={styles.rank}>#{index + 1}</Text>;
  };

  if (!fontsLoaded) {
    return <Text>Carregando fontes...</Text>; 
  }

  return (
    <LinearGradient
      colors={['#F27127', '#f6fafd']} 
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#fff" />
          <Text style={[styles.backText, { fontFamily: 'Poppins-Medium' }]}>Voltar</Text>
        </TouchableOpacity>

        <Text style={[styles.title, { fontFamily: 'Poppins-Bold' }]}>Top 6</Text>
        <FlatList
          data={players}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={styles.listContent}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.playerRow}>
                {getMedalIcon(index)}
                <Image source={{ uri: item.avatarUrl }} style={styles.profilePic} />
                <View style={styles.playerInfo}>
                  <Text style={[styles.nickname, { fontFamily: 'Poppins-Medium' }]}>{item.nickname}</Text>
                  <Text style={[styles.level, { fontFamily: 'Poppins-Medium' }]}>Level {item.nivel}</Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    </LinearGradient>
  );
};

export default Ranking;