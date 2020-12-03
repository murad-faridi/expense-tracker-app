import React, {createContext, useReducer} from 'react';
import TransactionReducer from '../reducer/transReducer';

let InitialTransactions = [
    {amount: 500, desc: "Cash"},
    {amount: -40, desc: "Book"},
    {amount: -200, desc: "Camera"}
]

export const TransactionContext = createContext(InitialTransactions);

export const TransactionProvider = ({children}) => {
    let [state, dispatch] = useReducer(TransactionReducer, InitialTransactions);

    function addTransaction(transObj) {
        dispatch({
            type: "ADD_TRANSACTION", 
            payload: {
                amount: transObj.amount,
                desc: transObj.desc
            }
        })
    }

    return (
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )
}