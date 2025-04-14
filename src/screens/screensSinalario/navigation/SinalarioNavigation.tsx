import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SinalarioMenu from './SinalarioMenu';
import * as Sinais from '../../screensSinalario';
import SinaisAlfabetizacao from '../SinaisAlfabetizacao';
 
 const Stack = createNativeStackNavigator();

  export default function SinalarioNavigation(){
    return (
          <Stack.Navigator initialRouteName="Sinalário">
            <Stack.Screen name="Sinalário" component={ SinalarioMenu } />
            <Stack.Screen name="SinaisAlfabetização" component={ Sinais.SinaisAlfabetizacao } />
          </Stack.Navigator>
    );
  }