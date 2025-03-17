import * as React from 'react';
import { View, Text, Image} from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';

export default function Accordion () {
    return(
        <View>
            <View>
                <Image source={require('../../assets/alfabeto.png')}/>
                <Text>Sinal da Letra A</Text>
            </View>
        </View>
    )
}
