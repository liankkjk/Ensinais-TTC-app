import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
  Animated,
  SafeAreaView,
} from 'react-native';
import styles from '../styles/styleInicio';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type Pergunta = {
  pergunta: string;
  opcoes: string[];
  correta: string;
};

type QuestoesPorTema = {
  [tema: string]: Pergunta[];
};

export default function Inicio() {
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

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const cards = [
    ['Saudações', 'Animais'],
    ['Comidas', 'Profissões'],
    ['Estudo', 'Transporte']
  ];

  const imagensPorTema = {
    Saudações: require('../../assets/aperto-de-mao.png'), 
    Animais: require('../../assets/favicon.png'),      
    Comidas: require('../../assets/Logo branca.png'),      
    Profissões: require('../../assets/adaptive-icon.png'),
    Estudo: require('../../assets/user.jpg'),        
    Transporte: require('../../assets/icon.png'),
  };

  const perguntasPorTema: QuestoesPorTema = {
    Saudações: [
      {
        pergunta: 'Qual o significado do sinal acima?',
        opcoes: ['Boa noite', 'Bom dia', 'Boa tarde'],
        correta: 'Bom dia',
      },
      {
        pergunta: 'Qual o significado do sinal acima?',
        opcoes: ['Obrigado', 'Oi', 'Tchau'],
        correta: 'Oi',
      },
      {
        pergunta: 'Qual o significado do sinal acima?',
        opcoes: ['Tchau', 'Até logo', 'Olá'],
        correta: 'Até logo',
      },
      {
        pergunta: 'Qual o significado do sinal acima?',
        opcoes: ['Tudo bem?', 'Oi', 'Bom dia'],
        correta: 'Tudo bem?',
      },
    ],
    Animais: [
      {
        pergunta: 'Qual o significado do sinal acima?',
        opcoes: ['Cachorro', 'Gato', 'Cavalo'],
        correta: 'Cachorro',
      },
      {
        pergunta: 'Qual o significado do sinal acima?',
        opcoes: ['Passarinho', 'Peixe', 'Gato'],
        correta: 'Passarinho',
      },
      {
        pergunta: 'Qual o significado do sinal acima?',
        opcoes: ['Leão', 'Tigre', 'Pantera'],
        correta: 'Pantera',
      },
      {
        pergunta: 'Qual o significado do sinal acima?',
        opcoes: ['Elefante', 'Girafa', 'Búfalo'],
        correta: 'Elefante',
      },
      {
        pergunta: 'Qual o significado do sinal acima?',
        opcoes: ['Cavalo', 'Burro', 'Galo'],
        correta: 'Galo',
      },
      {
        pergunta: 'Qual o significado do sinal acima?',
        opcoes: ['Urso', 'Coelho', 'Raposa'],
        correta: 'Coelho',
      },
      {
        pergunta: 'Qual o significado do sinal acima?',
        opcoes: ['Macaco', 'Jacaré', 'Coelho'],
        correta: 'Macaco',
      },
      {
        pergunta: 'Qual o significado do sinal acima?',
        opcoes: ['Cachorro', 'Onça', 'Cavalo'],
        correta: 'Onça',
      },
      {
        pergunta: 'Qual o significado do sinal acima?',
        opcoes: ['Cachorro', 'Lobo', 'Raposa'],
        correta: 'Lobo',
      },
      {
        pergunta: 'Qual o significado do sinal acima?',
        opcoes: ['Vaca', 'Ovelha', 'Porco'],
        correta: 'Vaca',
      },
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

  const voltarAoMenu = () => {
    setModalFinalVisible(false);
    setCardSelecionado('');
    setPerguntaAtual(0);
    setXpGanho(0);
  };

  const perguntas = perguntasPorTema[cardSelecionado] || [];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.expContainer}>
          <View style={styles.expBarBackground}>
            <View style={styles.expBarFill} />
            <Text style={styles.expText}>80 EXP / 200 EXP</Text> 
          </View>
          <TouchableOpacity style={styles.trofeuButton}>
            <Text style={styles.trofeuText}>Troféu</Text> 
          </TouchableOpacity>
        </View>

        <View style={styles.level}>
          <Text style={styles.levelText}>Level 20</Text>
        </View>

        <ScrollView contentContainerStyle={{ paddingBottom: 110 }} showsVerticalScrollIndicator={false}>
          {cards.map((linha, index) => (
            <View style={styles.row} key={index}>
              {linha.map((item, i) => (
                <TouchableOpacity key={i} style={styles.card} onPress={() => abrirModal(item)}>
                  <Image style={styles.icon} source={imagensPorTema[item]}/>
                  <Text style={styles.cardText}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
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
                    botaoSelecionado === index && {
                      backgroundColor: botaoCorreto ? 'green' : 'red',
                    },
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
              <Text style={styles.resultText}>XP adquirido: {xpGanho}</Text>

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