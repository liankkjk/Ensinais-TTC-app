import React, { useState, useEffect, useRef, useCallback } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Modal, Animated, SafeAreaView, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Video, ResizeMode } from 'expo-av';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { FIREBASE_DB, FIREBASE_AUTH } from '../../../../FireBaseConfig';
import MyAlertComponent from '../../../../components/alertCompLvl';
import styles from '../../../styles/styleModulos';

export default function TransporteNavigation({ navigation }) {
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
    ['Trânsito', 'Veículos'],
    ['Ônibus', 'Metro']
  ];

  const imagensPorTema = {
    Trânsito: require('../../../../assets/Trânsito.png'),
    Veículos: require('../../../../assets/Veículos.png'),
    Ônibus: require('../../../../assets/Ônibus.png'),
    Metro: require('../../../../assets/Metro.png'),
  };

  const perguntasPorTema = {
    Trânsito: [
      { pergunta: 'Qual sinal é esse? ',
         opcoes: ['Carros', 'Sinalização', 'Pessoas'],
          correta: 'Sinalização',
         videoUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FTransporte%2FSem%20legenda%2FSinaliza%C3%A7%C3%A3o.mp4?alt=media&token=b1b56104-4c74-4537-b5e8-59d0253c506d'
      },
      { pergunta: 'A rua está?',
         opcoes: ['Bloqueada', 'Estreita', 'Vazia'],
          correta: 'Bloqueada',
          videoUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FTransporte%2FSem%20legenda%2FBloqueada.mp4?alt=media&token=29558144-dac2-4e4b-8787-42aedf8a7c41'
      },
      { pergunta: 'O que está sendo representado na imagem?',
         opcoes: ['Calçada', 'Semáforo', 'Avenida'],
          correta: 'Semáforo',
          imageUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/imagens%2FTransporte%2FSinal%20Sem%C3%A1foro.png?alt=media&token=8ca58308-e9a6-4d41-b0d8-a19f7dae727e'
      },
      { pergunta: 'A placa sinaliza para?',
         opcoes: ['Seguir', 'Reduzir', 'Parar'],
          correta: 'Parar',
          videoUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FTransporte%2FSem%20legenda%2FParar.mp4?alt=media&token=f114a280-1d50-43a0-b3f8-eef28eecc041'
        },
    ],
    Veículos: [
      { pergunta: 'Qual o significado do sinal acima?',
        opcoes: ['Carro', 'Ônibus', 'Moto'],
        correta: 'Carro',
        imageUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/imagens%2FTransporte%2FSinal%20Carro.png?alt=media&token=33920420-155c-4a97-a7fb-01b1f1032fde'
      },
      { pergunta: 'Qual o significado do sinal acima?',
         opcoes: ['Caminhão', 'Pedestre', 'Moto'],
          correta: 'Moto',
          videoUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FTransporte%2FSem%20legenda%2FMoto.mp4?alt=media&token=1aaf3fbe-70b8-4861-80d4-b3150988b1c1'
      },
      { pergunta: 'Qual o significado do sinal acima?',
         opcoes: ['Bicicleta', 'Navio', 'Metro'],
          correta: 'Metro',
          imageUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/imagens%2FTransporte%2FSinal%20Metro.png?alt=media&token=32468422-33fb-4433-b642-5866a8ecb268'
      },
      { pergunta: 'Qual o significado do sinal acima?',
         opcoes: ['Carro', 'Ônibus', 'Farol'],
          correta: 'Ônibus',
          videoUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FTransporte%2FSem%20legenda%2F%C3%94nibus.mp4?alt=media&token=f3a5fa2d-5576-4a20-8cfb-f55a3de6401f'
      },
    ],
    Ônibus: [
      { pergunta: 'O que a pessoa está dizendo?',
        opcoes: ['Bom dia', 'Roda', 'Ponto de Ônibus'],
        correta: 'Ponto de Ônibus',
        videoUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FTransporte%2FSem%20legenda%2FPonto%20de%20%C3%B4nibus.mp4?alt=media&token=6e45b49c-5c96-410f-bff1-40566d6f2851'
      },
      { pergunta: 'Qual o significado do sinal acima?',
        opcoes: ['Passe', 'Terminal', 'Motorista'],
        correta: 'Terminal',
        imageUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/imagens%2FTransporte%2FSinal%20Terminal.png?alt=media&token=f7ad5a29-0d58-4411-b12b-b39b9b3d1078'
      },
      { pergunta: 'Qual o significado do sinal acima?',
        opcoes: ['Sentar', 'Descer', 'Passe de ônibus'],
        correta: 'Passe de ônibus',
        videoUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FTransporte%2FSem%20legenda%2FPasse%20de%20%C3%B4nibus.mp4?alt=media&token=b08cedbb-8726-46dc-90b7-b7ecbe589dea'
      },
      { pergunta: 'O que a pessoa está dizendo?',
        opcoes: ['Rodoviária', 'Terminal', 'Roda'],
        correta: 'Rodoviária',
        videoUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FTransporte%2FSem%20legenda%2FRodovi%C3%A1ria.mp4?alt=media&token=c17f65e5-8987-436e-9a0f-12f60df7407d' //Adicionar vídeo sem legenda aqui
      },
    ],
    Metro: [
      { pergunta: 'Que lugar é esse?',
        opcoes: ['Estação', 'Trem', 'Trilhos'],
        correta: 'Estação',
        imageUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/imagens%2FTransporte%2FSinal%20Esta%C3%A7%C3%A3o.png?alt=media&token=db091ff6-d931-46ba-bbb1-fa2d689aa2f5'
      },
      { pergunta: 'Qual linha a pessoa quer ir?',
        opcoes: ['Linha Vermelha', 'Linha Azul', 'Linha Amarela'],
        correta: 'Linha Amarela',
        videoUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FTransporte%2FSem%20legenda%2FLinha%20amarela.mp4?alt=media&token=91341ce2-d41b-41c1-aa41-44a5dea718cf'
      },
      { pergunta: 'Qual o significado do sinal acima?',
        opcoes: ['11h', 'Plataforma', 'Busão'],
        correta: 'Plataforma',
        imageUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/imagens%2FTransporte%2FSinal%20Plataforma.png?alt=media&token=dfecb522-6000-4872-9733-2f2f6eb73456'
      },
      { pergunta: 'O que a pessoa esta pedindo?',
        opcoes: ['Passe', 'Comida', 'Informação'],
        correta: 'Informação',
        videoUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FTransporte%2FSem%20legenda%2FInforma%C3%A7%C3%A3o.mp4?alt=media&token=7ad8d7ba-a2eb-47b3-9a70-ec1a64e8e049'
      },
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