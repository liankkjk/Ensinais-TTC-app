import React, { useState, useCallback } from "react";
import { View, Text, Image, SafeAreaView, TouchableOpacity, ScrollView, Alert } from "react-native";
import { DrawerActions, useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from "../styles/stylePerfil";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import { useAuth } from "../routes/authcontext";

const Profile = ({ navigation, route }: any) => {
  const [nome, setNome] = useState("Jonathan");
  const [fotoPerfil, setFotoPerfil] = useState<string | null>(null);
  const [exp, setExp] = useState(0);
  const [nivel, setNivel] = useState(1);

  const { user } = useAuth();
  const db = getFirestore();

  useFocusEffect(
    useCallback(() => {
      const fetchUserData = async () => {
        if (!user) return;
  
        try {
          const userRef = doc(db, "usuarios", user.uid);
          const userDoc = await getDoc(userRef);
  
          if (userDoc.exists()) {
            const userData = userDoc.data();
  
            let expAtual = userData.exp || 0;
            let nivelAtual = userData.nivel || 1;
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
  
            setNome(userData.nickname || "Sem Nome");
            setFotoPerfil(userData.avatarUrl || null);
            setExp(expAtual);
            setNivel(nivelAtual);
          }
        } catch (error) {
          console.error("Erro ao buscar dados do usuário:", error);
        }
      };
  
      fetchUserData();
    }, [user])
  );  

  useFocusEffect(
    useCallback(() => {
      if (route.params) {
        if (route.params.nomeAtualizado) setNome(route.params.nomeAtualizado);
        if (route.params.fotoAtualizada) setFotoPerfil(route.params.fotoAtualizada);
      }
    }, [route.params])
  );

  const getInfoTrofeuPorNivel = (nivel: number) => {
    if (nivel >= 20) {
      return { imagem: require("../../assets/trofeu_diamante.png"), titulo: "Troféu Diamante" };
    } else if (nivel >= 10) {
      return { imagem: require("../../assets/trofeu_ouro.png"), titulo: "Troféu de Ouro" };
    } else if (nivel >= 5) {
      return { imagem: require("../../assets/trofeu_prata.png"), titulo: "Troféu de Prata" };
    } else if (nivel >= 1) {
      return { imagem: require("../../assets/trofeu_bronze.png"), titulo: "Troféu de Bronze" };
    }
  };

  const trofeu = getInfoTrofeuPorNivel(nivel);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          style={styles.menuIcon}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <Ionicons name="menu" size={80} color="white" />
        </TouchableOpacity>

        <View style={styles.headerImageContainer}>
          <Image
            source={require("../../assets/fundo-perfil.jpg")}
            resizeMode="cover"
            style={styles.headerImage}
          />
        </View>

        <View style={styles.profileContainer}>
          <Image
            source={fotoPerfil ? { uri: fotoPerfil } : require("../../assets/user.jpg")}
            resizeMode="contain"
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>{nome}</Text>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate("EditarPerfil", {
                nome,
                fotoPerfil,
              })
            }
          >
            <Text style={styles.editButtonText}>Editar Perfil</Text>
          </TouchableOpacity>

          <View style={styles.expContainer}>
            <View style={styles.expBarBackground}>
              <View style={[styles.expBarFill, { width: `${(exp / 200) * 100}%` }]} />
              <Text style={styles.expText}>{exp} EXP / 200 EXP</Text>
            </View>
          </View>

          <View style={styles.level}>
            <Text style={styles.levelText}>Level {nivel}</Text>
          </View>

          <LinearGradient
  colors={['#FFD700', '#FFA500']}
  style={styles.conq}
>
  <Image
    source={getInfoTrofeuPorNivel(nivel).imagem}
    resizeMode="contain"
    style={styles.conqImage}
  />
  <View style={styles.conqText}>
    <Text style={styles.conqNome}>
      {nivel < 5 ? 'Troféu de Bronze' :
       nivel < 10 ? 'Troféu de Prata' :
       nivel < 20 ? 'Troféu de Ouro' : 'Troféu de Diamante'}
    </Text>
    <Text style={styles.conqDescription}>
      {nivel < 5 ? 'Você começou sua jornada!' :
       nivel < 10 ? 'Você está evoluindo bem!' :
       nivel < 20 ? 'Você é um verdadeiro guerreiro!' :
       'Você alcançou a elite!'}
    </Text>
  </View>
</LinearGradient>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
