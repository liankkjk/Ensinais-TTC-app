import { StyleSheet, Dimensions } from 'react-native';

const paddingBase = 5; 

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: height * 0.06, 
    left: paddingBase, 
    zIndex: 1, 
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 10,
  },
  backText: {
    marginTop: 8,
    marginLeft: width * 0.015,
    fontSize: 16,
    color: '#fff',
  },
  title: {
    fontSize: 32,
    color: '#002366',
    marginTop: 70,
    marginBottom: 30,
    textAlign: 'center',
    left: 20,
  },
  listContent: {
    width: '100%',
    alignItems: 'center',
  },
  playerRow: {
    width: width * 0.9,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  medalIcon: {
    width: 30,
    textAlign: 'center',
    marginRight: 10,
  },
  rank: {
    fontSize: 18,
    width: 30,
    textAlign: 'center',
    marginRight: 10,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  playerInfo: {
    flex: 1,
  },
  nickname: {
    fontSize: 16,
  },
  level: {
    fontSize: 14,
    color: '#666',
  },
});

export default styles;