import React, { useState } from 'react';
import { SafeAreaView, KeyboardAvoidingView, Platform, View, TextInput, Text, TouchableOpacity, Alert, Dimensions } from 'react-native';
import { getAuth, updatePassword } from 'firebase/auth';
import styles from '../styles/styleAlterarSenha';
import { FIREBASE_AUTH } from '../../FireBaseConfig';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const AlterarSenha = ({ navigation }) => {
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const alterarSenha = async () => {
    const auth = FIREBASE_AUTH;
    const user = auth.currentUser;

    if (!novaSenha || !confirmarSenha) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    if (novaSenha !== confirmarSenha) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    if (!user) return;

    try {
      await updatePassword(user, novaSenha);
      Alert.alert('Sucesso', 'Senha alterada com sucesso!');
      setNovaSenha('');
      setConfirmarSenha('');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Erro', error.message);
    }
  };

  return (
    <LinearGradient
      colors={['#F27127', '#f6fafd']}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView 
          style={{ flex: 1 }} 
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <View style={styles.innerContainer}>
            <TouchableOpacity 
              style={styles.backButton} 
              onPress={() => navigation.goBack()}
            >
              <MaterialCommunityIcons 
                name="arrow-left" 
                size={24} 
                color="#fff" 
              />
              <Text style={[styles.backText, { color: '#fff' }]}>Voltar</Text>
            </TouchableOpacity>

            <Text style={[styles.title, { color: '#fff' }]}>Alterar Senha</Text>

            <Text style={[styles.inputLabel, { color: '#fff' }]}>Nova Senha</Text>
            <View style={styles.inputContainer}>
              <TextInput 
                style={styles.input} 
                placeholder="Digite sua nova senha"
                secureTextEntry={!showPassword}
                placeholderTextColor="#aaa"
                value={novaSenha}
                onChangeText={setNovaSenha}
              />
              <TouchableOpacity 
                onPress={() => setShowPassword(prevState => !prevState)} 
                style={styles.iconButton}
              >
                <MaterialCommunityIcons 
                  name={showPassword ? 'eye-off' : 'eye'} 
                  size={24} 
                  color="#333" 
                />
              </TouchableOpacity>
            </View>

            <Text style={[styles.inputLabel, { color: '#fff' }]}>Confirme sua Senha</Text>
            <View style={styles.inputContainer}>
              <TextInput 
                style={styles.input} 
                placeholder="Confirme sua nova senha"
                secureTextEntry={!showConfirmPassword}
                placeholderTextColor="#aaa"
                value={confirmarSenha}
                onChangeText={setConfirmarSenha}
              />
              <TouchableOpacity 
                onPress={() => setShowConfirmPassword(prevState => !prevState)} 
                style={styles.iconButton}
              >
                <MaterialCommunityIcons 
                  name={showConfirmPassword ? 'eye-off' : 'eye'} 
                  size={24} 
                  color="#333" 
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={alterarSenha} style={styles.button}>
              <Text style={styles.buttonText}>Alterar Senha</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default AlterarSenha;