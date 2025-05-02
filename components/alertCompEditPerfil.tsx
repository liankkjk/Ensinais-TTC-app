import React, { useEffect, useRef, useState } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View, Animated, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Audio } from 'expo-av';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

interface AlertProps {
  visible: boolean;
  onClose: () => void;
}

const ProfileUpdatedAlert = ({ visible, onClose }: AlertProps) => {
  const [showModal, setShowModal] = useState(visible);
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/sounds/success.mp3')
    );
    await sound.playAsync();
  };

  useEffect(() => {
    if (visible) {
      setShowModal(true);
      playSound();
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
            <Animatable.View animation="bounceIn" duration={3000} style={styles.iconContainer}>
              <Image source={require('../assets/JonathanParabens.png')} style={styles.iconImage} />
            </Animatable.View>

            <Text style={styles.title}>Perfil atualizado com sucesso</Text>

            <Animatable.View animation="pulse" iterationCount="infinite" duration={3000}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  onClose();
                  navigation.goBack();
                }}
              >
                <Text style={styles.buttonText}>OK</Text>
              </TouchableOpacity>
            </Animatable.View>
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
    width: '95%',
    maxWidth: 600,
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 24,
    textAlign: 'center',
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
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});

export default ProfileUpdatedAlert;