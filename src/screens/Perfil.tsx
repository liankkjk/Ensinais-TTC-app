import React, { useState, useEffect } from "react";
import { View, Text, Image, SafeAreaView, TouchableOpacity } from "react-native";
import { DrawerActions } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles from "../styles/stylePerfil";
import { FIREBASE_AUTH, FIREBASE_DB } from "../../FireBaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { Animated } from "react-native";

const Profile = ({ navigation }: any) => {
  const user = FIREBASE_AUTH.currentUser;
  const [nome, setNome] = useState("Carregando...");
  const [fotoPerfil, setFotoPerfil] = useState(null);
  const [expAtual, setExpAtual] = useState(0);
  const [expMaxima, setExpMaxima] = useState(200);

  useEffect(() => {
    const buscarDadosDoUsuario = async () => {
      if (user) {
        try {
          const docRef = doc(FIREBASE_DB, "usuarios", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const dados = docSnap.data();
            setNome(dados.nome || "Sem nome");
            setFotoPerfil(dados.foto || null);
            setExpAtual(dados.expAtual || 0);
            setExpMaxima(dados.expMaxima || 200);
          } else {
            setNome("Usuário não encontrado");
          }
        } catch (error) {
          console.error("Erro ao buscar dados do perfil:", error);
          setNome("Erro ao carregar");
        }
      }
    };

    buscarDadosDoUsuario();
  }, []);

  const porcentagem = (expAtual / expMaxima) * 100;

  return (
    <SafeAreaView style={styles.container}>
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

        {/* Barra de Experiência */}
        <View style={styles.expContainer}>
          <View style={styles.expBarBackground}>
            <View style={[styles.expBarFill, { width: `${porcentagem}%` }]} />
            <Text style={styles.expText}>{expAtual} EXP / {expMaxima} EXP</Text>
          </View>
        </View>

        <View style={styles.level}>
          <Text style={styles.levelText}>Level {Math.floor(expAtual / 100)}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
