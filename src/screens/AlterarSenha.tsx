import React, { useState } from 'react';
import { SafeAreaView, KeyboardAvoidingView, Platform, View, TextInput, Text, TouchableOpacity, Dimensions } from 'react-native';
import { getAuth, updatePassword } from 'firebase/auth';
import styles from '../styles/styleAlterarSenha';
import { FIREBASE_AUTH } from '../../FireBaseConfig';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';
import CadAlertSenha from '../../components/alertCompAltSenha';

const { width } = Dimensions.get('window');

const AlterarSenha = ({ navigation }) => {
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [erroModalVisible, setErroModalVisible] = useState(false);
  const [erroMensagem, setErroMensagem] = useState('');

  const alterarSenha = async () => {
    const errorMsg = 'Realize o login novamente para alterar a senha.';
    const auth = FIREBASE_AUTH;
    const user = auth.currentUser;

    if (!novaSenha || !confirmarSenha) {
      setErroMensagem('Preencha todos os campos.');
      setErroModalVisible(true);
      return;
    }

    if (novaSenha !== confirmarSenha) {
      setErroMensagem('As senhas não coincidem.');
      setErroModalVisible(true);
      return;
    }

    if (!user) return;

    try {
      await updatePassword(user, novaSenha);
      setModalVisible(true);
      setNovaSenha('');
      setConfirmarSenha('');
    } catch (errorMsg) {
      setErroMensagem(errorMsg.message);
      setErroModalVisible(true);
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
                  size={36}
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
                  size={36}
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

      {/* Modal de sucesso */}
      <CadAlertSenha
        visible={modalVisible}
        onClose={() => {
          setModalVisible(false);
          navigation.goBack();
        }}
        title="Sucesso!"
        message="Senha alterada com sucesso!"
        type="sucesso"
      />

      {/* Modal de erro */}
      <CadAlertSenha
        visible={erroModalVisible}
        onClose={() => {
          setErroModalVisible(false);
        }}
        title="Erro!"
        message={erroMensagem}
        type="erro"
      />
    </LinearGradient>
  );
};

export default AlterarSenha;