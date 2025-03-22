import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Profile = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Perfil</Text>

      {/* Botão para abrir o menu Drawer */}
      <Button title="Abrir Menu" onPress={() => navigation.openDrawer()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Profile;
