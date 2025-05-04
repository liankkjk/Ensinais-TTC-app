import React, { useState, useEffect } from 'react';
import { SafeAreaView, TextInput, Image, TouchableOpacity, Alert, Dimensions, Text, KeyboardAvoidingView, Platform } from 'react-native';
import styles from '../styles/styleEditarperfil';
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useAuth } from "../routes/authcontext";
import { LinearGradient } from 'expo-linear-gradient';
import CadAlertEdit from '../../components/alertCompEditPerfil';

const { width } = Dimensions.get('window');
const fontSizeBase = width * 0.05;

const EditarPerfil = ({ navigation }: any) => {
  const [nome, setNome] = useState('Jonathan');
  const [foto, setFoto] = useState<string | null>(null);
  const { user } = useAuth();
  const db = getFirestore();
  const storage = getStorage();
  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState('');

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

      if (foto && !foto.startsWith('https://')) {
        const response = await fetch(foto);
        const blob = await response.blob();

        const fotoRef = ref(storage, `usuarios/${user.uid}/fotoPerfil.jpg`);
        const snapshot = await uploadBytes(fotoRef, blob);
        fotoUrl = await getDownloadURL(snapshot.ref);
      }

      const userRef = doc(db, 'usuarios', user.uid);
      await updateDoc(userRef, {
        nickname: nome,
        avatarUrl: fotoUrl,
      });

      setModalVisible(true);
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
            <MaterialCommunityIcons name="arrow-left" size={24} color="#fff" />
            <Text style={styles.backText}>Voltar</Text>
          </TouchableOpacity>

          <Text style={styles.titulo}>Editar Perfil</Text>

          <TouchableOpacity onPress={escolherFoto}>
            <Image
              source={foto ? { uri: foto } : require('../../assets/JonathanPerfil.png')}
              style={styles.imagemPerfil}
            />
            <Text style={styles.trocarFoto}>Editar Foto</Text>
          </TouchableOpacity>

          <TextInput
            style={styles.input}
            placeholder="Digite seu nickname"
            value={nome}
            onChangeText={(text) => {
              if (text.length <= 20) setNome(text);
            }}
          />

          {error && <Text style={{ color: 'red', fontSize: fontSizeBase * 0.9 }}>{error}</Text>}

          <TouchableOpacity
            style={styles.botao}
            onPress={() => {
              if (nome.trim() === '') {
                setError('O nickname não pode estar vazio!');
                return;
              }
              setError('');
              salvar();
            }}
          >
            <Text style={styles.botaoTexto}>Salvar</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </KeyboardAvoidingView>

      <CadAlertEdit
        visible={modalVisible}
        onClose={() => {
          setModalVisible(false);
          navigation.navigate('Perfil', {
            nomeAtualizado: nome,
            fotoAtualizada: foto,
          });
        }}
      />
    </LinearGradient>
  );
};

export default EditarPerfil;