import React, { useCallback } from 'react';
import {useNavigation} from '@react-navigation/native'

import {Container, Title, BlocksContainer, BlockContainer, Block, BlockText} from './styles';

export default function ChooseBarClientSignUp() {
  const navigation = useNavigation();

  const handleSignUpClient = useCallback(()=>{
    navigation.navigate('SignUpClient')
  },[])

  const handleSignUpBar = useCallback(()=>{
    navigation.navigate('SignUpBar')
  },[])

  return(
    <>
      <Container>
        <Title>Cadastre-se Agora!</Title>

        <BlocksContainer>
          <BlockContainer>
            <Block onPress={handleSignUpClient}/>
            <BlockText>Cliente</BlockText>
          </BlockContainer>

          <BlockContainer>
            <Block onPress={handleSignUpBar}/>
            <BlockText>Bar</BlockText>
          </BlockContainer>
        </BlocksContainer>
      </Container>
    </>
  );
}
