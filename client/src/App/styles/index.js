import styled from 'styled-components';
import { Flex } from 'rebass';

export const container = styled(Flex)`
  width: 100%;
  height: 100vh;
  flex-direction: column;
  background-color: #f5f6fa;
  padding-top: 40px;
  box-sizing: border-box;
`;

export const CentralContainer = styled.div`
  min-width: 800px;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: none;
  margin: 0 auto;
  padding: 30px 10px;
`;