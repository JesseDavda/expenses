import React from 'react';

const ComponentContainer = ({ children }) => {
  return(
    <Styled.Container>
      {children}
    </Styled.Container>
  )
}

export default ComponentContainer;