import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const ClientHeader = styled.View`
  padding-top: ${20 + getStatusBarHeight()}px;
  margin: 5px 20px;
`;

export const Title = styled.Text`
  font-size: 50px;
  font-family: 'Poppins_500Medium';
  color: #999591;
`;

export const MenuContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px;
  margin-bottom: 10px;
`;

export const MenuItem = styled.View`
  align-items: center;
  justify-content: center;
`;
export const MenuButton = styled.TouchableHighlight`
  width: 50px;
  height: 50px;
  background: #999591;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
`;

export const MenuTitle = styled.Text`
  font-size: 18px;
  font-family: 'Poppins_400Regular';
  color:  #999591;
  margin-top: 10px;
`;

export const MapContainer = styled.View`
  flex: 1;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
`;



