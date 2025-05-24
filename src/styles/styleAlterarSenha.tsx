import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const fontSizeBase = width * 0.05;
const paddingBase = width * 0.06;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: paddingBase,
    paddingVertical: height * 0.05,
  },
  backButton: {
    position: 'absolute',
    top: height * 0.05,
    left: width * 0.02,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  backText: {
    fontFamily: "Poppins-Bold",
    fontSize: fontSizeBase,
    color: '#333',
    marginLeft: 10, 
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: fontSizeBase * 1.5,
    color: '#002366',
    textAlign: 'center',
    marginBottom: height * 0.05,
  },
  inputLabel: {
    fontFamily: "Poppins-Bold",
    fontSize: fontSizeBase,
    fontWeight: '500',
    color: '#333',
    marginBottom: width * 0.02,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffffee',
    borderRadius: width * 0.025,
    paddingHorizontal: width * 0.025,
    paddingVertical: width * 0.035,
    marginBottom: width * 0.08,
    shadowColor: '#D94929',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  input: {
    fontFamily: "Poppins-Medium",
    flex: 1,
    fontSize: fontSizeBase,
    color: '#333',
  },
  button: {
    backgroundColor: '#F2921D',
    paddingVertical: width * 0.04,
    borderRadius: width * 0.025,
    marginTop: width * 0.05,
    width: '100%',
    shadowColor: '#D94929',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
  },
  buttonText: {
    color: '#FFF',
    fontFamily: 'Poppins-Bold',
    fontSize: fontSizeBase,
    alignSelf: 'center',
  },
  iconButton: {
    position: 'absolute',
    right: width * 0.03, 
    top: '100%',  
    transform: [{ translateY: -26 }], 
  },
});

export default styles;