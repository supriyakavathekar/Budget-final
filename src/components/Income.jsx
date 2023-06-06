import React from 'react'

function Income() {
  return (
    <div className='transactions transactions-income'>
        <h2>Transactions History</h2>
        <ul className='c-list'>
            <li className='transaction'>
              <span className='transaction-text'>Salary</span>
              <span className='transaction-amount'>5000</span>
              <button className='delete-btn'>
                <i className="fas fa-trash"></i>
              </button>
            </li>
        </ul>

    </div>
  )
}

export default Income