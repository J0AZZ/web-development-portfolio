import React, { useCallback, useEffect, useState } from 'react';
import {useNavigation} from '@react-navigation/native';

import api from '../../services/api';
import Button from '../../components/Button';

import {
Container,
Background,
BackgroundText,
Content,
RegisterButton,
RegisterText,
} from './styles';

export default function OnBoarding(){
  const navigation = useNavigation();

  const handleSignUpNavigation = useCallback(()=>{
    navigation.navigate('ChooseBarClientSignUp');
  },[])

  const handleSignInNavigation = useCallback(()=>{
    navigation.navigate('SignIn')
  })

  return(
    <Container>
      <Background>
        <BackgroundText>Sua jornada no ForestPub está para começar...</BackgroundText>
      </Background>

      <Content>
        <Button onPress={handleSignInNavigation}>Entrar</Button>
        <RegisterButton onPress={handleSignUpNavigation}>
          <RegisterText>Registre-se</RegisterText>
        </RegisterButton>
      </Content>
    </Container>
  )
}
