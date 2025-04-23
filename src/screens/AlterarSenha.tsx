import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import { getAuth, EmailAuthProvider, reauthenticateWithCredential, updatePassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../FireBaseConfig'; // Adjust the path as needed

const AlterarSenha = () => {
  const [senhaAtual, setSenhaAtual] = useState('');
  const [novaSenha, setNovaSenha] = useState('');

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
    } catch (error: any) {
      Alert.alert('Erro', error.message);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Senha Atual:</Text>
      <TextInput
        secureTextEntry
        value={senhaAtual}
        onChangeText={setSenhaAtual}
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />

      <Text>Nova Senha:</Text>
      <TextInput
        secureTextEntry
        value={novaSenha}
        onChangeText={setNovaSenha}
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />

      <TouchableOpacity onPress={alterarSenha} style={{ backgroundColor: '#f2921d', padding: 10, borderRadius: 20 }}>
        <Text style={{ color: '#fff', textAlign: 'center' }}>Alterar Senha</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AlterarSenha;
