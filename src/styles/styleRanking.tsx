import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const paddingHorizontal = width * 0.05;
const paddingVertical = height * 0.025;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical,
    paddingHorizontal,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: height * 0.06,
    left: width * 0.02,
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: height * 0.012,
    paddingHorizontal: width * 0.035,
    marginTop: height * 0.012,
  },
  backText: {
    marginTop: height * 0.01,
    marginLeft: width * 0.015,
    fontSize: width * 0.04,
    color: '#fff',
  },
  title: {
    fontSize: width * 0.08,
    color: '#002366',
    marginTop: height * 0.09,
    marginBottom: height * 0.04,
    textAlign: 'center',
    left: width * 0.05,
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
    borderRadius: width * 0.025,
    padding: width * 0.03,
    marginBottom: height * 0.02,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: height * 0.002 },
    elevation: 3,
  },
  medalIcon: {
    width: width * 0.07,
    textAlign: 'center',
    marginRight: width * 0.025,
  },
  rank: {
    fontSize: width * 0.045,
    width: width * 0.07,
    textAlign: 'center',
    marginRight: width * 0.025,
  },
  profilePic: {
    width: width * 0.13,
    height: width * 0.13,
    borderRadius: (width * 0.13) / 2,
    marginRight: width * 0.04,
  },
  playerInfo: {
    flex: 1,
  },
  nickname: {
    fontSize: width * 0.045,
  },
  level: {
    fontSize: width * 0.038,
    color: '#666',
  },
});

export default styles;