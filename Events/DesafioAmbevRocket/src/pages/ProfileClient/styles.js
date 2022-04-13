import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 70px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #999591;
  font-family: 'Poppins_500Medium';
  margin: 24px auto;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  position: relative;
`;

export const Level = styled.View`
  position: absolute;
  bottom: 0;
  right: 25%;
  width: 60px;
  height: 40px;
  background: #bbb;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const LevelText = styled.Text`
  font-size: 16px;
  font-family: 'Poppins_400Regular';
  color: black;
`;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 93px;
  align-self: center;
  background: #999591;
`;

