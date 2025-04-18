import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  view: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flex: 1,
  },
  pressable: {
    paddingVertical: 30,
    paddingHorizontal: 60,
    backgroundColor: '#FFFFFF',
    borderColor: '#092A95',
    borderWidth: 1,
    marginBottom: 10,
  },
  tema: {
    fontSize: 15,
    color: '#092A95',
    fontFamily: 'Poppins-SemiBold',
  },
  accordion: {
    backgroundColor: '#C6C6C6',
    borderRadius: 15,
    padding: 30,
    marginHorizontal: 15,
  },
  sinais: {
    flex: 1,                
    paddingTop: 20,         
    paddingHorizontal: 20,  
    gap: 16,                
  },
});

export default style;
