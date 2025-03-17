import * as React from 'react';
import { ScrollView, SafeAreaView, TouchableOpacity, Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Accordion from '../components/Accordion';

export default function SinalarioSinais() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [isAccordionOpen, setAccordionOpen] = React.useState(false);

    const toggleAccordion = () =>{
        setAccordionOpen(!isAccordionOpen);
    }

    return (
        <SafeAreaView>
        <ScrollView>
            <Searchbar placeholder="Pesquise o sinal que deseja!" value={searchQuery} onChangeText={setSearchQuery} />
            <View>
                <TouchableOpacity onPress={toggleAccordion}>
                    <Text>Letra A</Text>
                </TouchableOpacity>
                {isAccordionOpen && (<Accordion />) }
            </View>
        </ScrollView>
        </SafeAreaView>
    )
}