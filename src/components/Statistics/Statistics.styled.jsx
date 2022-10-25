import styled from 'styled-components';

export const BlockStatistics = styled.div`
  width: 335px;
  margin: auto;
  margin-top: 20px;
  border: solid 1px rgb(211, 221, 221);
`;

export const StatTitle = styled.h2`
  font-size: 16p;
  color: #333333;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 25px;
`;

export const StatList = styled.ul`
  padding-left: 0px;
  height: 60px;
  display: flex;
  list-style: none;
`;

export const StatItem = styled.li`
  width: 70px;
  border: solid 1px teal;
  background-color: darkslategray;

`;

export const Label = styled.span`
  margin-top: 5px;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  font-size: 12px;
  color: white;
`;

export const Percentage = styled.span`
  font-size: 16px;
  display: flex;
  justify-content: space-evenly;
  color: white;
`;
