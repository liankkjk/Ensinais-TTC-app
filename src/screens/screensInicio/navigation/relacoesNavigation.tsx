import React, { useState, useEffect, useRef, useCallback } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Modal, Animated, SafeAreaView, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { FIREBASE_DB, FIREBASE_AUTH } from '../../../../FireBaseConfig';
import MyAlertComponent from '../../../../components/alertCompLvl';
import styles from '../../../styles/styleModulos';
import { Video, ResizeMode } from 'expo-av';
export default function RelaçõesScreen({ navigation }) {
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
    ['Encontro', 'Horário'],
    ['Hierarquia', 'Gratidão']
  ];

  const imagensPorTema = {
    Encontro: require('../../../../assets/Encontro.png'),
    Horário: require('../../../../assets/Horário.png'),
    Hierarquia: require('../../../../assets/Hierarquia.png'),
    Gratidão: require('../../../../assets/Gratidão.png'),
  };

  const perguntasPorTema = {
    Encontro: [
      { pergunta: 'O que a pessoa falou?',
         opcoes: ['Boa tarde', 'Oi', 'Boa noite'],
          correta: 'Oi',
          videoUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FRela%C3%A7%C3%B5es%2FSem%20legenda%2FOi.mp4?alt=media&token=67b7854e-a708-4145-96ad-15783c07976e'
      },
      { pergunta: 'O que a pessoa perguntou?',
         opcoes: ['Obrigado', 'Boa noite', 'Tudo bem?'],
          correta: 'Tudo bem?',
         videoUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FRela%C3%A7%C3%B5es%2FSem%20legenda%2FTudo%20bem.mp4?alt=media&token=db504979-a842-4232-a0f0-eee9556f362f'
      },
      { pergunta: 'O que a pessoa falou?',
         opcoes: ['Bom dia', 'Até logo', 'Olá'],
          correta: 'Bom dia',
         videoUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FRela%C3%A7%C3%B5es%2FSem%20legenda%2FBom%20dia.mp4?alt=media&token=d8642e4c-1ea6-4dc3-b3cd-339c7e58b030'
      },
      { pergunta: 'Aonde a pessoa está indo? ',
         opcoes: ['Chácara', 'Restaurante', 'Festa'],
          correta: 'Restaurante',
          videoUrl:''
      },
    ],
    Horário: [
      { pergunta: 'Qual sinal é esse?',
         opcoes: ['Manhã', 'Noite', 'Tarde'],
          correta: 'Tarde',
         imageUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/imagens%2FRela%C3%A7oes%2FSinal%20Tarde.png?alt=media&token=b131c1b3-76f4-49a1-99a2-9facf174fd92'
      },
      { pergunta: 'Qual sinal é esse?',
         opcoes: ['12h30', 'Boa noite', '22h45'],
          correta: 'Boa noite',
        videoUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FRela%C3%A7%C3%B5es%2FSem%20legenda%2FBoa%20noite.mp4?alt=media&token=b918d21e-5b06-4160-ab94-53051baa5888'
      },
      { pergunta: 'Qual sinal é esse?',
        opcoes: ['Bom dia', 'Boa tarde', 'Boa noite'],
        correta: 'Boa tarde',
        videoUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FRela%C3%A7%C3%B5es%2FSem%20legenda%2FBoa%20tarde.mp4?alt=media&token=7de9524f-f12f-4d12-bdab-c9372de6c793'
      },
      { pergunta: 'Que horas a pessoa falou?',
         opcoes: ['10h00', '12h00', '14h00'],
          correta: '14h00',
        videoUrl:'' //Adicionar URL do vídeo aqui
      },
    ],
    Hierarquia: [
      { pergunta: 'O que a pessoa é?',
         opcoes: ['Patrão', 'Líder', 'Funcionário'],
        correta: 'Patrão',
        videoUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FRela%C3%A7%C3%B5es%2FSem%20legenda%2FPatr%C3%A3o.mp4?alt=media&token=0b005007-df7c-4741-bbd9-1fce5e982674'
      },
      { pergunta: 'O que a pessoa vai fazer?',
         opcoes: ['Pedir a conta', 'Líderar', 'Analisar'],
          correta: 'Líderar',
        videoUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FRela%C3%A7%C3%B5es%2FSem%20legenda%2FLiderar.mp4?alt=media&token=62e2d3c1-642e-4693-b868-3018d579564a'
      },
      { pergunta: 'A pessoa foi promovida a qual cargo?',
         opcoes: ['Chefe', 'Supervisor', 'Líder'],
          correta: 'Supervisor',
        videoUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FRela%C3%A7%C3%B5es%2FSem%20legenda%2FSupervisor.mp4?alt=media&token=369aedc5-ee38-4048-8d89-1ca9cd0b940d'
      },
      { pergunta: 'O que a pessoa é da empresa?',
         opcoes: ['Cliente', 'Líder', 'Funcionário'],
          correta: 'Funcionário',
        videoUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FRela%C3%A7%C3%B5es%2FSem%20legenda%2FFuncion%C3%A1rio.mp4?alt=media&token=5ba3b0c1-15e0-4c47-ab3d-35a8bb49698d'
      },
    ],
    Gratidão: [
      { pergunta: 'Qual sinal de agradecimento está sendo representado?',
        opcoes: ['Obrigado', 'Grato', 'Valeu'],
         correta: 'Grato',
        videoUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FRela%C3%A7%C3%B5es%2FSem%20legenda%2FGrato.mp4?alt=media&token=c2aaf973-dd62-4135-8a09-cb77f7a64379'
      },
      { pergunta: 'Qual sinal a pessoa falou? ',
         opcoes: ['Não precisava', 'De nada', 'Obrigado'],
          correta: 'Obrigado',
        videoUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FRela%C3%A7%C3%B5es%2FSem%20legenda%2FObrigado.mp4?alt=media&token=8312b2be-874e-410d-943c-b260995dd92e'
      },
      { pergunta: 'Que sinal é esse? ',
         opcoes: ['Doação', 'Gentileza', 'Ajuda'],
          correta: 'Gentileza',
        videoUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FRela%C3%A7%C3%B5es%2FSem%20legenda%2FGentileza.mp4?alt=media&token=bedd80f3-5434-4f87-a036-5bc33a20da63'
      },
      { pergunta: 'O que a pessoa falou ouvir um obrigado?',
         opcoes: ['De nada', 'Satisfação', 'Tchau'],
          correta: 'De nada',
        videoUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FRela%C3%A7%C3%B5es%2FSem%20legenda%2FDe%20nada.mp4?alt=media&token=2b23de68-a3ea-4d93-86c8-0435ea325bd9'
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