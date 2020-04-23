import React, { useContext } from 'react';

import ExpensesContext from '../../contexts/expensesContext';
import ComponentContainer from '../ComponentContainer';

import * as Styled from './styles';

const Expenses = () => {
  const expensesContext = useContext(ExpensesContext);

  return(
    <Styled.ExpensesContainer>
      <Styled.Title>Expenses</Styled.Title>
      <Styled.ExpensesList>
        {expensesContext.expensesList.map(expense => (
          <Styled.ExpenseContainer key={expense.id}>
            <Styled.ExpenseTitle>{expense.name}</Styled.ExpenseTitle>
            <Styled.ExpenseDescription>{expense.description}</Styled.ExpenseDescription>
            <Styled.ExpenseAmount>${expense.amount}</Styled.ExpenseAmount>
          </Styled.ExpenseContainer>
        ))}
      </Styled.ExpensesList>
    </Styled.ExpensesContainer>
  )
}

export default Expenses;