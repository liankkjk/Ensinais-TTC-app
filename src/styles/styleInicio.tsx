import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get("window");

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
  timerContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginTop: 2, 
  },

  timerIcon: {
    marginRight: 8, 
    marginBottom: 10, 
  },

  timerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF0000',
    marginTop: 0,
    marginBottom: 10, 
    textAlign: 'right',
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
  modalImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
    resizeMode: 'contain',
  }
  
});

export default styles;
