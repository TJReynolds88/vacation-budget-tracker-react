import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
// Initial state

const initialState = {
  transactions: [
    { id: 1, text: "Swim gear", amount: -100 },
    { id: 2, text: "Deposit", amount: 500 },
    { id: 3, text: "Chick-fil-A", amount: -20 },
    { id: 4, text: "Gas", amount: -150 },
  ],
};

//Create contexts

export const GlobalContext = createContext(initialState);

//Provider component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  function deleteTransaction(id) {
    dispatch({
      type: " DELETE_TRANSACTION",
      payload: id,
    });
  }
  function addTransaction(transaction) {
    dispatch({
      type: " ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
