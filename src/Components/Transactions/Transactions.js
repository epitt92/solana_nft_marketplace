import React from 'react'
import Header from './Header'
import Transaction from './Transaction'

export default function Transactions(props) {
  return (
    <div className="w-full flex flex-col">
      <Header />
      <div className="flex flex-col flex-grow  h-screen overflow-scroll">
        <div className="flex justify-center items-center h-96">
          <span className=" items-center border border-blue-800 rounded-full  bg-blue-600/40 px-4 py-1 text-sm font-bold text-white">
            Coming Soon
          </span>
        </div>
        {/* {props.transactions && props.transactions.map(transaction => <Transaction transaction={transaction} />)} */}
      </div>
    </div>
  )
}
