import React, { useCallback } from 'react';
import {Feather as Icon} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {
  KeyboardAvoidingView,
  Platform,
  View,
  ScrollView,
} from 'react-native';

import {
  Container,
  BackButton,
  UserAvatarButton,
  Level,
  LevelText,
  UserAvatar,
  Title,
} from './styles';


export default function ProfileClient(){
  const navigation = useNavigation();

  const handleGoBack = useCallback(()=>{
    navigation.goBack();
  },[navigation])

  return(
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <Container>
            <BackButton onPress={handleGoBack}>
              <Icon name="chevron-left" size={24} color="#999591" />
            </BackButton>

            <UserAvatarButton onPress={()=>{}}>
              <UserAvatar/>
              <Level>
                <LevelText>Nivel 1</LevelText>
              </Level>
            </UserAvatarButton>

            <View>
              <Title>Fulano</Title>
            </View>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  )
}
