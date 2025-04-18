import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const fontSizeBase = width * 0.045;
const paddingBase = width * 0.06;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: paddingBase,
    justifyContent: 'center',
  },
  logo: {
    width: width * 0.40, 
    height: width * 0.45, 
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: height * 0.05, 
    marginBottom: height * 0.01,
  },
  bottomLogo: {
    width: width * 0.5, 
    height: width * 0.45, 
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: height * 0.05, 
  },
  inputLabel: {
    fontSize: fontSizeBase,
    fontWeight: '500',
    color: '#FFF',
    marginBottom: width * 0.01,
    marginLeft: width * 0.025,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffffee',
    borderRadius: width * 0.025,
    paddingHorizontal: width * 0.025,
    paddingVertical: width * 0.035,
    marginBottom: width * 0.03,
    shadowColor: '#000',
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
  button: {
    backgroundColor: '#FFF',
    paddingVertical: width * 0.04,
    borderRadius: width * 0.025,
    marginTop: width * 0.05,
    shadowColor: '#2e64e5',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
  },
  buttonText: {
    color: '#F2921D',
    fontSize: fontSizeBase,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  loginButton: {
    marginTop: width * 0.05,
    alignSelf: 'center',
  },
  loginText: {
    color: '#FFF',
    fontSize: fontSizeBase,
    fontWeight: '600',
  },
});

export default styles;