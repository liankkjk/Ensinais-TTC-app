import React, { useState } from 'react';
import { SafeAreaView, KeyboardAvoidingView, Platform, View, TextInput, Text, TouchableOpacity, Alert, Dimensions } from 'react-native';
import { getAuth, EmailAuthProvider, reauthenticateWithCredential, updatePassword } from 'firebase/auth';
import styles from '../styles/styleAlterarSenha';
import { FIREBASE_AUTH } from '../../FireBaseConfig';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get('window');
const fontSizeBase = width * 0.05;

const AlterarSenha = ({ navigation }) => {
  const [senhaAtual, setSenhaAtual] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const alterarSenha = async () => {
    const auth = FIREBASE_AUTH;
    const user = auth.currentUser;

    if (!user || !user.email) return;

    const credential = EmailAuthProvider.credential(user.email, senhaAtual);

    try {
      await reauthenticateWithCredential(user, credential);
      await updatePassword(user, novaSenha);
      Alert.alert('Sucesso', 'Senha alterada com sucesso!');
      setSenhaAtual('');
      setNovaSenha('');
    } catch (error) {
      Alert.alert('Erro', error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
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
            color="#333" 
          />
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>
          
          <Text style={styles.title}>Alterar Senha</Text>
          
          <Text style={styles.inputLabel}>Senha Atual</Text>
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.input} 
              placeholder="Digite sua senha atual"
              secureTextEntry={!showPassword}
              value={senhaAtual}
              onChangeText={setSenhaAtual}
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

          <Text style={styles.inputLabel}>Nova Senha</Text>
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.input} 
              placeholder="Digite sua nova senha" 
              secureTextEntry={!showConfirmPassword}
              value={novaSenha}
              onChangeText={setNovaSenha}
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
  );
};

export default AlterarSenha;