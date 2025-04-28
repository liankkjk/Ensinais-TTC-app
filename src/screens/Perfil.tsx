import React, { useState, useEffect, useContext, useCallback } from "react";
import { View, Text, Image, SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
import { DrawerActions, useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles from "../styles/stylePerfil";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useAuth } from "../routes/authcontext";

const Profile = ({ navigation, route }: any) => {
  const [nome, setNome] = useState("Jonathan");
  const [fotoPerfil, setFotoPerfil] = useState(null);
  const [exp, setExp] = useState(0);
  const [nivel, setNivel] = useState(1);

  const { user } = useAuth();
  const db = getFirestore();

  useEffect(() => {
    if (route.params) {
      if (route.params.nomeAtualizado) setNome(route.params.nomeAtualizado);
      if (route.params.fotoAtualizada) setFotoPerfil(route.params.fotoAtualizada);
    }
  }, [route.params]);

  useFocusEffect(
    useCallback(() => {
      const fetchUserData = async () => {
        if (!user) return;
  
        try {
          const userDoc = await getDoc(doc(db, "usuarios", user.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            
            const userExp = userData.exp || 0;
            const userNivel = userData.nivel || 1;
            const userNickname = userData.nickname || "Sem Nome"; 
  
            setExp(userExp);
            setNivel(userNivel);
            setNome(userNickname);
          }
        } catch (error) {
          console.error("Erro ao buscar dados do usuário:", error);
        }
      };
  
      fetchUserData();
    }, [user])
  );
  
  
  

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
            onPress={() => navigation.navigate("EditarPerfil", {
              nome,
              fotoPerfil,
            })}
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

          <View style={styles.conq}>
            <Text style={styles.conqText}>Conquista atual:</Text>
          </View>

          <Image
            source={require("../../assets/user.jpg")}
            resizeMode="contain"
            style={styles.conqImage}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;