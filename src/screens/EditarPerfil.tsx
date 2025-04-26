import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Image, TouchableOpacity, Alert, Dimensions } from 'react-native';
import styles from '../styles/styleEditarperfil';
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');
const fontSizeBase = width * 0.05;

const EditarPerfil = ({ navigation, route }: any) => {
  const dadosIniciais = route.params || {
    nome: 'Jonathan',
    fotoPerfil: null,
  };

  const [nome, setNome] = useState(dadosIniciais.nome);
  const [foto, setFoto] = useState(dadosIniciais.fotoPerfil);

  const escolherFoto = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      alert('Permissão negada para acessar a galeria!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setFoto(result.assets[0].uri);
    }
  };

  const salvar = () => {
    Alert.alert('Sucesso', 'Perfil atualizado!');
    navigation.navigate('Perfil', {
      nomeAtualizado: nome,
      fotoAtualizada: foto,
    });
  };

  return (
    <LinearGradient
      colors={['#F27127', '#f6fafd']}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <MaterialCommunityIcons 
            name="arrow-left" 
            size={24} 
            color="#333" 
          />
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>

        <Text style={styles.titulo}>Editar Perfil</Text>

        <TouchableOpacity onPress={escolherFoto}>
          <Image
            source={foto ? { uri: foto } : require('../../assets/user.jpg')}
            style={styles.imagemPerfil}
          />
          <Text style={styles.trocarFoto}>Editar Foto</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}
        />

        <TouchableOpacity style={styles.botao} onPress={salvar}>
          <Text style={styles.botaoTexto}>Salvar</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default EditarPerfil;