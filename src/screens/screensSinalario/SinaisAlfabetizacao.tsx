import * as React from 'react';
import { ScrollView, SafeAreaView, Text } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { sinaisAlfabeto } from '../components/Sinais';
import SinalItem from '../components/SinalItem';
import style from '../../styles/styleSinalario';

export default function SinaisAlfabetizacao({ navigation }) {
    
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
            </ScrollView>
        </SafeAreaView>
    );
};