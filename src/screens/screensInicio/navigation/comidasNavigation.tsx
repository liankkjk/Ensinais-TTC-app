import React, { useState, useEffect, useRef, useCallback } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Modal, Animated, SafeAreaView, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { FIREBASE_DB, FIREBASE_AUTH } from '../../../../FireBaseConfig';
import MyAlertComponent from '../../../../components/alertCompLvl';
import styles from '../../../styles/styleModulos';
import { Video, ResizeMode } from 'expo-av';

export default function ComidasScreen({ navigation }) {
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
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertTitle, setAlertTitle] = useState("");

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

            setAlertTitle("Parabéns!");
            setAlertMessage(`Você chegou ao level: ${nivelAtual}`);
            setShowAlert(true);
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
    ['Doces', 'Salgados'],
    ['Pratos', 'Legumes']
  ];

  const imagensPorTema = {
    Doces: require('../../../../assets/Doces.png'),
    Salgados: require('../../../../assets/Salgados.png'),
    Pratos: require('../../../../assets/Pratos.png'),
    Legumes: require('../../../../assets/Legumes.png'),
  };

  const perguntasPorTema = {
    Doces: [
      { pergunta: 'Qual o significado do sinal acima?',
        opcoes: ['Bolo', 'Pudim', 'Brigadeiro'],
        correta: 'Pudim',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/imagens%2FComidas%2FSinal%20Pudim.png?alt=media&token=8f1a04bd-481f-4d38-895d-24940c2d972a'
      },
      { pergunta: 'Qual o significado do sinal acima?',
        opcoes: ['Bala', 'Doce de Leite', 'Chocolate'],
        correta: 'Chocolate',
        videoUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FComidas%2FSem%20legenda%2FChocolate.mp4?alt=media&token=47a8a8a8-2e61-44fd-9fdd-00d66a7c461f'
        
        },
      { pergunta: 'Qual o significado do sinal acima?',
        opcoes: ['Pirulito', 'Bala', 'Chiclete'],
        correta: 'Bala',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/imagens%2FComidas%2FSinal%20Bala.png?alt=media&token=e18bb19e-dca4-48b4-8167-e3d008299435'
      },
      { pergunta: 'Qual o significado do sinal acima?',
        opcoes: ['Paçoca', 'Sorvete', 'Algodão Doce'],
        correta: 'Sorvete',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FComidas%2FSem%20legenda%2FSorvete.mp4?alt=media&token=16fdf69a-4d0a-484c-9e2b-3b8adfe6ac3d'
      },
    ],
    Salgados: [
      { pergunta: 'Qual o significado do sinal acima?',
        opcoes: ['Esfiha', 'Pastel', 'Coxinha'],
        correta: 'Pastel',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/imagens%2FComidas%2FSinal%20Pastel.png?alt=media&token=abd7db02-e1be-4a8e-ba05-4439b6219724'
      },
      { pergunta: 'Qual o significado do sinal acima?',
        opcoes: ['Coxinha', 'Batata Frita', 'Pizza'],
        correta: 'Coxinha',
        videoUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FComidas%2FSem%20legenda%2FCoxinha.mp4?alt=media&token=fb22d080-b3f9-4b06-9ad4-ebf3e547af72'
       },
      { pergunta: 'Qual o significado do sinal acima?',
        opcoes: ['Hambúrguer', 'Rissoles', 'Torta'],
        correta: 'Torta',
        imageUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/imagens%2FComidas%2FSinal%20Torta.png?alt=media&token=5a613ed9-8a16-47ce-a543-ad26b47cf2ab'
      },
      { pergunta: 'Qual o significado do sinal acima?',
        opcoes: ['Pizza', 'Lanche', 'Coxinha'],
        correta: 'Pizza',
        videoUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FComidas%2FSem%20legenda%2FPizza.mp4?alt=media&token=48de489a-b79f-41e9-a9ca-abdd1111ea3d'
      },
    ],
    Pratos: [
      { pergunta: 'Qual prato é esse?',
        opcoes: ['Farofa', 'Macarrão', 'Arroz'],
        correta: 'Arroz',
        imageUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/imagens%2FComidas%2FSinal%20Arroz.png?alt=media&token=fad8221f-7e2b-4c22-aca0-9a890e03b9da'
      },
      { pergunta: 'O que a pessoa disse?',
        opcoes: ['Feijoada', 'Strogonoff', 'Farofa'],
        correta: 'Feijoada',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FComidas%2FSem%20legenda%2FFeijoada.mp4?alt=media&token=a61b233b-3437-4367-920a-46e78f9c7699'
      },
      { pergunta: 'Qual prato é esse?',
        opcoes: ['Arroz', 'Feijão', 'Macarrão'],
        correta: 'Feijão',
        imageUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/imagens%2FComidas%2FSinal%20Feij%C3%A3o.png?alt=media&token=1245e113-6ce8-4cf9-a040-91b9333fed31'
      },
      { pergunta: 'O que a pessoa disse?',
        opcoes: ['Frango', 'Sopa', 'Macarrão'],
        correta: 'Sopa',
        videoUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FComidas%2FSem%20legenda%2FSopa.mp4?alt=media&token=7c5b047c-f983-4dd3-b6e1-b7397f737464'
      },
    ],
    Legumes: [
      { pergunta: 'Qual alimento é esse?',
        opcoes: ['Alface', 'Repolho', 'Beterraba'],
        correta: 'Alface',
        imageUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/imagens%2FComidas%2FSinal%20Alface.png?alt=media&token=a2617540-cbc5-4188-a5de-b1f04121b6c5'
      },
      { pergunta: 'Qual alimento é esse?',
        opcoes: ['Pepino', 'Alface', 'Cenoura'],
        correta: 'Cenoura',
        videoUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FComidas%2FSem%20legenda%2FCenoura.mp4?alt=media&token=721faca7-0cb3-446c-a2b6-adc519193ffb'
      },
      { pergunta: 'Qual alimento é esse?',
        opcoes: ['Couve', 'Brócolis', 'Chuchu'],
        correta: 'Chuchu',
        imageUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/imagens%2FComidas%2FSinal%20Chuchu.png?alt=media&token=50d96660-52b4-41e2-b3e4-a212ba07bca8'
      },
      { pergunta: 'Qual alimento é esse?',
        opcoes: ['Pepino', 'Couve', 'Alface'],
        correta: 'Couve',
        videoUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FComidas%2FSem%20legenda%2FCouve.mp4?alt=media&token=cbda4d1c-6207-497d-9774-8a898c4aa142'
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
              style={{ width: 100, height: 100, marginLeft: 4 }}
            />
          )}
          </View>
        </View>

        <View style={styles.level}>
          <Text style={styles.levelText}>Level {nivel}</Text>
        </View>

        {showAlert && (
          <MyAlertComponent
            visible={showAlert}
            title={alertTitle}
            message={alertMessage}
            onClose={() => setShowAlert(false)}
          />
        )}

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
               {perguntas[perguntaAtual]?.videoUrl && (
                <Video
                  source={{ uri: perguntas[perguntaAtual].videoUrl }}
                  rate={1.0}
                  volume={1.0}
                  isMuted={false}
                  resizeMode={ResizeMode.CONTAIN}
                  shouldPlay
                  useNativeControls
                  style={{ width: '100%', height: 200, borderRadius: 12, backgroundColor: '#000' }}
                />
              )}

              {perguntas[perguntaAtual]?.imageUrl && !perguntas[perguntaAtual]?.videoUrl && (
        
       <Image
             source={{ uri: perguntas[perguntaAtual].imageUrl }} // URL da imagem
             style={{ width: '100%', height: 161, borderRadius: 12, backgroundColor: '#000', resizeMode: 'contain', }}
            />
            )}
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
              <View style={[styles.videoBox]}>
                <Image
                  source={require('../../../../assets/JonathanParabens.png')}
                  style={styles.imageStyle}
                />
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