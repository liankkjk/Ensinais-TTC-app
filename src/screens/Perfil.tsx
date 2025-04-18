import React from "react";
import { View, Text, StatusBar, Image, SafeAreaView, TouchableOpacity } from "react-native";
import { DrawerActions } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles from "../styles/stylePerfil";

const Profile = ({ navigation }: any) => {
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
          source={require("../../assets/user.jpg")}
          resizeMode="contain"
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Jonathan</Text> {/* aqui tem que puxar o username que o usuário escolheu no cadastro (firestore) */}

        <View style={styles.expContainer}>
        <View style={styles.expBarBackground}>
          <View style={styles.expBarFill} />
          <Text style={styles.expText}>80 EXP / 200 EXP</Text>  {/* aqui tem que puxar os dados do firestore (trocar esse 80 exp / 200 exp) */}
        </View>
        </View> 

        <View style={styles.level}>
          <Text style={styles.levelText}>Level 20</Text> {/* puxar o lvl do usuário no firestore tbm :( */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;