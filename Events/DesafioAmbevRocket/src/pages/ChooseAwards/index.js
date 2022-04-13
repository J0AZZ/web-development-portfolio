import React, {useState, useCallback} from 'react';
import {Feather as Icon} from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";

import {
  Container,
  BackButton,
  Header,
  Title,
  MiniTitle,
  Content,
  AwardRowContainer,
  AwardBlockContainer,
  AwardBlock,
  AwardRank,
} from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import { Alert } from 'react-native';

export default function ChooseAwards(){
  const[level, setLevel] = useState(1);
  const[selected1, setSelected1] = useState(false);
  const[selected2, setSelected2] = useState(false);
  const[selected3, setSelected3] = useState(false);
  const[selected4, setSelected4] = useState(false);
  const[selected5, setSelected5] = useState(false);
  const[selected6, setSelected6] = useState(false);
  const[selected7, setSelected7] = useState(false);
  const[selected8, setSelected8] = useState(false);
  const[selected9, setSelected9] = useState(false);
  const[selected10, setSelected10] = useState(false);

  const navigation = useNavigation();

  const handleGoBack = useCallback(()=>{
    navigation.goBack();
  },[navigation])

  const handleCheckLevel1 = useCallback((level)=>{
    if(level === 1 || level > 1){
      Alert.alert('Parabéns!', 'Sua recompensa já pode ser resgatada!');
      setSelected1(true);
    }
    if(level < 1){
      Alert.alert('Opa!', 'Você ainda não alcaçou este nível!');
    }
  },[])

  const handleCheckLevel2 = useCallback((level)=>{
    if(level === 2 || level > 2){
      Alert.alert('Parabéns!', 'Sua recompensa já pode ser resgatada!');
      setSelected2(true);
    }
    if(level < 2){
      Alert.alert('Opa!', 'Você ainda não alcaçou este nível!');
    }
  },[])

  const handleCheckLevel3 = useCallback((level)=>{
    if(level === 3 || level > 3){
      Alert.alert('Parabéns!', 'Sua recompensa já pode ser resgatada!');
      setSelected3(true);
    }
    if(level < 3){
      Alert.alert('Opa!', 'Você ainda não alcaçou este nível!');
    }
  },[])

  const handleCheckLevel4= useCallback((level)=>{
    if(level === 4 || level > 4){
      Alert.alert('Parabéns!', 'Sua recompensa já pode ser resgatada!');
      setSelected4(true);
    }
    if(level < 4){
      Alert.alert('Opa!', 'Você ainda não alcaçou este nível!');
    }
  },[])

  const handleCheckLevel5 = useCallback((level)=>{
    if(level === 5 || level > 5){
      Alert.alert('Parabéns!', 'Sua recompensa já pode ser resgatada!');
      setSelected5(true);
    }
    if(level < 5){
      Alert.alert('Opa!', 'Você ainda não alcaçou este nível!');
    }
  },[])

  const handleCheckLevel6 = useCallback((level)=>{
    if(level === 6 || level > 6){
      Alert.alert('Parabéns!', 'Sua recompensa já pode ser resgatada!');
      setSelected6(true);
    }
    if(level < 6){
      Alert.alert('Opa!', 'Você ainda não alcaçou este nível!');
    }
  },[])

  const handleCheckLevel7 = useCallback((level)=>{
    if(level === 7 || level > 7){
      Alert.alert('Parabéns!', 'Sua recompensa já pode ser resgatada!');
      setSelected7(true);
    }
    if(level < 7){
      Alert.alert('Opa!', 'Você ainda não alcaçou este nível!');
    }
  },[])

  const handleCheckLevel8 = useCallback((level)=>{
    if(level === 8 || level > 8){
      Alert.alert('Parabéns!', 'Sua recompensa já pode ser resgatada!');
      setSelected8(true);
    }
    if(level < 8){
      Alert.alert('Opa!', 'Você ainda não alcaçou este nível!');
    }
  },[])

  const handleCheckLevel9 = useCallback((level)=>{
    if(level === 9 || level > 9){
      Alert.alert('Parabéns!', 'Sua recompensa já pode ser resgatada!');
      setSelected9(true);
    }
    if(level < 9){
      Alert.alert('Opa!', 'Você ainda não alcaçou este nível!');
    }
  },[])

  const handleCheckLevel10 = useCallback((level)=>{
    if(level === 10){
      Alert.alert('Parabéns!', 'Sua recompensa já pode ser resgatada!');
      setSelected10(true);
    }
    else{
      Alert.alert('Opa!', 'Você ainda não alcaçou este nível!');
    }
  },[])

  return(
    <Container>
      <BackButton onPress={handleGoBack}>
        <Icon name="chevron-left" size={24} color="#999591" />
      </BackButton>
      <Header>
        <Title>Resgate as recompensas do seu nível!</Title>
        <MiniTitle>{`Você está no nível ${level}!`}</MiniTitle>
      </Header>

    <ScrollView>
      <Content>
        <AwardRowContainer>
          <AwardBlockContainer>
            <AwardBlock disabled={selected1} onPress={() => handleCheckLevel1(level)}/>
            <AwardRank>Nivel 1</AwardRank>
          </AwardBlockContainer>

          <AwardBlockContainer>
            <AwardBlock disabled={selected2} onPress={() => handleCheckLevel2(level)}/>
            <AwardRank>Nivel 2</AwardRank>
          </AwardBlockContainer>
        </AwardRowContainer>

        <AwardRowContainer>
          <AwardBlockContainer>
            <AwardBlock disabled={selected3} onPress={() => handleCheckLevel3(level)}/>
            <AwardRank>Nivel 3</AwardRank>
          </AwardBlockContainer>

          <AwardBlockContainer>
            <AwardBlock disabled={selected4} onPress={() => handleCheckLevel4(level)}/>
            <AwardRank>Nivel 4</AwardRank>
          </AwardBlockContainer>
        </AwardRowContainer>

        <AwardRowContainer>
          <AwardBlockContainer>
            <AwardBlock disabled={selected5} onPress={() => handleCheckLevel5(level)}/>
            <AwardRank>Nivel 5</AwardRank>
          </AwardBlockContainer>

          <AwardBlockContainer>
            <AwardBlock disabled={selected6} onPress={() => handleCheckLevel6(level)}/>
            <AwardRank>Nivel 6</AwardRank>
          </AwardBlockContainer>
        </AwardRowContainer>

        <AwardRowContainer>
          <AwardBlockContainer>
            <AwardBlock disabled={selected7} onPress={() => handleCheckLevel7(level)}/>
            <AwardRank>Nivel 7</AwardRank>
          </AwardBlockContainer>

          <AwardBlockContainer>
            <AwardBlock disabled={selected8} onPress={() => handleCheckLevel8(level)}/>
            <AwardRank>Nivel 8</AwardRank>
          </AwardBlockContainer>
        </AwardRowContainer>

        <AwardRowContainer>
          <AwardBlockContainer>
            <AwardBlock disabled={selected9} onPress={() => handleCheckLevel9(level)}/>
            <AwardRank>Nivel 9</AwardRank>
          </AwardBlockContainer>

          <AwardBlockContainer>
            <AwardBlock disabled={selected10} onPress={() => handleCheckLevel10(level)}/>
            <AwardRank>Nivel 10</AwardRank>
          </AwardBlockContainer>
        </AwardRowContainer>

      </Content>
    </ScrollView>
    </Container>
  )
}
