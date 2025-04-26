import React, { useState, useEffect } from "react";
import { View, Text, Image, SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
import { DrawerActions } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles from "../styles/stylePerfil";

const Profile = ({ navigation, route }: any) => {
  const [nome, setNome] = useState("Jonathan");
  const [fotoPerfil, setFotoPerfil] = useState(null);

  useEffect(() => {
    if (route.params) {
      if (route.params.nomeAtualizado) setNome(route.params.nomeAtualizado);
      if (route.params.fotoAtualizada) setFotoPerfil(route.params.fotoAtualizada);
    }
  }, [route.params]);

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
              <View style={styles.expBarFill} />
              <Text style={styles.expText}>80 EXP / 200 EXP</Text>
            </View>
          </View>

          <View style={styles.level}>
            <Text style={styles.levelText}>Level 20</Text>
          </View>

          <View style={styles.conq}>
            <Text style={styles.conqText}>Consquista atual:</Text>
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