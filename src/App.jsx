import { useState } from 'react'
import Header from './components/Header'
import Balance from './components/Balance'
import Income from './components/Income'
import Expense from './components/Expense'
import AddTransaction from './components/AddTransaction'


function App() {

  const [balance, setbalance] = useState(0)
  const [amountPaid, setamountPaid] = useState(0)
  const [description, setdescription] = useState([])



  return (
    <>

    <div className='container'>
       <div className='app-wrapper'>
        <Header/>
        <Balance balance= {balance} setbalance = {setbalance} amountPaid= {amountPaid} setamountPaid = {setamountPaid}/>
      <AddTransaction setbalance= {setbalance} setamountPaid = {setamountPaid} description={description} setdescription={setdescription} />
        <Income   />
        <Expense/>
       </div>
    </div>
    



    </>
  )
}

export default App
