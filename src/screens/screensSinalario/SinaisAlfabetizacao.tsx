import * as React from 'react';
import { ScrollView, SafeAreaView, Text, Pressable } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';
import { sinaisAlfabeto } from '../components/Sinais';
import SinalItem from '../components/SinalItem';
import style from '../../styles/styleSinalario';
import styles from '../../styles/styleNavigation';

export default function SinaisAlfabetizacao({ navigation }: any) {
    
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

    const sinaisFiltrados = sinaisAlfabeto.filter(({ title, subtitle }) => {
        const query = normalizeSignal(searchQuery);
        return ( normalizeSignal(title).includes(query) || normalizeSignal(subtitle).includes(query) );
      });

    return (
        <SafeAreaView style={{ flex: 1, minHeight: '100%' }}>   
            <ScrollView style={style.sinais}>
                <Searchbar style={style.searchBar} searchAccessibilityLabel={searchQuery} rippleColor={'#C6C6C6'} placeholder="Pesquise o sinal que deseja!" value={searchQuery} onChangeText={setSearchQuery} />
                {sinaisFiltrados.length > 0 ? (
                    sinaisFiltrados.map((sinal) => (
                        <SinalItem key={sinal.id} {...sinal} />
                    ))
                ) : (
                    <Text>
                        Nenhum sinal foi encontrado...
                    </Text>
                )}
                <Pressable style={style.goBack} onPress={() => navigation.navigate('Sinalario')}>
                    <Text style={style.textGoBack}>Voltar ao menu</Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    );
};