import * as React from 'react';
import { View, Text, Image} from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';
import alfabeto from '../../assets/icon.png';

export default function Accordion () {
    return(
        <View>
            <View>
                <Image source={alfabeto}/>
                <Text>Sinal da Letra A</Text>
            </View>
        </View>
    )
}
