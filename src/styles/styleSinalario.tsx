import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const style = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: width * 0.03,
    paddingVertical: 20,
    paddingTop: 70,
  },
  pressable: {
    height: height * 0.15, 
    paddingHorizontal: width * 0.08,
    backgroundColor: '#FFFFFF',
    borderColor: '#092A95',
    borderWidth: 1,
    borderRadius: 12,  
    marginBottom: 20, 
    alignItems: 'center',
    justifyContent: 'flex-start', 
    flexDirection: 'row', 
    elevation: 5, 
  },
  pressableText: {
    fontSize: width * 0.07,  
    color: '#092A95',
    fontFamily: 'Poppins-SemiBold',
    marginLeft: 10, 
  },
  pressableIcon: {
    color: '#092A95',
    fontSize: width * 0.16,
  },
  pressableHover: {
    backgroundColor: '#092A95',
    borderColor: '#FFFFFF',
  },
  accordion: {
    backgroundColor: '#F2F2F2',
    borderRadius: 15,
    padding: width * 0.08,
    marginHorizontal: 15,
    alignContent: 'center',
    justifyContent: 'center',
  },
  sinais: {
    flex: 1,                
    paddingVertical: 20,         
    paddingHorizontal: 20,
    gap: 16,
    backgroundColor: '#fff',
  },
  imgSeta: {
    width: width * 0.15,     
    height: height * 0.06,  
    alignSelf: 'center',
  },
  tituloSina: {
    fontSize: width * 0.14,   
    textAlign: 'center',     
    color: '#f2921d',        
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 0,        
  },
  tituloSinaSub: {
    fontSize: width * 0.11,   
    textAlign: 'center',     
    color: '#f2a516',        
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 0,        
  },
  videoSinal: {
    width: 200,
    height: 300,       
  },
  searchBar: {
    backgroundColor: '#F2F2F2',
    marginTop: 60,
    marginBottom: 30,
  },
  buttonSinal: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F27127',
    borderRadius: 10,
    marginBottom: 20,
    padding: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 20,
    color: '#F27127',
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '800',
  },
  seta: {
    width: 20,
    height: 20,
  },
  goBack: {
    backgroundColor: '#F2921D',
    padding: 15,
    borderRadius: 30,
    marginBottom: 30,
    marginHorizontal: 30
  },
  textGoBack: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 700,
    color: '#FFF',
    fontFamily: 'Poppins-SemiBold',
  },

});

export default style;