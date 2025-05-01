import React, { useState, useEffect, useRef, useCallback } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Modal, Animated, SafeAreaView, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'; 
import { FIREBASE_DB, FIREBASE_AUTH } from '../../../../FireBaseConfig';
import styles from '../../../styles/styleModulos';

export default function ProfissoesScreen({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalFinalVisible, setModalFinalVisible] = useState(false);
  const [cardSelecionado, setCardSelecionado] = useState('');
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [xpGanho, setXpGanho] = useState(0);
  const [mensagemAcerto, setMensagemAcerto] = useState('');
  const [botaoSelecionado, setBotaoSelecionado] = useState<number | null>(null);
  const [botaoCorreto, setBotaoCorreto] = useState(false);
  const [tempoRestante, setTempoRestante] = useState(60);
  const [timerAtivo, setTimerAtivo] = useState(true);
  const [acertos, setAcertos] = useState(0);
  const [erros, setErros] = useState(0);

  const [exp, setExp] = useState(0);
  const [nivel, setNivel] = useState(0);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useFocusEffect(
      useCallback(() => {
        const fetchUserData = async () => {
          const uid = FIREBASE_AUTH.currentUser?.uid;
          if (!uid) return;
    
          const userRef = doc(FIREBASE_DB, 'usuarios', uid);
          const userSnap = await getDoc(userRef);
    
          if (userSnap.exists()) {
            const userData = userSnap.data();
            let expAtual = userData?.exp || 0;
            let nivelAtual = userData?.nivel || 0;
            let subiuNivel = false;
    
            while (expAtual >= 200) {
              expAtual -= 200;
              nivelAtual += 1;
              subiuNivel = true;
            }
    
            if (subiuNivel) {
              await updateDoc(userRef, {
                exp: expAtual,
                nivel: nivelAtual,
              });
    
              Alert.alert("Parabéns!", `Você chegou ao level: ${nivelAtual}`);
            }
    
            setExp(expAtual);
            setNivel(nivelAtual);
          }
        };
    
        fetchUserData();
      }, [])
    );  

  const getInfoTrofeuPorNivel = (nivel) => {
    if (nivel >= 20) {
      return { imagem: require('../../../../assets/trofeu_diamante.png'), titulo: 'Troféu Diamante', descricao: 'Você alcançou a elite!' };
    } else if (nivel >= 10) {
      return { imagem: require('../../../../assets/trofeu_ouro.png'), titulo: 'Troféu de Ouro', descricao: 'Você é um verdadeiro guerreiro!' };
    } else if (nivel >= 5) {
      return { imagem: require('../../../../assets/trofeu_prata.png'), titulo: 'Troféu de Prata', descricao: 'Você está evoluindo bem!' };
    } else {
      return { imagem: require('../../../../assets/trofeu_bronze.png'), titulo: 'Troféu de Bronze', descricao: 'Você começou sua jornada!' };
    }
  };

  const trofeu = getInfoTrofeuPorNivel(nivel);

  const cards = [
    ['Tecnologia', 'Saude'],
    ['Serviços Gerais', 'Engenharia ']
  ];

  const imagensPorTema = {
    Tecnologia: require('../../../../assets/aperto-de-mao.png'),
    Saude: require('../../../../assets/favicon.png'),
    ServiçosGerais: require('../../../../assets/Logo branca.png'),
    Engenharia: require('../../../../assets/adaptive-icon.png'),
  };

  const perguntasPorTema = {
    Tecnologia: [
      { pergunta: 'Qual o significado do sinal acima?', opcoes: ['Boa noite', 'Bom dia', 'Boa tarde'], correta: 'Bom dia' },
      { pergunta: 'Qual o significado do sinal acima?', opcoes: ['Obrigado', 'Oi', 'Tchau'], correta: 'Oi' },
      { pergunta: 'Qual o significado do sinal acima?', opcoes: ['Tchau', 'Até logo', 'Olá'], correta: 'Até logo' },
      { pergunta: 'Qual o significado do sinal acima?', opcoes: ['Tudo bem?', 'Oi', 'Bom dia'], correta: 'Tudo bem?' },
    ],
    Saude: [
      { pergunta: 'Qual o significado do sinal acima?', opcoes: ['10 horas', 'Meio Dia', 'Meia Noite'], correta: 'Meia Noite' },
      { pergunta: 'Qual o significado do sinal acima?', opcoes: ['14h30', '12h45', '19h25'], correta: '19h25' },
      { pergunta: 'Qual o significado do sinal acima?', opcoes: ['11h', '15h50', '20h'], correta: '20h' },
      { pergunta: 'Qual o significado do sinal acima?', opcoes: ['13h15', '23h35', '21h'], correta: '23h35' },
    ],
  };

  const abrirModal = (tema: string) => {
    setCardSelecionado(tema);
    setPerguntaAtual(0);
    setXpGanho(0);
    setModalVisible(true);
    setBotaoSelecionado(null);
    setMensagemAcerto('');
    setAcertos(0);
    setErros(0);
    setTempoRestante(60);
    setTimerAtivo(true);
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  const fecharModal = () => {
    setModalVisible(false);
    setBotaoSelecionado(null);
    setMensagemAcerto('');
    setTimerAtivo(false);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (timerAtivo && tempoRestante > 0) {
      timer = setInterval(() => {
        setTempoRestante((prevTempo) => prevTempo - 1);
      }, 1000);
    }
    if (tempoRestante === 0) {
      setMensagemAcerto('Tempo esgotado! Você não respondeu!');
      setErros((prevErros) => prevErros + 1);
      setTimeout(() => {
        proximaPergunta();
      }, 5000);
    }
    return () => clearInterval(timer);
  }, [tempoRestante, timerAtivo]);

const responder = (opcao: string, index: number) => {
  if (!cardSelecionado) return;
  const pergunta = perguntasPorTema[cardSelecionado][perguntaAtual];
  const correta = pergunta.correta;
  if (botaoSelecionado !== null) return;
  setBotaoSelecionado(index);
  if (opcao === correta) {
    setBotaoCorreto(true);
    setMensagemAcerto('Parabéns você acertou!! ganhou 5 de XP <3');
    setXpGanho((prev) => prev + 5);
    setAcertos((prev) => prev + 1);
  } else {
    setBotaoCorreto(false);
    setMensagemAcerto('Poxa você errou, tente outra vez');
    setErros((prev) => prev + 1);
  }
  setTimeout(() => {
    proximaPergunta();
  }, 2000);
};

  const proximaPergunta = () => {
    if (!cardSelecionado) return;
    setMensagemAcerto('');
    setTempoRestante(60);
    setTimerAtivo(true);
    setBotaoSelecionado(null);
    if (perguntaAtual + 1 < perguntasPorTema[cardSelecionado].length) {
      setPerguntaAtual(perguntaAtual + 1);
    } else {
      setModalVisible(false);
      setModalFinalVisible(true);
    }
  };

  const voltarAoMenu = async () => {
    try {
      const userRef = doc(FIREBASE_DB, 'usuarios', FIREBASE_AUTH.currentUser?.uid || '');
      const userSnap = await getDoc(userRef);
      
      if (userSnap.exists()) {
        const userData = userSnap.data();
        const currentExp = userData?.exp || 0;
    
        await setDoc(userRef, {
          exp: currentExp + xpGanho,
        }, { merge: true });
    
        setXpGanho(0);
        
        setModalFinalVisible(false);
        setCardSelecionado('');
        setPerguntaAtual(0);
      }
    } catch (error) {
      console.error("Erro ao atualizar XP no Firestore:", error);
    }
  };
  
  const perguntas = perguntasPorTema[cardSelecionado] || [];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.expContainer}>
          <View style={styles.expBarBackground}>
            <View style={[styles.expBarFill, { width: `${(exp / 200) * 100}%` }]} />
            <Text style={styles.expText}>{exp} EXP / 200 EXP</Text>
          </View>
          <View style={styles.trofeuIcon}>{trofeu && (
            <Image
              source={trofeu.imagem}
              resizeMode="contain"
              style={{ width: 60, height: 60, marginLeft: 4 }}
            />
          )}
          </View>
        </View>

        <View style={styles.level}>
          <Text style={styles.levelText}>Level {nivel}</Text>
        </View>

        <ScrollView contentContainerStyle={{ paddingBottom: 110 }} showsVerticalScrollIndicator={false}>
          {cards.map((linha, index) => (
            <View style={styles.row} key={index}>
              {linha.map((item, i) => (
                <TouchableOpacity key={i} style={styles.card} onPress={() => abrirModal(item)}>
                  <Image style={styles.icon} source={imagensPorTema[item]} />
                  <Text style={styles.cardText}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}

        <TouchableOpacity onPress={() => navigation.navigate('Menu')} style={styles.voltarAoInicio}>
                <Text style={styles.modalCloseText}>Voltar ao Menu</Text>
        </TouchableOpacity>
        </ScrollView>

        <Modal animationType="none" transparent={true} visible={modalVisible} onRequestClose={fecharModal}>
          <View style={styles.modalOverlay}>
            <Animated.View style={[styles.quizContainer, { opacity: fadeAnim }]}>
              <View style={styles.videoBox}>
                <Text style={styles.videoText}>vídeo do sinal</Text>
              </View>

              <Text style={styles.quizQuestion}>{perguntas[perguntaAtual]?.pergunta}</Text>

              <View style={styles.timerContainer}>
                <MaterialCommunityIcons name="progress-clock" size={20} color="#FF0000" style={styles.timerIcon} />
                <Text style={styles.timerText}>Tempo restante: {tempoRestante}s</Text>
              </View>

              {perguntas[perguntaAtual]?.opcoes.map((opcao, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.quizOption,
                    botaoSelecionado === index && { backgroundColor: botaoCorreto ? 'green' : 'red' },
                  ]}
                  onPress={() => responder(opcao, index)}
                  disabled={botaoSelecionado !== null}
                >
                  <Text style={styles.quizOptionText}>{opcao}</Text>
                </TouchableOpacity>
              ))}

              {mensagemAcerto !== '' && (
                <Text style={{ marginTop: 10, fontWeight: 'bold', color: botaoCorreto ? 'green' : 'red' }}>
                  {mensagemAcerto}
                </Text>
              )}

              <TouchableOpacity onPress={fecharModal} style={styles.modalCloseButton}>
                <Text style={styles.modalCloseText}>Fechar</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </Modal>

        <Modal animationType="slide" transparent={true} visible={modalFinalVisible} onRequestClose={voltarAoMenu}>
          <View style={styles.modalOverlay}>
            <View style={styles.quizContainer}>
              <View style={[styles.videoBox, { backgroundColor: '#ccc' }]}>
                <Text style={styles.videoText}>Imagem aqui</Text>
              </View>
              <Text style={styles.quizQuestion}>
                Veja agora quantas questões você acertou ou errou e a quantidade de EXP adquirida!:
              </Text>
              <Text style={styles.resultText}>Acertos: {acertos}</Text>
              <Text style={styles.resultText}>Erros: {erros}</Text>
              <Text style={styles.resultText}>EXP ganho: {xpGanho}</Text>

              <TouchableOpacity onPress={voltarAoMenu} style={styles.modalCloseButton}>
                <Text style={styles.modalCloseText}>Voltar ao Menu</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}