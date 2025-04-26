import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const fontSizeBase = width * 0.05;
const paddingBase = width * 0.03;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
  },
  backText: {
    marginLeft: width * 0.015,
    fontSize: fontSizeBase,
    color: '#333',
  },
  titulo: {
    fontSize: fontSizeBase * 1.5,
    fontWeight: 'bold',
    color: '#002366',
    textAlign: 'center',
    marginBottom: height * 0.05,
  },
  imagemPerfil: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  trocarFoto: {
    fontSize: fontSizeBase,
    color: '#D94929',
    textAlign: 'center', 
    marginBottom: 20,
  },
  input: {
    width: '90%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 0,
    borderRadius: width * 0.025,
    paddingHorizontal: 20,
    marginBottom: 20,
    fontSize: fontSizeBase,
    backgroundColor: '#ffffffee',
    shadowColor: '#D94929',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  botao: {
    backgroundColor: '#F2921D',
    paddingVertical: width * 0.04, 
    borderRadius: width * 0.025, 
    marginTop: width * 0.02,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#D94929', 
    shadowOpacity: 0.4, 
    shadowOffset: { width: 0, height: 4 }, 
    shadowRadius: 8,
    elevation: 5, 
  },
  botaoTexto: {
    color: '#FFF',
    fontSize: fontSizeBase,
    fontWeight: 'bold',
    alignSelf: 'center', 
  },
});

export default styles;