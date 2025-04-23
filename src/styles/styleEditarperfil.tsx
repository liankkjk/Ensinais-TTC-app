import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const scale = size => (width / 375) * size;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  imagemPerfil: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 10,
    backgroundColor: '#ccc',
  },
  trocarFoto: {
    color: '#F2A516',
    fontSize: 18,
    marginBottom: 25,
    textAlign: 'center',
  },
  input: {
    width: '90%',
    color: 'black',
    backgroundColor: '#C6C6C6',
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
    fontSize: 18,
  },
  botao: {
    backgroundColor: '#F2A516',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  botaoTexto: {
    color: 'white',
    fontSize: 18,
    borderRadius: 10,
    borderColor: '#F2A516'
  },
});

export default styles;
