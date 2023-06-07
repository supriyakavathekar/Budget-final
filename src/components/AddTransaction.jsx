import React from 'react'

function AddTransaction({setbalance ,setamountPaid}) {


    function submithandler(e) {
        e.preventDefault()
        setbalance(i => {
            let result = i = i + Number(e.target.money.value)
            return result
        })
      
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