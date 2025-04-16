import * as React from 'react';
import { ScrollView, SafeAreaView, TouchableOpacity, Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Accordion from '../components/Accordion';
import style from '../../styles/styleSinalario';

export default function SinaisAlfabetizacao() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [isAccordionOpen, setAccordionOpen] = React.useState(false);

    const toggleAccordion = () =>{
        setAccordionOpen(!isAccordionOpen);
    }

    return (
        <SafeAreaView>
        <ScrollView style={style.sinais}>
            <Searchbar rippleColor={'#C6C6C6'} placeholder="Pesquise o sinal que deseja!" value={searchQuery} onChangeText={setSearchQuery} />
            <View>
                <TouchableOpacity onPress={toggleAccordion}>
                    <Text>Letra A</Text>
                </TouchableOpacity>
                {isAccordionOpen && (Accordion('Sinal da Letra A', 0)) }
            </View>
        </ScrollView>
        </SafeAreaView>
    )
}