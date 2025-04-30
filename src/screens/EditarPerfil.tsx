import React, { useState, useEffect } from 'react';
import { SafeAreaView, TextInput, Image, TouchableOpacity, Alert, Dimensions, Text, KeyboardAvoidingView, Platform } from 'react-native';
import styles from '../styles/styleEditarperfil';
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useAuth } from "../routes/authcontext";
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');
const fontSizeBase = width * 0.05;

const EditarPerfil = ({ navigation }: any) => {
  const [nome, setNome] = useState('Jonathan');
  const [foto, setFoto] = useState<string | null>(null);
  const { user } = useAuth();
  const db = getFirestore();
  const storage = getStorage();

  useEffect(() => {
    const fetchUserData = async () => {
      if (!user) return;
      try {
        const userDoc = await getDoc(doc(db, 'usuarios', user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setNome(userData.nickname || 'Jonathan');
          setFoto(userData.avatarUrl || null);
        }
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
      }
    };

    fetchUserData();
  }, [user]);

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

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setFoto(result.assets[0].uri);
    }
  };

  const salvar = async () => {
    if (!user) return;

    try {
      let fotoUrl: string | null = foto;

      // Verifica se existe foto e se a URI não é uma URL remota
      if (foto && !foto.startsWith('https://')) {
        const response = await fetch(foto); // Pega a imagem da URI
        const blob = await response.blob(); // Converte a imagem para blob

        const fotoRef = ref(storage, `usuarios/${user.uid}/fotoPerfil.jpg`); // Referência no Firebase Storage
        const snapshot = await uploadBytes(fotoRef, blob); // Faz o upload do blob
        fotoUrl = await getDownloadURL(snapshot.ref); // Obtém a URL da imagem
      }

      // Atualiza o Firestore com nome e URL da foto
      const userRef = doc(db, 'usuarios', user.uid);
      await updateDoc(userRef, {
        nickname: nome,
        avatarUrl: fotoUrl,
      });

      Alert.alert('Sucesso', 'Perfil atualizado!');
      navigation.navigate('Perfil', {
        nomeAtualizado: nome,
        fotoAtualizada: fotoUrl,
      });
    } catch (error) {
      console.error('Erro ao salvar alterações:', error);
      Alert.alert('Erro', 'Não foi possível salvar as alterações.');
    }
  };

  return (
    <LinearGradient colors={['#F27127', '#f6fafd']} style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <SafeAreaView style={styles.container}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons name="arrow-left" size={24} color="#333" />
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
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default EditarPerfil;
