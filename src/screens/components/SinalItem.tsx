import React from 'react';
import { Sinal } from '../components/Sinais';
import { useVideoPlayer, VideoView } from 'expo-video';
import { View, TouchableOpacity, Text, Image} from 'react-native';
import style from '../../styles/styleSinalario';

export default function SinalItem ({ id, title, subtitle, url }: Sinal) {
    const player = useVideoPlayer(url, (player) => {
            player.loop = true;
        });

const [isAccordionOpen, setAccordionOpen] = React.useState(false);
const toggleAccordion = () => setAccordionOpen(!isAccordionOpen);

return (
        <View>
            <TouchableOpacity onPress={toggleAccordion}>
                <Text>{String(title)}</Text>
            </TouchableOpacity>
            {isAccordionOpen && (
            <View style={style.accordion}>
                <View>
                    <Text>{String(subtitle)}</Text>
                    <VideoView style={style.videoSinal} player={player} allowsFullscreen allowsPictureInPicture startsPictureInPictureAutomatically/>
                </View>
            </View>)}
        </View>
    );
};