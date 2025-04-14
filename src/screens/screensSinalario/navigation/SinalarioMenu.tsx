import { ScrollView, Text, Pressable, Image } from 'react-native';
import { Icon } from "react-native-paper";
import style from "../../../styles/styleSinalario";

export default function SinalarioMenu({ navigation }) {
    return (
      <ScrollView style={style.view}>
        <Text>
          Está com dúvidas?
        </Text>
        <Text>
          Consulte no sinalário!
        </Text>
        <Image src="../assets/icons/IconSetaInicial.png" />
        <Pressable style={style.pressable} onPress={() => navigation.navigate('SinaisAlfabetização')}>
          <Icon source="alphabetical-variant" size={40} />
          <Text>
            Alfabetização
          </Text>
        </Pressable>
        <Pressable style={style.pressable} onPress={() => navigation.navigate('SinaisRelações')}>
          <Icon source="account-group" size={40} />
          <Text style={style.tema}>
            Relações
          </Text>
        </Pressable>
        <Pressable style={style.pressable} onPress={() => navigation.navigate('SinaisNatureza')}>
          <Icon source="leaf" size={40} />
          <Text style={style.tema}>
            Natureza
          </Text>
        </Pressable>
        <Pressable style={style.pressable} onPress={() => navigation.navigate('SinaisAnatomia')}>
          <Icon source="brain" size={40} />
          <Text style={style.tema}>
            Anatomia
          </Text>
        </Pressable>
        <Pressable style={style.pressable} onPress={() => navigation.navigate('SinaisProfissões')}>
          <Icon source="briefcase-variant" size={40} />
          <Text style={style.tema}>
            Profissões
          </Text>
        </Pressable>
        <Pressable style={style.pressable} onPress={() => navigation.navigate('SinaisTransporte')}>
          <Icon source="train-car" size={40} />
          <Text style={style.tema}>
            Transporte
          </Text>
        </Pressable>
      </ScrollView>
    );
   }