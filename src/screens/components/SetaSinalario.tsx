import { Image, View } from 'react-native';
import style from '../../styles/styleSinalario';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import React from 'react';

type Props = {
    progress: Animated.SharedValue<number>;
};

export default function SetaSinalario({progress}: Props) {
    const iconStyle = useAnimatedStyle(() => ({
        transform: [{rotate: `${progress.value * 180}deg`}],
    }));
    return (
        <Animated.View style={iconStyle}>
            <Image source={require('../../../assets/icons/Seta Sinais.png')} style={style.imgSeta} />
        </Animated.View>
    );

};