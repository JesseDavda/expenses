import React, { createContext, useState } from 'react';

const ExpensesContext = createContext();

export const ExpensesContextProvider = ({ children }) => {
  const [expensesListState, setExpensesListState] = useState([]);

  const addExpense = ({
    name,
    description,
    amount,
  }) => {
    const prevState = expensesListState;
    prevState.push({
      name,
      description,
      amount,
    });
    setExpensesListState(prevState);
  }  

  return(
    <ExpensesContext.Provider value={{
      expensesListState
    }}>
      {children}
    </ExpensesContext.Provider>
  )
}

export default ExpensesContext;