import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView
} from 'react-native';
import { FIREBASE_AUTH } from '../../FireBaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from '../styles/styleCadastro';
import { LinearGradient } from 'expo-linear-gradient';

const Cadastrar = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true); // <- Adicionado
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;
  const navigation = useNavigation();

  const handleCadastro = async () => {
    if (!email || !password || !user) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
      navigation.navigate('Login');
    } catch (error: unknown) {
      let errorMessage = 'Erro ao cadastrar. Tente novamente.';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      Alert.alert('Erro', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LinearGradient
      colors={['#F27127', '#f6fafd']}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >

          <Image
            style={styles.logo}
            source={require('../../assets/favicon.png')}
          />

          <Text style={styles.inputLabel}>Insira o seu usuário:</Text>
          <View style={styles.inputContainer}>
            <MaterialCommunityIcons name="account" size={20} color="#888" style={styles.icon} />
            <TextInput
              placeholder="Nome de usuário"
              value={user}
              onChangeText={setUser}
              style={styles.input}
              placeholderTextColor="#888"
            />
          </View>

          <Text style={styles.inputLabel}>Insira o e-mail:</Text>
          <View style={styles.inputContainer}>
            <MaterialCommunityIcons name="email" size={20} color="#888" style={styles.icon} />
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.input}
              placeholderTextColor="#888"
            />
          </View>

          <Text style={styles.inputLabel}>Insira a senha:</Text>
          <View style={styles.inputContainer}>
            <MaterialCommunityIcons name="lock" size={20} color="#888" style={styles.icon} />
            <TextInput
              placeholder="Senha"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={secureText}
              style={styles.input}
              placeholderTextColor="#888"
            />
            <TouchableOpacity
              onPress={() => setSecureText(!secureText)}
              style={styles.iconButton}
            >
              <MaterialCommunityIcons
                name={secureText ? 'eye-off' : 'eye'}
                size={20}
                color="#888"
              />
            </TouchableOpacity>
          </View>

          {loading ? (
            <ActivityIndicator size="large" color="#2e64e5" style={{ marginTop: 30 }} />
          ) : (
            <TouchableOpacity style={styles.button} onPress={handleCadastro}>
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.loginText}>Já possui uma conta? Faça login!</Text>
          </TouchableOpacity>

          <Image
            style={styles.bottomLogo}
            source={require('../../assets/favicon.png')}
          />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Cadastrar;