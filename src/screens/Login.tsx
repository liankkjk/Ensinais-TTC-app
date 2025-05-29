import React, { useEffect, useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Image,
  BackHandler,
  SafeAreaView,
  Alert
} from 'react-native';
import { signInWithEmailAndPassword, signInWithCredential, sendPasswordResetEmail } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../FireBaseConfig';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useAuth } from '../routes/authcontext';
import styles from '../styles/styleLogin';
import { doc, getDoc } from 'firebase/firestore';
import { FIREBASE_DB } from '../../FireBaseConfig';
import CadAlertSair from '../../components/alertCompSair';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [secureText, setSecureText] = useState(true);
  const { loginWithEmail } = useAuth();
  const auth = FIREBASE_AUTH;

  const [modalVisible, setModalVisible] = useState(false);
  const [erroModalVisible, setErroModalVisible] = useState(false);
  const [erroMensagem, setErroMensagem] = useState('');

  const signIn = async () => {
    setLoading(true);
    try {
      await loginWithEmail(email, password);
      const user = auth.currentUser;
      if (user) {
        const userDocRef = doc(FIREBASE_DB, 'usuarios', user.uid);
        const userSnapshot = await getDoc(userDocRef);

        if (userSnapshot.exists()) {
          const userData = userSnapshot.data();
        }
      }

      navigation.reset({
        index: 0,
        routes: [{ name: 'MainTabs' }],
      });
    } catch (error: any) {
      setErroMensagem(error.message);
      setErroModalVisible(true);
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordReset = async () => {
  if (!email) {
    setErroMensagem('Preencha o campo email acima para enviar o e-mail de recuperação.');
    setErroModalVisible(true);
    return;
  }

  try {
    await sendPasswordResetEmail(auth, email);
    setErroMensagem('Um e-mail de recuperação foi enviado.');
    setErroModalVisible(true);
  } catch (error) {
    setErroMensagem('Não foi possível enviar o e-mail de recuperação.');
    setErroModalVisible(true);
  }
};

  useEffect(() => {
    const onBackPress = () => {
      setErroMensagem('Deseja realmente sair do aplicativo?');
      setErroModalVisible(true);
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
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <Image
            style={styles.logo}
            source={require('../../assets/JonathanLogin.png')}
          />

          <Text style={styles.inputLabel}>Insira o e-mail:</Text>
          <View style={styles.inputContainer}>
            <MaterialCommunityIcons name="email" size={30} color="#888" style={styles.icon} />
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
            <MaterialCommunityIcons name="lock" size={30} color="#888" style={styles.icon} />
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
                size={30}
                color="#888"
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={handlePasswordReset} style={styles.forgotPasswordContainer}>
            <Text style={styles.forgotPasswordText}>
              Esqueceu a senha?
            </Text>
          </TouchableOpacity>

          {loading ? (
            <ActivityIndicator size="large" color="#fff" style={{ marginTop: 30 }} />
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
      </SafeAreaView>

      <CadAlertSair
        visible={erroModalVisible}
        message={erroMensagem}
        onClose={() => setErroModalVisible(false)}
        onConfirm={() => {
          if (erroMensagem === 'Deseja realmente sair do aplicativo?') {
            setErroModalVisible(false);
            BackHandler.exitApp();
          } else {
            setErroModalVisible(false);
          }
        }}
        singleButtonMode={erroMensagem !== 'Deseja realmente sair do aplicativo?'}
      />
    </LinearGradient>
  );
};

export default LoginScreen;