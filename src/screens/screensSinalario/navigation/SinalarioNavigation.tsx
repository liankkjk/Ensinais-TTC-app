import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SinalarioMenu from './SinalarioMenu';
import * as Sinais from '../../screensSinalario';
 
 const Stack = createNativeStackNavigator();

  export default function SinalarioNavigation(){
    return (
          <Stack.Navigator initialRouteName="Sinalário">
            <Stack.Screen name="Sinalário" component={ SinalarioMenu } options={{ headerShown: false }} />
            <Stack.Screen name="SinaisAlfabetização" component={ Sinais.SinaisAlfabetizacao } options={{ headerShown: false }} />
          </Stack.Navigator>
    );
  }