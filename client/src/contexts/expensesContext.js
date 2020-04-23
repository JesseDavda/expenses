import React, { createContext, useState } from 'react';
import _ from 'lodash';

const ExpensesContext = createContext();

export const ExpensesContextProvider = ({ children }) => {
  const [expensesListState, setExpensesListState] = useState([
    {
      name: "Rent",
      description: "Rent",
      amount: 1000,
      id: _.uniqueId,
    },
    {
      name: "Rent",
      description: "Rent",
      amount: 1000,
      id: _.uniqueId,
    },
    {
      name: "Rent",
      description: "Rent",
      amount: 1000,
      id: _.uniqueId,
    },
  ]);

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
      id: _.uniqueId()
    });
    setExpensesListState(prevState);
  } 

  const deleteExpense = ({
    expenseId,
  }) => {
    const updatedExpenseList = expensesListState.filter(expense => id !== expenseId)
    setExpensesListState(updatedExpenseList);
  };

  return(
    <ExpensesContext.Provider value={{
      expensesList: expensesListState,
      addExpense,
      deleteExpense
    }}>
      {children}
    </ExpensesContext.Provider>
  )
}

export default ExpensesContext;