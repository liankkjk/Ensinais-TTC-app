import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const fontSizeBase = width * 0.04;  
const paddingBase = width * 0.05;  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: paddingBase,
    justifyContent: 'center',
  },
  logo: {
    width: width * 0.35,  
    height: width * 0.4,  
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: height * 0.08, 
    marginBottom: height * 0.01,
  },
  bottomLogo: {
    width: width * 0.45,  
    height: width * 0.4, 
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: height * 0.04, 
  },
  inputLabel: {
    fontSize: fontSizeBase,
    fontWeight: '500',
    color: '#FFF',
    marginBottom: width * 0.008, 
    marginLeft: width * 0.02, 
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffffee',
    borderRadius: width * 0.02, 
    paddingHorizontal: width * 0.02, 
    paddingVertical: width * 0.03,
    marginBottom: width * 0.02,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  icon: {
    marginRight: width * 0.015,
  },
  input: {
    flex: 1,
    fontSize: fontSizeBase,
    color: '#333',
  },
  button: {
    backgroundColor: '#FFF',
    paddingVertical: width * 0.035,
    borderRadius: width * 0.02,
    marginTop: width * 0.04,
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
    marginTop: width * 0.04,
    alignSelf: 'center',
  },
  loginText: {
    color: '#FFF',
    fontSize: fontSizeBase,
    fontWeight: '600',
  },
});

export default styles;
