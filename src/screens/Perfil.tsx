import React from "react";
import { View, Text, StatusBar, Image, SafeAreaView } from "react-native";
import styles from "../styles/stylePerfil";

const Profile = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#32CD32" />

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
        <Text style={styles.profileName}>Jonathan</Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
