import { View, Text, Pressable, Image } from 'react-native';
import { Icon } from "react-native-paper";
import style from "../styles/styleSinalario";
import styleGeral from "../styles/style";

export default function Sinalario() {
  return (
    <View style={styleGeral.view}>
      <Text>
        Está com dúvidas?
      </Text>
      <Text>
        Consulte no sinalário!
      </Text>
      <Image src="../assets/icons/IconSetaInicial.png" />
      <Pressable style={style.pressable}>
        <Icon source="alphabetical-variant" size={20} />
        <Text >
          Alfabetização
        </Text>
      </Pressable>
      <Pressable style={style.pressable}>
        <Icon source="account-group" size={20} />
        <Text style={style.tema}>
          Relações
        </Text>
      </Pressable>
      <Pressable style={style.pressable}>
        <Icon source="leaf" size={20} />
        <Text style={style.tema}>
          Natureza
        </Text>
      </Pressable>
      <Pressable style={style.pressable}>
        <Icon source="brain" size={20} />
        <Text style={style.tema}>
          Anatomia
        </Text>
      </Pressable>
      <Pressable style={style.pressable}>
        <Icon source="briefcase-variant" size={20} />
        <Text style={style.tema}>
          Profissões
        </Text>
      </Pressable>
      <Pressable style={style.pressable}>
        <Icon source="train-car" size={20} />
        <Text style={style.tema}>
          Transporte
        </Text>
      </Pressable>
    </View>
  );
}