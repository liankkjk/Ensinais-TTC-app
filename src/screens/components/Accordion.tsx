import * as React from 'react';
import { View, Text, Image} from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';
import { videosAlfabeto } from './Videos';

export default function Accordion () {

    const player = useVideoPlayer(videosAlfabeto[0].url, (player) => {
        player.loop = true;
        player.play();
    });

    return(
        <View>
            <View>
                <Image source={{}}/>
                <Text>Sinal da Letra A</Text>
            </View>
            <View>
                <VideoView player={player} allowsFullscreen allowsPictureInPicture startsPictureInPictureAutomatically/>
            </View>
        </View>
    )
}
