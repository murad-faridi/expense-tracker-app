function Child(){

    let transactions = [
        {amount: 500, desc: "Cash"},
        {amount: -40, desc: "Book"},
        {amount: -200, desc: "Camera"}
    ]
    
    return (
        <div className="container">
            <h1 className="text-center">Expense Tracker</h1>

            <h3>Your Balance <br /> $260</h3>

            <div className="expense-container">
                <h3>INCOME <br /> $500</h3>
                <h3>Expense <br /> $500</h3>
            </div>

            <h3>History</h3>
            <hr />

            <ul className="transaction-list">
                {
                    transactions.map((transaction, index) => {
                        return (
                            <li>
                                <span>{transaction.desc}</span>
                                <span>{transaction.amount}</span>
                            </li>
                        )
                    })
                }
            </ul>


            <h3>Add New Transaction</h3>
            <hr />

            <form className="transaction-form">
                <label>
                    Enter Description <br />
                    <input type="text" required />
                </label>
                <br />
                <label>
                    Enter Description <br />
                    <input type="text" required />
                </label>
                <br />
                <input type="submit" value="Add Transaction" />
            </form>
        </div>
    )
}

export default Child;