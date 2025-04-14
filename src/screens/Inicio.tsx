import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
} from 'react-native';

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

  const cards = [
    ['Saudações', 'Animais'],
    ['Comidas', 'Profissões'],
    ['Estudo', 'Transporte']
  ];

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
      {
        pergunta: 'Qual o significado do sinal acima?',
        opcoes: ['Boa noite', 'Boa tarde', 'Bom dia'],
        correta: 'Boa noite',
      },
    ],
    // Você pode adicionar perguntas similares para os outros temas aqui.
  };

  const abrirModal = (tema: string) => {
    setCardSelecionado(tema);
    setPerguntaAtual(0);
    setXpGanho(0);
    setModalVisible(true);
    setBotaoSelecionado(null);
    setMensagemAcerto('');
  };

  const fecharModal = () => {
    setModalVisible(false);
    setBotaoSelecionado(null);
    setMensagemAcerto('');
  };

  const responder = (opcao: string, index: number) => {
    if (!cardSelecionado) return;

    const pergunta = perguntasPorTema[cardSelecionado][perguntaAtual];
    const correta = pergunta.correta;

    setBotaoSelecionado(index);

    if (opcao === correta) {
      setBotaoCorreto(true);
      setMensagemAcerto('Parabéns você acertou!! ganhou 5 de XP <3');
      setXpGanho((prev) => prev + 5);

      setTimeout(() => {
        setMensagemAcerto('');
        setBotaoSelecionado(null);
        setBotaoCorreto(false);

        if (perguntaAtual + 1 < 5) {
          setPerguntaAtual(perguntaAtual + 1);
        } else {
          setModalVisible(false);
          setModalFinalVisible(true);
        }
      }, 2000);
    } else {
      setMensagemAcerto('Poxa você errou, tente outra vez');
      setBotaoCorreto(false);
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
    <View style={styles.container}>
      {/* Barra de EXP */}
      <View style={styles.expContainer}>
        <View style={styles.expBarBackground}>
          <View style={styles.expBarFill} />
          <Text style={styles.expText}>80 EXP / 200 EXP</Text>
        </View>
        <TouchableOpacity style={styles.trofeuButton}>
          <Text style={styles.trofeuText}>trofeu</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.level}>
        <Text style={styles.levelText}>Level 20</Text>
      </View>

      {/* Cards */}
      <ScrollView contentContainerStyle={{ paddingBottom: 110 }} showsVerticalScrollIndicator={false}>
        {cards.map((linha, index) => (
          <View style={styles.row} key={index}>
            {linha.map((item, i) => (
              <TouchableOpacity key={i} style={styles.card} onPress={() => abrirModal(item)}>
                <Image style={styles.icon} />
                <Text style={styles.cardText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>

      {/* Modal de Perguntas */}
      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={fecharModal}>
        <View style={styles.modalOverlay}>
          <View style={styles.quizContainer}>
            <View style={styles.videoBox}>
              <Text style={styles.videoText}>vídeo do sinal</Text>
            </View>

            <Text style={styles.quizQuestion}>{perguntas[perguntaAtual]?.pergunta}</Text>

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
          </View>
        </View>
      </Modal>

      {/* Modal Final */}
      <Modal animationType="slide" transparent={true} visible={modalFinalVisible} onRequestClose={voltarAoMenu}>
        <View style={styles.modalOverlay}>
          <View style={styles.quizContainer}>
            <View style={[styles.videoBox, { backgroundColor: '#ccc' }]}>
              <Text style={styles.videoText}>Imagem aqui</Text>
            </View>
            <Text style={styles.quizQuestion}>
              Meus parabéns você acertou todas as perguntas, seu sucesso é nosso orgulho!
            </Text>
            <Text style={{ fontSize: 18, marginBottom: 20 }}>XP total: {xpGanho}</Text>
            <TouchableOpacity style={styles.modalCloseButton} onPress={voltarAoMenu}>
              <Text style={styles.modalCloseText}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

// (Você pode manter os mesmos estilos que já tem, não há necessidade de alterar.)

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
    marginBottom: 4,
  },
  expContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  level: {
    marginTop: 10,
    marginBottom: 35,
  },
  expBarBackground: {
    flex: 1,
    height: 30,
    backgroundColor: '#ccc',
    borderRadius: 10,
    justifyContent: 'center',
  },
  expBarFill: {
    position: 'absolute',
    left: 0,
    height: 30,
    width: '40%',
    backgroundColor: '#002366',
    borderRadius: 10,
  },
  expText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    zIndex: 1,
  },
  levelText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#002366',
    fontWeight: 'bold',
  },
  trofeuButton: {
    backgroundColor: '#0a4',
    marginLeft: 10,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  trofeuText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  card: {
    width: '48%',
    borderWidth: 2,
    borderColor: '#ffa500',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
    tintColor: '#ffa500',
  },
  cardText: {
    fontSize: 16,
    color: '#ffa500',
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quizContainer: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  videoBox: {
    backgroundColor: '#4CAF50',
    width: '100%',
    height: 180,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  videoText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  quizQuestion: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff8c00',
    marginBottom: 20,
    textAlign: 'center',
  },
  quizOption: {
    backgroundColor: '#ff8c00',
    width: '100%',
    paddingVertical: 12,
    borderRadius: 25,
    marginBottom: 12,
    alignItems: 'center',
  },
  quizOptionText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalCloseButton: {
    backgroundColor: '#ffa500',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  modalCloseText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
