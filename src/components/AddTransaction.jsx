import React from 'react'

function AddTRansaction() {
  return (
    <div  className='form-wrapper'>
      <form >
        <div className='input-group income'>
            <input placeholder='Add Income' type="text" name=""  autoComplete='off'/>
            <input placeholder='Amount' type="number" name="" autoComplete='off' />
            <input type="submit" value="submit" />
        </div>
      </form>  
        
      <form >
        <div className='input-group expence'>
            <input placeholder='Add Expense' type="text" name=""  autoComplete='off'/>
            <input placeholder='Amount' type="number" name="" autoComplete='off' />
            <input type="submit" value="submit" />
        </div>
      </form>  


        </div>
  )
}

export default AddTRansaction