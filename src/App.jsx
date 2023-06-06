import { useState } from 'react'
import Header from './components/Header'
import Balance from './components/Balance'
import Income from './components/Income'
import Expense from './components/Expense'
import AddTransaction from './components/AddTRansaction'


function App() {



  return (
    <>

    <div className='container'>
       <div className='app-wrapper'>
        <Header/>
        <Balance/>
      <AddTransaction/>
        <Income/>
        <Expense/>
       </div>
    </div>
    



    </>
  )
}

export default App
