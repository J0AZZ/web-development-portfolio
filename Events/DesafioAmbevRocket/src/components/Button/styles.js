import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 70%;
  height: 60px;
  background: #0000ff;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const ButtonText = styled.Text`
  font-family: 'Poppins_400Regular';
  font-size: 16px;
  color: #fff;
`;
