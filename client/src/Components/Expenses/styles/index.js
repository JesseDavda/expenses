import styled from 'styled-components';
import { Flex } from 'rebass';

const FONT = `system-ui, -apple-system, BlinkMacSystemFont, 'Open Sans', sans-serif`;

export const ExpensesContainer = styled(Flex)`
  width: 40%;
  box-sizing: border-box;
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.h3`
  font-family: ${FONT};
  font-weight: 300;
  font-size; 22px;
  letter-spacing: 1px;
`;

export const ExpensesList = styled(Flex)`
  width: 100%;
  flex-direction: column;
  box-sizing: border-box;
  padding: 10px;
`;

export const ExpenseContainer = styled(Flex)`
  width: 100%;
  padding: 5px;
  height: fit-content;
  flex-direction: column;
  position: relative;
  justify-content: center;
  margin: 5px 0px;  
`;

export const ExpenseTitle = styled.h3`
  margin: 0px;
  padding: 5px 0px;
  font-family: ${FONT};
  font-size: 20px;
  font-weight: 700;
  color: #000000;
`;

export const ExpenseDescription = styled.p`
  margin: 0px;
  padding: 5px 0px;
  font-family: ${FONT};
  font-size: 16px;
  color: #C1C1C1;
`;

export const ExpenseAmount = styled.h4`
  margin: 0px;
  position: absolute;
  font-family: ${FONT};
  font-size: 18px;
  color: #000000;
  right: 5px;
`;