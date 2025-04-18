import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const fontSizeBase = width * 0.045;
const paddingBase = width * 0.06;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: paddingBase,
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: width * 0.1,
    left: width * 0.05,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    marginLeft: width * 0.015,
    fontSize: fontSizeBase,
    color: '#333',
  },
  logo: {
    width: width * 0.6,
    height: width * 0.5,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: width * 0.05,
  },
  bottomLogo: {
    width: width * 0.6,
    height: width * 0.5,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  inputLabel: {
    fontSize: fontSizeBase,
    fontWeight: '500',
    color: '#FFF',
    marginBottom: width * 0.02,
    marginLeft: width * 0.025,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffffee',
    borderRadius: width * 0.025,
    paddingHorizontal: width * 0.025,
    paddingVertical: width * 0.035,
    marginBottom: width * 0.04,
    shadowColor: '#D94929',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  icon: {
    marginRight: width * 0.02,
  },
  input: {
    flex: 1,
    fontSize: fontSizeBase,
    color: '#333',
  },
  iconButton: {
    position: 'absolute',
    right: width * 0.025,
  },
  button: {
    backgroundColor: '#FFF',
    paddingVertical: width * 0.04,
    borderRadius: width * 0.025,
    marginTop: width * 0.05,
    shadowColor: '#D94929',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
  },
  buttonText: {
    color: '#F2921D',
    fontFamily: 'Poppins-Bold',
    fontSize: fontSizeBase,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  googleButton: {
    backgroundColor: '#db4437',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: width * 0.04,
    paddingVertical: width * 0.035,
    borderRadius: width * 0.025,
  },
  googleButtonText: {
    color: '#fff',
    fontSize: fontSizeBase,
    fontWeight: 'bold',
    marginLeft: width * 0.025,
  },
  googleContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerButton: {
    marginTop: width * 0.05,
    alignSelf: 'center',
  },
  registerText: {
    color: '#FFF',
    fontSize: fontSizeBase,
    fontWeight: '600',
  },
});

export default styles;
