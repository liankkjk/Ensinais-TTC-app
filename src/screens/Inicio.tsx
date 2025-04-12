import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function Inicio() {
  return (
    <View style={styles.container}>
      {/* Barra de EXP */}
      <View style={styles.expContainer}>
        <View style={styles.expBarBackground}>
          <View style={styles.expBarFill} />
          <Text style={styles.expText}>80 EXP / 200 EXP</Text>
        </View>
        <Text style={styles.levelText}>Level 20</Text>
        <TouchableOpacity style={styles.trofeuButton}>
          <Text style={styles.trofeuText}>trofeu</Text>
        </TouchableOpacity>
      </View>

      {/* Linha com dois cards "Saudações" */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.card}>
          <Image
           // source={require('./assets/handshake.png')}
            style={styles.icon}
          />
          <Text style={styles.cardText}>Saudações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Image
            //source={require('./assets/handshake.png')}
            style={styles.icon}
          />
          <Text style={styles.cardText}>Animais</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.card}>
          <Image
           // source={require('./assets/handshake.png')}
            style={styles.icon}
          />
          <Text style={styles.cardText}>Comidas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Image
            //source={require('./assets/handshake.png')}
            style={styles.icon}
          />
          <Text style={styles.cardText}>Profissões</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.card}>
          <Image
           // source={require('./assets/handshake.png')}
            style={styles.icon}
          />
          <Text style={styles.cardText}>Estudo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Image
            //source={require('./assets/handshake.png')}
            style={styles.icon}
          />
          <Text style={styles.cardText}>Transporte</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  expContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 75,
    marginTop: 15,
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
    width: '40%', // 80/200
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
    marginBottom: 25, // espaçamento entre as linhas
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
});