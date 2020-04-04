import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { FlatList } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    padding: 0 24px;
    padding-top: 40px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Image = styled.Image`
  
`;

export const HeaderText = styled.Text`
    font-size: 15px;
    color: #737380;
`;

export const HeaderTextBold = styled.Text`
    font-weight: bold;
`;

export const Title = styled.Text`
    font-size: 30px;
    margin-bottom: 16px;
    margin-top: 48px;
    color: #13131a;
    font-weight: bold;
`;

export const Description = styled.Text`
    font-size: 16px;
    line-height: 24px;
    color: #737380;
`;

export const List = styled(FlatList).attrs({
    showsVerticalScrollIndicator: false,
})`
    margin-top: 32px;
`;

export const Incident = styled.View`
    padding: 24px;
    border-radius: 8px;
    background-color: #fff;
    margin-bottom: 16px;
`;

export const IncidentPropety = styled.Text`
    font-size: 14px;
    color: #41414d;
    font-weight: bold;
`;    

export const IncidentPropetyText = styled.Text`
    margin-top: 8px;
    font-size: 14px;
    color: #737380;
    margin-bottom: 24px;
    font-weight: bold;
`;


export const IncidentText = styled.Text`
    margin-top: 8px;
    font-size: 14px;
    color: #41414d;
    font-weight: bold;
`;

export const IncidentDescription = styled.Text`
    margin-top: 8px;
    font-size: 14px;
    color: #737380;
    font-weight: bold;
`;

export const IncidentValueText = styled.Text`
    margin-top: 24px;
    font-size: 14px;
    color: #41414d;
    font-weight: bold;
`;

export const IncidentValue = styled.Text`
    margin-top: 8px;
    font-size: 15px;
    margin-bottom: 24px;
    color: #737380;
`;

export const DetailsButton = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const DetailsButtonText = styled.Text`
    color: #e02041;
    font-size: 15px;
    font-weight: bold;
`;