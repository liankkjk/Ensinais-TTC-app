import React, { useState } from 'react';
import { View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import Cadastrar from './Cadastrar';
import { FIREBASE_AUTH } from '../../FireBaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const handleCadastro = () => {
    navigation.navigate('Cadastrar'); 
  };

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      navigation.navigate('MainTabs');
    } catch (error: any){
      console.log(error);
      alert('O cadastro falhou: ' + error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize="none"
        style={{ marginBottom: 10, padding: 10, borderWidth: 1 }}
      />
      <TextInput
        placeholder="Senha"
        value={password}
        autoCapitalize="none"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={{ marginBottom: 10, padding: 10, borderWidth: 1 }}
      />
      { loading ? (
        <ActivityIndicator size="large" color="#0000ff" /> 
      )  : (
        <>
          <Button title='Login' onPress={signIn} />
        </>
      )
      }  
      <Button title="Cadastrar" onPress={handleCadastro} />
    </View>
  );
};

export default LoginScreen;