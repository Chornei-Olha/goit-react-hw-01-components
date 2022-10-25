import styled from 'styled-components';

export const FriendGroup = styled.ul`
  width: 400px;
  margin: 40px;
  > :nth-child(n + 2) {
    margin-top: 20px;
  }
`;
