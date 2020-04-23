import React from 'react';

import { AuthContextProvider } from '../contexts/authContext';
import Header from '../Components/Header';
import Expenses from '../Components/Expenses';
import * as Styled from './styles';
import { ExpensesContextProvider } from '../contexts/expensesContext';

const App = () => {
  return(
    <AuthContextProvider>
      <ExpensesContextProvider>
        <Styled.container>
          <Header />
          <Styled.CentralContainer>
            <Expenses />
          </Styled.CentralContainer>
        </Styled.container>
      </ExpensesContextProvider>
    </AuthContextProvider>
  )
}

export default App;