import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/mobile';
import { KeyboardAvoidingView, ScrollView } from 'react-native';
import {useNavigation} from '@react-navigation/native'

import Button from '../../components/Button';
import Input from '../../components/input';
import {Container, Title} from './styles';

export default function SignIn(){
  const navigation = useNavigation();
  const formRef = useRef(null);

  const handleDashboardNavigation = useCallback(()=>{
    navigation.navigate('DashboardClient')
  },[])

  return(
    <KeyboardAvoidingView
        style={{ flex: 1}}
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
      <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="handled"
      >
        <Container>
          <Title>Cadastre-se Agora!</Title>
          <Form ref={formRef} onSubmit={handleDashboardNavigation} style={{marginTop: 50}}>
            <Input
            type="text"
            autoCorrect={false}
            autoCapitalize="words"
            name="nome"
            placeholder="Nome"
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
            type="text"
            autoCorrect={false}
            autoCapitalize="none"
            name="cpf"
            placeholder="CPF - Apenas números"
            />
            <Input
            name="password"
            type="password"
            secureTextEntry
            placeholder="Senha"
            returnKeyType="send"
            />

            <Button onPress={() => formRef.current.submitForm()} style={{width: 200, marginLeft: 50}}>Cadastrar</Button>
          </Form>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
