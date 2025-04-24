import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Image, TouchableOpacity, Alert, Dimensions } from 'react-native';
import styles from '../styles/styleEditarperfil';
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { FIREBASE_AUTH, FIREBASE_DB } from '../../FireBaseConfig';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const { width } = Dimensions.get('window');

const EditarPerfil = ({ navigation }: any) => {
  const user = FIREBASE_AUTH.currentUser;
  const [nome, setNome] = useState('');
  const [foto, setFoto] = useState(null);

  // 🔄 Buscar dados existentes do Firestore
  useEffect(() => {
    const carregarPerfil = async () => {
      if (user) {
        const docRef = doc(FIREBASE_DB, 'usuarios', user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const dados = docSnap.data();
          setNome(dados.nome || '');
          setFoto(dados.foto || null);
        }
      }
    };

    carregarPerfil();
  }, []);

  // 🖼️ Escolher nova foto
  const escolherFoto = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      alert('Permissão negada para acessar a galeria!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // corrigido aqui
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setFoto(result.assets[0].uri);
    }
  };

  // 💾 Salvar no Firestore
  const salvar = async () => {
    try {
      if (user) {
        await setDoc(doc(FIREBASE_DB, 'usuarios', user.uid), {
          nome: nome,
          foto: foto,
        });
        Alert.alert('Sucesso', 'Perfil atualizado!');
        navigation.navigate('Perfil', {
          nomeAtualizado: nome,
          fotoAtualizada: foto,
        });
      }
    } catch (e) {
      console.error("Erro ao salvar:", e);
      Alert.alert('Erro', 'Não foi possível salvar o perfil.');
    }
  };

  return (
    <LinearGradient colors={['#f6fafd', '#F27127']} style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#333" />
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>

        <Text style={styles.titulo}>Editar Perfil</Text>

        <TouchableOpacity onPress={escolherFoto}>
          <Image source={foto ? { uri: foto } : require('../../assets/user.jpg')} style={styles.imagemPerfil} />
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
