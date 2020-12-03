import React, { useContext, useState } from 'react';
import {TransactionContext} from './context/transContext';

function Child(){
    
    let {transactions, addTransaction} = useContext(TransactionContext);
    let [desc, setDesc] = useState('');
    let [amount, setAmount] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (amount === 0) {
            alert("Please enter correct value");
            return false;
        }
        addTransaction({
            amount: Number(amount),
            desc
        });
        setDesc('')
        setAmount('')
    }

    const getIncome = () => {
        let income = 0;
        for (let i=0; i<transactions.length; i++){
            console.log('transactions', transactions[i]);
            if (transactions[i].amount > 0) {
                income += transactions[i].amount;
            }
        }
        return income;
    }

    const getExpense = () => {
        let expense = 0;
        for (let i=0; i<transactions.length; i++){
            if (transactions[i].amount < 0) {
                expense += transactions[i].amount;
            }
        }
        return expense;
    }
    
    return (
        <div className="container">
            <h1 className="text-center">Expense Tracker</h1>

            <h3>Your Balance <br /> ${getIncome() + getExpense()}</h3>

            <div className="expense-container">
                <h3>INCOME <br /> {getIncome()}</h3>
                <h3>Expense <br /> {getExpense()}</h3>
            </div>

            <h3>History</h3>
            <hr />

            <ul className="transaction-list">
                {
                    transactions.map((transaction, index) => {
                        return (
                            <li key={index}>
                                <span>{transaction.desc}</span>
                                <span>{transaction.amount}</span>
                            </li>
                        )
                    })
                }
            </ul>


            <h3>Add New Transaction</h3>
            <hr />

            <form className="transaction-form" onSubmit={handleSubmit}>
                <label>
                    Enter Description <br />
                    <input type="text" 
                    value = {desc} 
                    onChange={(e) => setDesc(e.target.value)} 
                    placeholder="Description" 
                    required />
                </label>
                <br />
                <label>
                    Enter Amount <br />
                    <input type="number" 
                    value = {amount} 
                    onChange={(e) => setAmount(e.target.value)} 
                    placeholder="Amount" 
                    required />
                </label>
                <br />
                <input type="submit" value="Add Transaction" />
            </form>
        </div>
    )
}

export default Child;