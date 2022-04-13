import React, {useCallback, useState, useEffect} from 'react';
import {FontAwesome as Icon} from '@expo/vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native';
import * as Location from 'expo-location';

import {
Container,
Header,
BackButton,
BackButtonText,
Content,
BarImage,
BarName,
BarAddress,
ChecksContainer,
ChecksText,
CheckInButton,
CheckInButtonText,
ScanCodeButton,
ButtonsContainer,
} from './styles';
import { Alert } from 'react-native';

export default function MarkerDetail(){
  const [currentPosition, setCurrentPosition] = useState([0,0]);
  const [barPosition, setBarPosition] = useState([0,0]);
  const [checkin, setCheckin] = useState(false);

  const navigation = useNavigation();

  useEffect(()=>{
    async function loadPosition(){
      const location = await Location.getCurrentPositionAsync();

      const {latitude, longitude} = location.coords;
      const userLatitude = latitude.toFixed(2);
      const userLongitude = longitude.toFixed(2);

      setCurrentPosition([
        userLatitude,
        userLongitude,
      ])
    }
    loadPosition();
  },[])

  useEffect(()=>{
    async function getPosition(){
    const rua = 'Rua Antero Manuel de Sá Filho, 85';

    const location = await Location.geocodeAsync(rua);
    const barLatitude = location[0].latitude.toFixed(2);
    const barLongitude = location[0].longitude.toFixed(2);

    setBarPosition([
      barLatitude,
      barLongitude,
    ])
    }
    getPosition();
  },[])

  const handleBackNavigation = useCallback(()=>{
    navigation.goBack();
  },[])

  const handleUncheckIn = useCallback(()=>{
    setCheckin(false);
  },[])

  const handleCheckIn = useCallback(()=>{
    if(currentPosition[0] !== barPosition[0] && currentPosition[1] !== barPosition[1]){
      Alert.alert('Erro no check-in', 'Vá para o bar selecionado para realizar o check-in');
    }

    if(currentPosition[0] === barPosition[0] && currentPosition[1] === barPosition[1]){
      Alert.alert('Sucesso', 'Seus pontos foram creditados!');
      setCheckin(true);

      setTimeout(handleUncheckIn, 5000);
    }
  },[])

  const handleCameraClick = useCallback(()=>{
    navigation.navigate('ScanCode');
  },[])

  return(
    <Container>

      <Header>
        <BackButton onPress={handleBackNavigation}>
          <Icon name='chevron-left' size={30} color='#bbb' />
          <BackButtonText>Voltar</BackButtonText>
        </BackButton>
      </Header>

      <Content>
        <BarImage>
          <ChecksContainer>
            <Icon name='user' size={20} color='#999591'/>
            <ChecksText>50</ChecksText>
          </ChecksContainer>
        </BarImage>
        <BarName>Bar do Zé</BarName>
        <BarAddress>Endereço do bar</BarAddress>
        <ButtonsContainer>
          <CheckInButton onPress={handleCheckIn} disabled={checkin}>
            <CheckInButtonText>Fazer check-in</CheckInButtonText>
          </CheckInButton>
          <ScanCodeButton onPress={handleCameraClick} disabled={!checkin}>
            <Icon name='barcode' size={20} color='#fff'/>
          </ScanCodeButton>
        </ButtonsContainer>
      </Content>


    </Container>
  )
}
