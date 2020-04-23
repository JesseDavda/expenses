import React from 'react';

import * as Styled from './styles';

const ComponentContainer = ({ children }) => {
  return(
    <Styled.Container>
      {children}
    </Styled.Container>
  )
}

export default ComponentContainer;