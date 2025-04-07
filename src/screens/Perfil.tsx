import React from "react";
import { View, Text, Button, StyleSheet, SafeAreaView, StatusBar, Image } from "react-native";
import { Icon } from "react-native-paper";

const Profile = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      
      <Text style={styles.title}>Usuário</Text>
      <Button title="" onPress={() => navigation.openDrawer()} />
      
      <StatusBar backgroundColor= "#32CD32" />

      <View style={{ width: "100%"}}>

        <Image
        source={require("assets/fundo-perfil.jpg")}
        resizeMode='cover'
        style={{ width: "100%", height: 228 }}
        />

      </View>

      <View style={{ flex: 1, alignItems: "center"}}>

        <Image
        source={require("assets/user-perfil.png")}
        resizeMode='contain'
        style={{ width: 155, height: 155, borderRadius: 999, borderColor: "#000080", borderWidth: 2, marginTop: -90 }}
        />
        <Text>Jonathan</Text>
      </View>
      
      
    </SafeAreaView>
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
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: "#000000",
    marginVertical: 8,
  }
});

export default Profile;
