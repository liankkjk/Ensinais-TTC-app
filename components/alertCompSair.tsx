import React, { useEffect, useRef, useState } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View, Animated, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { Audio } from 'expo-av';

const { width } = Dimensions.get('window');

interface AlertProps {
  visible: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  message?: string;
  singleButtonMode?: boolean;
}

const ExitConfirmationAlert = ({
  visible,
  onClose,
  onConfirm,
  message = 'Deseja realmente sair do aplicativo?',
  singleButtonMode = false,
}: AlertProps) => {
  const [showModal, setShowModal] = useState(visible);
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  const isSuccessMessage = message.includes('Um e-mail de recuperação foi enviado.');
  const isErrorMessage = message.includes('Preencha') || message.toLowerCase().includes('erro');
  const isExitMessage = message.includes('sair') || message.toLowerCase().includes('deseja realmente sair');

  const getImageSource = () => {
    if (isSuccessMessage) {
      return require('../assets/JonathanParabens.png');
    }
    if (isErrorMessage) {
      return require('../assets/JonathanErro.png');
    }
    if (isExitMessage) {
      return require('../assets/JonathanTriste.png');
    }
    return require('../assets/JonathanTriste.png');
  };

  useEffect(() => {
    const playErrorSound = async () => {
      const { sound } = await Audio.Sound.createAsync(
        require('../assets/sounds/error.mp3')
      );
      await sound.playAsync();
    };

    const playSuccessSound = async () => {
      const { sound } = await Audio.Sound.createAsync(
        require('../assets/sounds/success.mp3')
      );
      await sound.playAsync();
    };

    if (visible) {
      setShowModal(true);

      if (singleButtonMode && isErrorMessage && !isSuccessMessage) {
        playErrorSound();
      }

      if (isSuccessMessage) {
        playSuccessSound();
      }

      Animated.parallel([
        Animated.spring(scaleAnim, {
          toValue: 1,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(scaleAnim, {
          toValue: 0.8,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setShowModal(false);
      });
    }
  }, [visible]);

  if (!showModal) return null;

  return (
    <Modal transparent visible={showModal} animationType="none">
      <View style={styles.overlay}>
        <Animated.View style={{ transform: [{ scale: scaleAnim }], opacity: opacityAnim }}>
          <LinearGradient colors={['#d94929', '#F27127']} style={styles.dialogContainer}>
            <Animatable.View animation="bounceIn" duration={1000} style={styles.iconContainer}>
              <Image source={getImageSource()} style={styles.iconImage} />
            </Animatable.View>

            <Text style={styles.messageText}>{isErrorMessage ? 'Preencha os campos corretamente!' : message}</Text>

            {singleButtonMode ? (
              <TouchableOpacity style={styles.button} onPress={onClose}>
                <Text style={styles.buttonText}>Ok</Text>
              </TouchableOpacity>
            ) : (
              <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.button} onPress={onConfirm}>
                  <Text style={styles.buttonText}>Sim</Text>
                </TouchableOpacity>
                <Animatable.View animation="pulse" iterationCount="infinite" duration={1500}>
                  <TouchableOpacity style={styles.button} onPress={onClose}>
                    <Text style={styles.buttonText}>Não</Text>
                  </TouchableOpacity>
                </Animatable.View>
              </View>
            )}
          </LinearGradient>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialogContainer: {
    width: width * 0.8,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    alignSelf: 'center',
  },
  messageText: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 24,
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    gap: 20,
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  buttonText: {
    color: '#F27127',
    fontWeight: 'bold',
    fontSize: 16,
  },
  iconContainer: {
    marginBottom: 20,
  },
  iconImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
});

export default ExitConfirmationAlert;
