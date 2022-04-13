import React from 'react'
import {FontAwesome5 as Icon} from '@expo/vector-icons';

import Button from '../../components/Button';

import {
  Container,
  Background,
  ChecksContainer,
  ChecksText,
  Content,
  BarName,
  BarAddress,
} from './styles';

export default function DashboardBar(){
  return(
    <Container>
      <Background>
        <ChecksContainer>
          <Icon name='user' size={20} color='#999591'/>
          <ChecksText>50</ChecksText>
        </ChecksContainer>
      </Background>

      <Content>
        <BarName>Bar da Ambev</BarName>
        <BarAddress>Endereço do Bar</BarAddress>
        <Button>Editar Perfil</Button>
      </Content>
    </Container>
  )
}
