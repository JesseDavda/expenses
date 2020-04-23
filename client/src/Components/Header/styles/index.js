import styled from 'styled-components';
import { Flex } from 'rebass';

export const HeaderContainer = styled(Flex)`
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0px 20px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
`;

export const Title = styled.h2`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Open Sans', sans-serif;
  font-weight: 300;
`;