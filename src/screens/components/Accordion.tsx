import * as React from 'react';
import { View, Text, Image} from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';
import { videosAlfabeto } from './Videos';
import { imagensAlfabeto } from './Imagens';
import style from '../../styles/styleSinalario';

export default function Accordion(signalTitle: string, codSinal: number) {

    const player = useVideoPlayer(videosAlfabeto[codSinal].url, (player) => {
        player.loop = true;
        player.play();
    });


    return(
        <View style={style.accordion}>
            <View>
                <Image source={{uri: imagensAlfabeto[codSinal].imagem}}/>
                <Text>{signalTitle}</Text>
            </View>
            <View>
                <VideoView player={player} allowsFullscreen allowsPictureInPicture startsPictureInPictureAutomatically/>
            </View>
        </View>
    )
}
