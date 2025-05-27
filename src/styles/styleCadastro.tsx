import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const fontSizeBase = width * 0.035;  
const paddingBase = width * 0.04;    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: paddingBase,
    justifyContent: 'center',
  },
  logo: {
    width: width * 0.28,
    height: width * 0.32,  
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: height * 0.06, 
    marginBottom: height * 0.002,
  },
  smallText: {
    fontFamily: "Poppins-Bold",
    color: '#fff',
    fontSize: fontSizeBase * 0.85, 
    marginTop: 2,
    marginBottom: 8,
    textAlign: 'left',
  },
  bottomLogo: {
    width: width * 0.38,  
    height: width * 0.36,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: height * 0.03,
  },
  inputLabel: {
    fontSize: fontSizeBase,
    fontFamily: "Poppins-Medium",
    fontWeight: '500',
    color: '#FFF',
    marginBottom: width * 0.002,
    marginLeft: width * 0.015,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffffee',
    borderRadius: width * 0.015, 
    paddingHorizontal: width * 0.015,
    paddingVertical: width * 0.025,
    marginBottom: width * 0.015,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  icon: {
    marginRight: width * 0.01,
  },
  input: {
    fontFamily: "Poppins-Medium",
    flex: 1,
    fontSize: fontSizeBase,
    color: '#333',
  },
  button: {
    backgroundColor: '#FFF',
    paddingVertical: width * 0.03,
    borderRadius: width * 0.015,
    marginTop: width * 0.03,
    shadowColor: '#2e64e5',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
  },
  buttonText: {
    color: '#F2921D',
    fontSize: fontSizeBase,
    fontFamily: "Poppins-Bold",
    alignSelf: 'center',
  },
  loginButton: {
    marginTop: width * 0.03,
    alignSelf: 'center',
  },
  loginText: {
    fontFamily: "Poppins-Bold",
    color: '#FFF',
    fontSize: fontSizeBase,
    fontWeight: '600',
  },
});

export default styles;
