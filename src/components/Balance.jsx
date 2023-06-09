import React from 'react'

function Balance({balance , setbalance , amountpaid, setamountpaid }) {
     




  return (
    <div className='balance'>
        <h2>Your Balance</h2>
        <h3>{balance}</h3>
        <div className="income-expenses">
            <div className="plus">
                <h3>Income</h3>
                <p>+€0.00 </p>
            </div>

            <div className="minus">
                <h3>Expenses</h3>
                <p>-€0.00 </p>
            </div>
        </div>
        </div>
  )
}

export default Balance