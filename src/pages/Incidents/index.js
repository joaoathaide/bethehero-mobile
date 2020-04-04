import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FlatList, TouchableOpacity } from 'react-native';

import { formatPrice } from "../../util/format";
import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import { 
    Container,
    Header,
    Image,
    HeaderText,
    HeaderTextBold,
    Title,
    Description,
    List,
    Incident,
    IncidentPropety,
    IncidentPropetyText,
    IncidentText,
    IncidentDescription,
    IncidentValueText,
    IncidentValue,
    DetailsButton,
    DetailsButtonText
 } from './styles';

export default function Incidents() {
    const navigation = useNavigation();
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);


    function navigateToDetail(incident) {
        navigation.navigate('Detail', { incident });
    }

    async function loadIncidents() {
        if (loading) {
            return;
        }

        if (total > 0 && incidents.length === total) {
            return;
        }

        setLoading(true);

        const response = await api.get('incidents', {
            params: { page },
        });
        

        setIncidents([ ...incidents, ...response.data ]);
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);

    }

    useEffect(() => {
        loadIncidents();
    }, []); 

    return (
    <Container>
        <Header>
            <Image source={logoImg} />
            <HeaderText>
                Total de <HeaderTextBold>{total} casos.</HeaderTextBold>
            </HeaderText>
        </Header>

        <Title>Bem-vindo!</Title>
        <Description>Escolha um dos casos abaixo e salve o dia.</Description>

        <List 
            data={incidents}
            keyExtractor={incident => String(incident.id)}
            onEndReached={loadIncidents}
            onEndReachedThreshold={0.1}
            renderItem={({ item: incident }) => (
                <Incident>
                    <IncidentPropety>ONG:</IncidentPropety>
                    <IncidentPropetyText>{incident.name}</IncidentPropetyText>

                    <IncidentText>CASO:</IncidentText>
                    <IncidentDescription>{incident.title}</IncidentDescription>

                    <IncidentValueText>VALOR:</IncidentValueText>
                    <IncidentValue>{formatPrice(incident.value)}</IncidentValue>

                    <TouchableOpacity onPress={() => navigateToDetail(incident)}>
                        <DetailsButton>
                            <DetailsButtonText>Ver mais detalhes</DetailsButtonText>
                            <Feather name="arrow-right" size={17} color="#E02041" />
                        </DetailsButton>
                    </TouchableOpacity>
                </Incident>
            )}
        />
    </Container>
    );
}
