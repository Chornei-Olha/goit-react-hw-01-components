import styled from 'styled-components';

export const UseCard = styled.div`
  width: 250px;
  text-align: center;
  margin: auto;
  margin-top: 20px;

  border: solid 1px #d8e0ea;
`;

export const Description = styled.div`
  width: 250px;
  height: auto;
`;

export const Avatar = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  overflow: hidden;
  text-align: center;
  margin: auto;
  padding-top: 10px;
`;

export const Name = styled.p`
  font-size: 18px;
  color: #333333;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const Tag = styled.p`
  font-size: 14px;
  color: #666666;
  text-align: center;
  margin-bottom: 15px;
`;

export const Location = styled.p`
  font-size: 14px;
  color: #97a2ae;
  line-height: 32px;
  margin-bottom: 15px;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  padding-left: 0px;
  background-color: #f3f6f9;
  border-radius: 0 0 5px 5px;
  margin-bottom: 0px;

`;

export const StatsItem = styled.li`
  flex-direction: column;
  align-items: center;
  border: solid 1px #d8e0ea;
  width: 85px;
`;

export const Label = styled.span`
  justify-content: center;
  color: #97a2ae;
  padding-top: 22px;
  font-size: 12px;
  display: flex;
`;

export const Quantity = styled.span`
  justify-content: center;
  padding-bottom: 22px;
  line-height: 1.2;
  font-weight: bold;
  font-size: 14px;
  display: flex;
`;
