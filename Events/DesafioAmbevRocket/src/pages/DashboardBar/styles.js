import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
`;

export const Background = styled.View`
  width: 100%;
  height: 70%;
  margin-top: 50px;
  background: darkgray;
  position: relative;
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

export const Content = styled.View`
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

export const BarName = styled.Text`
  font-size: 30px;
  font-family: 'Poppins_500Medium';
  color: #999591;
`;

export const BarAddress = styled.Text`
  font-size: 20px;
  font-family: 'Poppins_400Regular';
  color: #999591;
`;
