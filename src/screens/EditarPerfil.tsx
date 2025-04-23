import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import styles from '../styles/styleEditarperfil';
import * as ImagePicker from 'expo-image-picker';

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
    <View style={styles.container}>
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

      
    </View>
  );
};


export default EditarPerfil;
