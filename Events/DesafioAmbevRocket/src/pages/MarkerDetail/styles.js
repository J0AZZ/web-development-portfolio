import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
`;
export const Header = styled.View`
  padding-top: ${20 + getStatusBarHeight()}px;
  align-items: flex-start;
  margin: 30px 20px;
  flex-direction: row;

`;

export const BackButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const BackButtonText = styled.Text`
  font-size: 20px;
  color: #999591;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
`;

export const BarImage = styled.View`
  width: 100%;
  height: 60%;
  border-radius: 10px;
  background: #ccc;
  position: relative;
  margin-bottom: 30px;
`;

export const ChecksContainer = styled.View`
  width: 60px;
  height: 40px;
  background: #f4f4f4;
  border-radius: 10px;
  position: absolute;
  bottom: 20px;
  right: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 8px;
`;

export const ChecksText = styled.Text`
  font-size: 18px;
  font-family: 'Poppins_400Regular';
  color: #999591;
`;

export const BarName = styled.Text`
  font-size: 30px;
  font-family: 'Poppins_500Medium';
  color: #999591;
  margin-top: 15px;
`;

export const BarAddress = styled.Text`
  font-size: 20px;
  font-family: 'Poppins_400Regular';
  color: #999591;
`;

export const CheckInButton = styled.TouchableOpacity`
  width: 180px;
  height: 60px;
  border-radius: 10px;
  background: #0000ff;
  margin-top: 25px;
  align-items: center;
  justify-content: center;
  opacity: ${props => props.disabled ? 0.2 : 1}
`;

export const CheckInButtonText = styled.Text`
  font-size: 18px;
  font-family: 'Roboto_400Regular';
  color: #fff;
`;

export const ScanCodeButton = styled.TouchableOpacity`
  width: 70px;
  height: 60px;
  border-radius: 10px;
  background: #0000ff;
  margin-top: 25px;
  align-items: center;
  justify-content: center;
  opacity: ${props => props.disabled ? 0.2 : 1}
`;


export const ButtonsContainer = styled.View`
  flex-direction: row;
  width: 300px;
  align-items: center;
  justify-content: space-between;
`;


