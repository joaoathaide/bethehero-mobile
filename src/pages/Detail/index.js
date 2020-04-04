import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import { formatPrice } from "../../util/format";

import logoImg from '../../assets/logo.png';

import { 
  Container,
  Header,
  Incident,
  IncidentPropety,
  IncidentPropetyText,
  IncidentText,
  IncidentDescription,
  IncidentValueText,
  IncidentValue,
  ContactBox,
  HeroTitle,
  HeroDescription,
  Actions,
  Action,
  ActionText
} from './styles';

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;
  const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${formatPrice(incident.value)} `;

  function navigateBack() {
    navigation.goBack();
  }

  function sendEmail() {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [incident.email],
      body: message,
    });
  }

  function sendWhatsApp() {
    Linking.openURL(`whatsapp://send?phone=55${incident.whatsapp}&text=${message}`);
  }

  return (
    <Container>
      <Header>
        <Image source={logoImg} />
        
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={17} color="#E02041" />
        </TouchableOpacity>
      </Header>

      <Incident>
        <IncidentPropety>ONG:</IncidentPropety>
  <IncidentPropetyText>{incident.name} de {incident.city}/{incident.uf}</IncidentPropetyText>

        <IncidentText>CASO:</IncidentText>
        <IncidentDescription>{incident.title}</IncidentDescription>

        <IncidentValueText>VALOR:</IncidentValueText>
        <IncidentValue>{formatPrice(incident.value)}</IncidentValue>
      </Incident>

      <ContactBox>
        <HeroTitle>Salve o dia!</HeroTitle>
        <HeroTitle>Seja o herói desse caso.</HeroTitle>

        <HeroDescription>Entre em contato:</HeroDescription>

        <Actions>
          <TouchableOpacity onPress={sendWhatsApp}>
            <Action>
              <ActionText>WhatsApp</ActionText>
            </Action>
          </TouchableOpacity>

          <TouchableOpacity onPress={sendEmail}>
            <Action>
              <ActionText>E-mail</ActionText>
            </Action>
          </TouchableOpacity>
        </Actions>
      </ContactBox>
    </Container>
  );
}
