import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/mobile';
import { KeyboardAvoidingView, ScrollView } from 'react-native';
import {useNavigation} from '@react-navigation/native'

import Button from '../../components/Button';
import Input from '../../components/input';
import {Container, Title, MiniTitle} from './styles';

export default function SignIn(){
  const formRef = useRef(null);
  const navigation = useNavigation();

  const handleDashboardBar = useCallback(()=>{
    navigation.navigate('DashboardBar');
  },[])

  return(
    <KeyboardAvoidingView
        style={{ flex: 1}}
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
      <ScrollView
          keyboardShouldPersistTaps="handled"
      >
        <Container>
          <Title>Cadastre-se Agora!</Title>
          <MiniTitle>Dados empresarias</MiniTitle>
          <Form ref={formRef} onSubmit={handleDashboardBar} style={{marginTop: 20}}>
            <Input
            type="text"
            autoCorrect={false}
            autoCapitalize="words"
            name="nome"
            placeholder="Nome"
            />
            <Input
            type="text"
            autoCorrect={false}
            autoCapitalize="none"
            name="cnpj"
            placeholder="CNPJ - Apenas números"
            />
            <Input
            type="email"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            name="email"
            placeholder="E-mail"
            />
            <Input
            name="password"
            type="password"
            secureTextEntry
            placeholder="Senha"
            returnKeyType="send"
            />

            <MiniTitle style={{marginLeft: 93, marginBottom: 15}}>Endereço</MiniTitle>

            <Input
            type="text"
            autoCorrect={false}
            autoCapitalize="words"
            name="rua"
            placeholder="Rua"
            />
            <Input
            type="text"
            autoCorrect={false}
            name="numero"
            placeholder="Número"
            />
            <Input
            type="text"
            autoCorrect={false}
            autoCapitalize="words"
            name="bairro"
            placeholder="Bairro"
            />
            <Input
            type="text"
            autoCorrect={false}
            autoCapitalize="words"
            name="cidade"
            placeholder="Cidade"
            />
            <Input
            type="text"
            autoCorrect={false}
            autoCapitalize="words"
            name="uf"
            placeholder="UF"
            />

            <Button onPress={() => formRef.current.submitForm()} style={{width: 200, marginLeft: 50}}>Cadastrar</Button>
          </Form>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
