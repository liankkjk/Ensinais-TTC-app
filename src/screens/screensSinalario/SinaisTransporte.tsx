import * as React from 'react';
import { ScrollView, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Searchbar } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';
import { sinaisTransporte } from '../components/Sinais';
import SinalItem from '../components/SinalItem';
import style from '../../styles/styleSinalario';
import styles from '../../styles/styleNavigation';
import * as Font from 'expo-font';

export default function SinaisTransporte({ navigation }: any) {
    const [fontsLoaded] = Font.useFonts({
            'Poppins-Bold': require('../../../assets/fonts/Poppins-Bold.ttf'),
            'Poppins-Medium': require('../../../assets/fonts/Poppins-Medium.ttf'),
        });
                
        if (!fontsLoaded) {
            return <Text>Carregando fontes...</Text>;
        }
        
    
    useFocusEffect(
        React.useCallback(()=>{
            navigation.getParent()?.setOptions({
                tabBarStyle: { display: 'none' },
            });

            return () => {
                navigation.getParent()?.setOptions({
                    tabBarStyle: styles.tabBarStyle
                });
            };
        }, [])
    );
    
    const [searchQuery, setSearchQuery] = React.useState('');
    const normalizeSignal = (text:string) => text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    const sinaisFiltrados = sinaisTransporte.filter(({ title, subtitle }) => {
        const query = normalizeSignal(searchQuery);
        return ( normalizeSignal(title).includes(query) || normalizeSignal(subtitle).includes(query) );
      });

    return (
        <SafeAreaView style={{ flex: 1, minHeight: '100%' }}>   
            <ScrollView style={style.sinais}>
                <TouchableOpacity style={style.backButton} onPress={() => navigation.goBack()}>
                    <MaterialCommunityIcons name="arrow-left" size={30} color="#092A95" />
                    <Text style={style.backText}>Voltar</Text>
                </TouchableOpacity>
                <Searchbar style={style.searchBar} searchAccessibilityLabel={searchQuery} rippleColor={'#C6C6C6'} placeholder="Pesquise o sinal que deseja!" value={searchQuery} onChangeText={setSearchQuery} />
                {sinaisFiltrados.length > 0 ? (
                    sinaisFiltrados.map((sinal) => (
                        <SinalItem key={sinal.id} {...sinal} />
                    ))
                ) : (
                    <Text style={style.noSearch}>
                        Nenhum sinal foi encontrado...
                    </Text>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};