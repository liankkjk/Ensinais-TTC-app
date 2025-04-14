import React, { useEffect, useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Image,
  BackHandler
} from 'react-native';
import { signInWithEmailAndPassword, signInWithCredential } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../FireBaseConfig';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useAuth } from '../routes/authcontext';
import styles from '../styles/styleLogin';



const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [secureText, setSecureText] = useState(true);
  const { loginWithEmail, loginWithGoogle } = useAuth();
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await loginWithEmail(email, password);
      navigation.reset({
        index: 0,
        routes: [{ name: 'MainTabs' }],
      })
    } catch (error: any) {
      Alert.alert('Erro ao fazer login', error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const onBackPress = () => {
      Alert.alert(
        'Sair do app',
        'Deseja realmente sair do aplicativo?',
        [
          { text: 'Cancelar', style: 'cancel' },
          { text: 'Sim', onPress: () => BackHandler.exitApp() },
        ]
      );
      return true; 
    };

    BackHandler.addEventListener('hardwareBackPress', onBackPress);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  }, []);

  return (
    <LinearGradient
      colors={['#f6fafd', '#F27127']}
      style={{ flex: 1 }}
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Image
        style={styles.logo}
        source={require('../../assets/favicon.png')}
        />

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
          <>
            <TouchableOpacity style={styles.button} onPress={signIn}>
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.registerButton}
              onPress={() => navigation.navigate('Cadastrar')}
            >
              <Text style={styles.registerText}>Novo por aqui? Cadastre-se!</Text>
            </TouchableOpacity>
          </>
        )}
        <Image
        style={styles.bottomLogo}
        source={require('../../assets/Logo branca.png')}
        />
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default LoginScreen;