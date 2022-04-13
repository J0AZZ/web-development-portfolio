import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
`;

export const Background = styled.View`
  width: 100%;
  height: 75%;
  background: #aaa;
  position: relative;
  padding: 0 20px;
  align-items: center;
`;

export const BackgroundText = styled.Text`
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 15px;
  font-size: 30px;
  color: #f4f4f4;
  max-width: 400px;
  text-align: center;
`;

export const Content = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 50px 0;
`;

export const RegisterButton = styled.TouchableOpacity``;

export const RegisterText = styled.Text`
  font-size: 14px;
  color: #999591;
`;
