import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 280px;
`;

export const Title = styled.Text`
  font-size: 50px;
  font-family: 'Poppins_500Medium';
  color: #aaa;
`;

export const BlocksContainer = styled.View`
  flex-direction: row;
  max-width: 500px;
  align-items: center;
  justify-content: space-between;
`;

export const BlockContainer = styled.View`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 30px;
`;

export const Block = styled.TouchableOpacity`
  width: 120px;
  height: 120px;
  border-radius: 10px;
  background: #ccc;
  margin-top: 70px;
`;

export const BlockText = styled.Text`
  font-size: 18px;
  font-family: 'Poppins_400Regular';
  margin-top: 8px;
  color: #312e38;
`;

