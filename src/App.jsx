import { useState } from 'react'
import Header from './components/Header'
import Balance from './components/Balance'
import AddTRansaction from './components/AddTRansaction'


function App() {



  return (
    <>

    <div className='container'>
       <div className='app-wrapper'>
        <Header/>
        <Balance/>
        <AddTRansaction/>
       </div>
    </div>
    



    </>
  )
}

export default App
