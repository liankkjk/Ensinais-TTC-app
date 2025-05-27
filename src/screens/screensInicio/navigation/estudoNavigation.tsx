import React, { useState, useEffect, useRef, useCallback } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Modal, Animated, SafeAreaView, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useVideoPlayer, VideoView } from 'expo-video';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { FIREBASE_DB, FIREBASE_AUTH } from '../../../../FireBaseConfig';
import MyAlertComponent from '../../../../components/alertCompLvl';
import styles from '../../../styles/styleModulos' 
import { ResizeMode, Video } from 'expo-av';

export default function EstudoNavigation({ navigation }) {
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
    ['Matemática', 'Português'],
    ['História', 'Geografia']
  ];

  const imagensPorTema = {
    Matemática: require('../../../../assets/Matemática.png'),
    Português: require('../../../../assets/Português.png'),
    História: require('../../../../assets/História.png'),
    Geografia: require('../../../../assets/Geografia.png'),
  };

  const perguntasPorTema = {
  Matemática: [
    {
      pergunta: 'Qual o resultado da conta acima? (25+20)',
      opcoes: ['50', '55', '45'],
      correta: '45',
      videoUrl: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FEstudo%2FSem%20legenda%2F45.mp4?alt=media&token=8cd62ed3-1554-42d2-823c-d8eb738be2c5'
    },
    {
      pergunta: 'Qual sinal a pessoa fez?',
      opcoes: ['Calculadora', 'Batata', 'Tênis'],
      correta: 'Calculadora',
      videoUrl: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FEstudo%2FSem%20legenda%2FCalculadora.mp4?alt=media&token=9161d8c2-8917-4b12-bf69-247313e00828'
    },
    {
      pergunta: 'Qual sinal está sendo representado na imagem? ',
      opcoes: ['10', '25', '150'],
      correta: '25',
      videoUrl: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FEstudo%2FSem%20legenda%2FN%C3%BAmero%2025.mp4?alt=media&token=b03d240a-56df-43f9-83fc-9d39efae127f'
    },
    {
      pergunta: 'O sinal representa qual operação aritmética?',
      opcoes: ['Divisão', 'Soma', 'Multiplicação'],
      correta: 'Divisão',
      videoUrl: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FEstudo%2FSem%20legenda%2FDivis%C3%A3o.mp4?alt=media&token=7942ec7e-5bbc-4de3-90f4-2a7b27d8668b'
    }
  ],
  Português: [
    {
      pergunta: 'Qual sinal está sendo representado na imagem?',
      opcoes: ['Escrever', 'Ler', 'Aprender'],
      correta: 'Ler',
      videoUrl: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FEstudo%2FSem%20legenda%2FLer.mp4?alt=media&token=be10ef7b-76d7-4ca3-8442-7741cf7088eb'
    },
    {
      pergunta: 'A pessoa gosta de?',
      opcoes: ['Falar', 'Dormir', 'Aprender'],
      correta: 'Aprender',
      videoUrl: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FEstudo%2FSem%20legenda%2FAprender.mp4?alt=media&token=d11f5afc-59ff-403b-94ae-49d718370f0a'
    },
    {
      pergunta: 'Qual classe gramatical está sendo representada no vídeo?',
      opcoes: ['Verbo', 'Substantivo', 'Pronome'],
      correta: 'Verbo',
      videoUrl: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FEstudo%2FSem%20legenda%2FVerbo.mp4?alt=media&token=a0f6ac38-2e45-4af9-bb1d-d25dab1ede76'
    },
    {
      pergunta: 'Qual a dificuldade da pessoa no português?',
      opcoes: ['Ler', 'Aprender', 'Pontuação'],
      correta: 'Pontuação',
      videoUrl: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FEstudo%2FSem%20legenda%2FPontua%C3%A7%C3%A3o.mp4?alt=media&token=f3a74756-ddd8-4ed8-9337-05e2c8513947'
    }
  ],
  História: [
    {
      pergunta: 'Qual evento está sendo representado?',
      opcoes: ['Colonização', 'Guerra', 'Revolução'],
      correta: 'Colonização',
      videoUrl: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FEstudo%2FSem%20legenda%2FColoniza%C3%A7%C3%A3o.mp4?alt=media&token=a20a57a9-9e3d-4c1e-8393-ca06c3f366c0'
    },
    {
      pergunta: 'O que a pessoa falou?',
      opcoes: ['Cultura', 'Festa', 'Política'],
      correta: 'Cultura',
      videoUrl: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FEstudo%2FSem%20legenda%2FCultura.mp4?alt=media&token=662aefab-7c07-485c-9a86-0b30d35c76b0'
    },
    {
      pergunta: 'Qual estrutura antiga está sendo representada?',
      opcoes: ['Castelo', 'Pirâmide', 'Igreja'],
      correta: 'Castelo',
      videoUrl: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FEstudo%2FSem%20legenda%2FCastelo.mp4?alt=media&token=decea706-764a-4476-9648-3fa6118b0dd7'
    },
    {
      pergunta: 'Qual o sinal é esse?',
      opcoes: ['Capitalismo', 'Independência do Brasil', 'Revolução'],
      correta: 'Independência do Brasil',
      videoUrl: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FEstudo%2FSem%20legenda%2FIndepend%C3%AAncia%20do%20Brasil.mp4?alt=media&token=4954bc73-7c5c-4e2d-9154-6a87ab20c507'
    }
  ],
  Geografia: [
    {
      pergunta: 'Qual sinal a pessoa fez?',
      opcoes: ['Cidade', 'Pais', 'Estado'],
      correta: 'Pais',
      videoUrl: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FEstudo%2FSem%20legenda%2FPa%C3%ADs.mp4?alt=media&token=113cb39c-171e-49d6-811b-5cfce9df249a'
    },
    {
      pergunta: 'Qual país a pessoa tem vontade de conhecer?',
      opcoes: ['Chile', 'Brasil', 'Argentina'],
      correta: 'Brasil',
      videoUrl: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FEstudo%2FSem%20legenda%2FBrasil.mp4?alt=media&token=a6f651d3-d7a9-47b8-831e-85e6ff8f6296'
    },
    {
      pergunta: 'A região onde a pessoa vive é: ',
      opcoes: ['Plana', 'Montanhosa', 'Arenosa'],
      correta: 'Plana',
      videoUrl: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FEstudo%2FSem%20legenda%2FPlano.mp4?alt=media&token=5f220d86-e82d-40c1-b899-5a8ae829063c'
    },
    {
      pergunta: 'Qual continente a pessoa falou?',
      opcoes: ['Africano', 'Europeu', 'Americano'],
      correta: 'Americano',
      videoUrl: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FEstudo%2FSem%20legenda%2FAmericano.mp4?alt=media&token=c01bf720-cb74-4a10-865c-8128d4c811d4'
    }
  ]
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