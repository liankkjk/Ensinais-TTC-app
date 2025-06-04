import React, { useState, useEffect, useRef, useCallback } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Modal, Animated, SafeAreaView, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { FIREBASE_DB, FIREBASE_AUTH } from '../../../../FireBaseConfig';
import MyAlertComponent from '../../../../components/alertCompLvl';
import styles from '../../../styles/styleModulos';
import { Video, ResizeMode } from 'expo-av';

export default function ProfissoesScreen({ navigation }) {
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
    ['Tecnologia', 'Saúde'],
    ['Serviços', 'Atendimento']
  ];

  const imagensPorTema = {
    Tecnologia: require('../../../../assets/Tecnologia.png'),
    Saúde: require('../../../../assets/Saúde.png'),
    Serviços: require('../../../../assets/ServiçosGerais.png'),
    Atendimento: require('../../../../assets/Engenharia.png'),
  };

  const perguntasPorTema = {
    Tecnologia: [
      { pergunta: 'Qual o significado do sinal acima?',
        opcoes: ['Desenvolvedor', 'Engenheiro', 'Analista de Sistemas'],
        correta: 'Desenvolvedor',
        videoUrl: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FProfiss%C3%B5es%2FSem%20legenda%2FDesenvolvedor.mp4?alt=media&token=44fde827-ef58-4cff-b536-f58f18a2199a'
       },
      { pergunta: 'Qual conceito de T.I a pessoa falou?',
        opcoes: ['Inteligência Artificial', 'Backend', 'Framework'],
        correta: 'Inteligência Artificial',
        videoUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FProfiss%C3%B5es%2FSem%20legenda%2FIntelig%C3%AAncia%20Artificial.mp4?alt=media&token=c59ce732-cdde-45c4-b5c8-c9f05a8e625e'
      },
      { pergunta: 'O que a pessoa disse?',
        opcoes: ['Hardware', 'Mouse', 'Tecnologia'],
        correta: 'Tecnologia',
        imageUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/imagens%2FProfiss%C3%B5es%2FSinal%20Tecnologia.png?alt=media&token=51d3e7dc-71c0-47cb-9248-c493c14f9ab3'
      },
      { pergunta: 'Qual o curso que a pessoa pretende fazer?',
         opcoes: ['Ciência da computação', 'Design Digital', 'ADS'],
          correta: 'Design Digital',
          videoUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FProfiss%C3%B5es%2FSem%20legenda%2FDesign%20Digital.mp4?alt=media&token=b6390e21-b7b0-48f6-8a46-247dbaa4a66e'
      },
    ],
    Saúde: [
      { pergunta: 'Qual é a profissão representada?',
        opcoes: ['Nutricionista', 'Enfermeiro', 'Socorrista'],
        correta: 'Nutricionista',
        imageUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/imagens%2FProfiss%C3%B5es%2FSinal%20Nutricionista.png?alt=media&token=bce4f2d5-230a-4a35-aff4-929b54e720a6'
      },
      { pergunta: 'O que a pessoa falou?',
         opcoes: ['Exame', 'Encontro', 'Consulta'],
          correta: 'Consulta',
        videoUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FProfiss%C3%B5es%2FSem%20legenda%2FConsulta.mp4?alt=media&token=be5d1c87-ffe7-468c-82ff-f653d45fb2e9'
      },
      { pergunta: 'Qual é a profissão representada?',
        opcoes: ['Médico', 'Dentista', 'Psicólogo'],
        correta: 'Médico',
        imageUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/imagens%2FProfiss%C3%B5es%2FSinal%20M%C3%A9dico.png?alt=media&token=72aa486b-ca2e-4037-9b95-15cbafd62b60'
      },
      { pergunta: 'Qual o significado do sinal acima?',
         opcoes: ['Médico', 'Enfermeiro', 'Fisioterapeuta'],
          correta: 'Enfermeiro',
        videoUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FProfiss%C3%B5es%2FSem%20legenda%2FEnfermeira.mp4?alt=media&token=0d678a66-116b-4644-95d8-626cbfb6ea99'
      },
    ],
    Serviços: [
      { pergunta: 'Qual profissão está sendo referenciada na imagem?',
        opcoes: ['Jardineiro', 'Cozinheiro', 'Segurança'],
        correta: 'Segurança',
        imageUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/imagens%2FProfiss%C3%B5es%2FSinal%20Seguran%C3%A7a.png?alt=media&token=1bd8bd38-ee89-43d1-aff9-f4452ec6622b'
      },
      { pergunta: 'Qual o significado do sinal acima?',
         opcoes: ['Pintor', 'Uber', 'Motorista'],
          correta: 'Uber',
          videoUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FProfiss%C3%B5es%2FSem%20legenda%2FUber.mp4?alt=media&token=b3b253f6-4987-4880-96c0-77bb152addc3'
        
      },
      { pergunta: 'Qual o significado do sinal acima?',
        opcoes: ['Garçom', 'Manobrista', 'Cientista'],
        correta: 'Garçom',
        imageUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/imagens%2FProfiss%C3%B5es%2FSinal%20Gar%C3%A7om.png?alt=media&token=34342d3c-a85b-4165-9f44-81020541e3c1'
      },
      { pergunta: 'Qual o significado do sinal acima?',
         opcoes: ['Diretor', 'Professor', 'Zelador'],
          correta: 'Professor',
          videoUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FProfiss%C3%B5es%2FSem%20legenda%2FProfessor.mp4?alt=media&token=a4d4c151-2ee2-4f9c-920c-87edf9ba9c3f'
      },
    ],
    Atendimento: [
      { pergunta: 'Qual o significado do sinal acima?',
        opcoes: ['Atendimento', 'Pagamento', 'Cliente'],
        correta: 'Pagamento',
        imageUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/imagens%2FProfiss%C3%B5es%2FSinal%20Pagamento.png?alt=media&token=37d84ce4-c08a-4d78-a028-ea993de8c844'
      },
      { pergunta: 'O que a pessoa esta dizendo?',
         opcoes: ['Vendedor', 'Engenharia', 'Preço'],
          correta: 'Preço',
        videoUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FProfiss%C3%B5es%2FSem%20legenda%2FPre%C3%A7o.mp4?alt=media&token=828e7b72-f080-46bb-9f2f-8d5259a9a28f'
      },
      { pergunta: 'Qual o significado do sinal acima?',
        opcoes: ['Produtos', 'Funcionário', 'Vendedor'],
        correta: 'Vendedor',
        imageUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/imagens%2FProfiss%C3%B5es%2FSinal%20Vendedor.png?alt=media&token=c0d1f220-7f1d-47cd-aa79-f0ca06789dd0'
      },
      { pergunta: 'O que a pessoa esta dizendo?',
        opcoes: ['Ajuda', 'Promoções', 'Pagamento'],
        correta: 'Ajuda',
        videoUrl:'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FProfiss%C3%B5es%2FSem%20legenda%2FAjuda.mp4?alt=media&token=398b628b-c3d8-4d61-8924-f8b80c1e129f'
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