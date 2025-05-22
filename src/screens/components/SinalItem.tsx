import React from 'react';
import { Sinal } from '../components/Sinais';
import SetaSinalario from '../components/SetaSinalario';
import { useVideoPlayer, VideoView } from 'expo-video';
import { View, TouchableOpacity, Text } from 'react-native';
import style from '../../styles/styleSinalario';
import Animated, { useDerivedValue, useSharedValue, withTiming } from 'react-native-reanimated';

export default function SinalItem({ id, title, subtitle, url }: Sinal) {
    const [isAccordionOpen, setAccordionOpen] = React.useState(false);
    const open = useSharedValue(false);

    const toggleAccordion = () => {
        open.value = !open.value;
        setAccordionOpen(!isAccordionOpen);
    };

    const progress = useDerivedValue(() =>
        open.value ? withTiming(1) : withTiming(0)
    );

    return (
        <View>
            <TouchableOpacity style={style.buttonSinal} onPress={toggleAccordion}>
                <Text style={style.buttonText}>{String(title)}</Text>
                <SetaSinalario progress={progress} />
            </TouchableOpacity>

            <View style={{ marginBottom: 20 }}>
                {isAccordionOpen && (
                    <Animated.View style={style.accordion}>
                        <View>
                            <Text style={style.subtitle}>{String(subtitle)}</Text>
                            {url ? (
                                <VideoComponent url={url} isVisible={isAccordionOpen} />
                            ) : (
                                <Text style={{ color: '#999' }}>Vídeo não disponível</Text>
                            )}
                        </View>
                    </Animated.View>
                )}
            </View>
        </View>
    );
}

function VideoComponent({ url, isVisible }: { url: string; isVisible: boolean }) {
    const player = useVideoPlayer(url, (player) => {
        player.loop = true;
    });

    React.useEffect(() => {
        if (!isVisible && player?.pause) {
            player.pause();
        }
    }, [isVisible]);

    return (
        <VideoView
            style={style.videoSinal}
            player={player}
            allowsFullscreen
            allowsPictureInPicture
            startsPictureInPictureAutomatically
        />
    );
}