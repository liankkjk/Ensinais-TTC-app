import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
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
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import AlertCompCad from '../../components/alertCompCad';
import { Audio } from 'expo-av';

const Cadastrar = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertTitle, setAlertTitle] = useState('');
  const [cadastroSucesso, setCadastroSucesso] = useState(false);
  const auth = FIREBASE_AUTH;
  const navigation = useNavigation();

  const playSound = async (soundType: 'success' | 'error') => {
    const soundPath = soundType === 'success' ? require('../../assets/sounds/success.mp3') : require('../../assets/sounds/error.mp3');
    const { sound } = await Audio.Sound.createAsync(soundPath);
    await sound.playAsync();
  };

  const handleCadastro = async () => {
    if (!email || !password || !user || password !== confirmPassword) { 
      setAlertTitle('Erro');
      setAlertMessage(password !== confirmPassword ? 'As senhas não coincidem.' : 'Por favor, preencha todos os campos.');
      setShowAlert(true);
      playSound('error');
      return;
    }

    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      const userId = response.user.uid;

      const db = getFirestore();
      await setDoc(doc(db, 'usuarios', userId), {
        avatarUrl: "",
        nickname: user,
        email: email,
        nivel: 1,
        exp: 0,
        createdAt: new Date(),
      });

      setAlertTitle('Sucesso');
      setAlertMessage('Cadastro realizado com sucesso!');
      setCadastroSucesso(true);
      setShowAlert(true);
      playSound('success');

    } catch (error: unknown) {
      let errorMessage = 'Erro ao cadastrar. Tente novamente.';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      setAlertTitle('Erro');
      setAlertMessage(errorMessage);
      setShowAlert(true);
      playSound('error'); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <LinearGradient colors={['#F27127', '#f6fafd']} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <Image style={styles.logo} source={require('../../assets/favicon.png')} />

          <Text style={styles.inputLabel}>Insira o seu usuário:</Text>
          <View style={styles.inputContainer}>
            <MaterialCommunityIcons name="account" size={20} color="#888" style={styles.icon} />
            <TextInput
              placeholder="Nome de usuário"
              value={user}
              onChangeText={setUser}
              style={styles.input}
              placeholderTextColor="#888"
              maxLength={20}
            />
          </View>

          {showAlert && (
            <AlertCompCad
              visible={showAlert}
              onClose={() => {
                setShowAlert(false);
                if (cadastroSucesso) {
                  setCadastroSucesso(false);
                  navigation.navigate('Login');
                }
              }}
              message={alertMessage}
              title={alertTitle}
              type={cadastroSucesso ? 'success' : 'error'}
            />
          )}

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
            <TouchableOpacity onPress={() => setSecureText(!secureText)} style={styles.iconButton}>
              <MaterialCommunityIcons name={secureText ? 'eye-off' : 'eye'} size={20} color="#888" />
            </TouchableOpacity>
          </View>

          <Text style={styles.inputLabel}>Confirme a senha:</Text>
          <View style={styles.inputContainer}>
            <MaterialCommunityIcons name="lock" size={20} color="#888" style={styles.icon} />
            <TextInput
              placeholder="Confirmar senha"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={secureText}
              style={styles.input}
              placeholderTextColor="#888"
            />
            <TouchableOpacity onPress={() => setSecureText(!secureText)} style={styles.iconButton}>
              <MaterialCommunityIcons name={secureText ? 'eye-off' : 'eye'} size={20} color="#888" />
            </TouchableOpacity>
          </View>

          {loading ? (
            <ActivityIndicator size="large" color="#fff" style={{ marginTop: 30 }} />
          ) : (
            <TouchableOpacity style={styles.button} onPress={handleCadastro}>
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity style={styles.loginButton} onPress={() => navigation.goBack()}>
            <Text style={styles.loginText}>Já possui uma conta? Faça login!</Text>
          </TouchableOpacity>

          <Image style={styles.bottomLogo} source={require('../../assets/favicon.png')} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Cadastrar;
