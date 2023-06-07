import React from 'react'

function AddTransaction({setbalance ,setamountPaid, setdescription, description }) {




    function submithandler(e) {
        e.preventDefault()
        setbalance(i => {
            let result = i = i + Number(e.target.money.value)
            return result
        })
      setdescription(i => [...i, `  ${e.target.description.value} ,${e.target.money.value}` ])
      
    }

    function paidHandler(e) {
      e.preventDefault()
      setamountPaid(i => {
        return i = i - Number(e.target.money.value)
       
      })

      setbalance(i => i - Number(e.target.money.value))
    }
     

  return (
    <div  className='form-wrapper'>
      <form onSubmit={submithandler}>
        <div className='input-group income'>
            <input placeholder='Type Income' type="text" name="description"  autoComplete='off'/>
            <input placeholder='Amount' type="number" name="money" autoComplete='off' />
            <input type="submit" value="submit" />
        </div>
        <div className='transactions'>
        <h2>Transactions History</h2>
        </div>
        {description.map (i => <div className=' transactions-income'>
        
        <ul className='c-list'>
            <li className='transaction'>
              <span className='transaction-text'>
              {i}
              </span>
              <span className='transaction-amount'></span>
              <button className='delete-btn'>
                <i className="fas fa-trash"></i>
              </button>
            </li>
        </ul>

    </div>)}
      </form>  
        
      <form onSubmit={paidHandler}>
        <div className='input-group expence'>
            <input placeholder='Type Expense' type="text" name="description"  autoComplete='off'/>
            <input placeholder='Amount' type="number" name="money" autoComplete='off' />
            <input type="submit" value="submit" />
        </div>
      </form>  


        </div>
  )
}

export default AddTransaction