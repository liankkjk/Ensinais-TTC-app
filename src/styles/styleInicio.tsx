import { StyleSheet, Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get("window");

const scale = size => (width / 375) * size;

const styles = StyleSheet.create({
  container: {
    padding: scale(20),
    backgroundColor: '#fff',
    flex: 1,
    marginBottom: scale(4),
    paddingTop: scale(70),
  },
  expContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scale(15),
  },
  level: {
    marginTop: scale(4),
    marginBottom: scale(25),
  },
  expBarBackground: {
    flex: 1,
    height: scale(30),
    backgroundColor: '#ccc',
    borderRadius: scale(10),
    justifyContent: 'center',
  },
  expBarFill: {
    position: 'absolute',
    left: 0,
    height: scale(30),
    backgroundColor: '#002366',
    borderRadius: scale(10),
  },
  expText: {
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    color: '#fff',
    zIndex: 1,
    fontSize: scale(21),
  },
  levelText: {
    fontFamily: 'Poppins-Bold',
    marginLeft: scale(10),
    fontSize: scale(22),
    color: '#002366',
  },

  trofeuIcon: {
    marginLeft: scale(10),
    paddingVertical: scale(6),
    paddingHorizontal: scale(12),
    borderRadius: scale(5),
  },
  
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: scale(20),
  },
  card: {
    width: '48%',
    borderWidth: 2,
    borderColor: '#ffa500',
    borderRadius: scale(20),
    padding: scale(20),
    alignItems: 'center',
  },
  icon: {
    width: scale(80),
    height: scale(65),
    marginBottom: scale(10),
    tintColor: '#ffa500',
  },
  cardText: {
    fontFamily: 'Poppins-Medium',
    fontSize: scale(18),
    color: '#ffa500',
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
    borderRadius: scale(20),
    padding: scale(20),
    alignItems: 'center',
  },
  videoBox: {
    backgroundColor: '#4CAF50',
    width: '100%',
    height: scale(180),
    borderRadius: scale(20),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: scale(20),
  },
  videoText: {
    color: '#fff',
    fontSize: scale(18),
    fontWeight: 'bold',
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scale(2),
  },
  timerIcon: {
    marginRight: scale(8),
    marginBottom: scale(10),
  },
  timerText: {
    fontSize: scale(18),
    fontFamily: 'Poppins-Medium',
    color: '#FF0000',
    marginBottom: scale(10),
    textAlign: 'right',
  },
  quizQuestion: {
    fontSize: scale(18),
    fontFamily: 'Poppins-Medium',
    color: '#ff8c00',
    marginBottom: scale(20),
    textAlign: 'center',
  },
  quizOption: {
    backgroundColor: '#ff8c00',
    width: '100%',
    paddingVertical: scale(12),
    borderRadius: scale(25),
    marginBottom: scale(12),
    alignItems: 'center',
  },
  quizOptionText: {
    color: '#fff',
    fontSize: scale(16),
    fontFamily: 'Poppins-Medium',
  },
  resultText: {
    fontSize: scale(18),
    fontFamily: 'Poppins-Medium',
    color: '#002366', 
    marginBottom: scale(10),  
    textAlign: 'center',  
  },
  modalCloseButton: {
    backgroundColor: '#ffa500',
    paddingHorizontal: scale(20),
    paddingVertical: scale(10),
    borderRadius: scale(10),
    marginTop: scale(10),
  },
  modalCloseText: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: scale(14),
  },
  modalImage: {
    width: scale(100),
    height: scale(100),
    marginBottom: scale(20),
    resizeMode: 'contain',
  }
});

export default styles;