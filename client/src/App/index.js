import React from 'react';

import { AuthContextProvider } from '../../contexts/authContext';
import Header from '../Components/Header';
import * as Styled from './styles';

const App = () => {
  return(
    <AuthContextProvider>
      <Styled.container>
        <Header />
      </Styled.container>
    </AuthContextProvider>
  )
}

export default App;