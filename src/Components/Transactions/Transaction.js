import { ArrowDownCircleIcon } from '@heroicons/react/20/solid'
import React from 'react'
import Header from './Header'

export default function Transaction(props) {
  console.log(props)
  return (
    <div
      key={props.index}
      className=" text-gray-300 px-6 py-3  justify-between items-center border-b flex w-full border-zinc-800 shadow hover:bg-zinc-800/20 cursor-pointer"
    >
      <div className="flex space-x-3 w-32 items-center h-full ">
        <ArrowDownCircleIcon className="h-3 w-3" />
        <div className="flex flex-col whitespace-nowrap overflow-clip">
          <p> {props.transaction.type} </p>
        </div>
      </div>
      <div className="flex flex-col w-24 text-sm justify-center items-start"></div>
      <div className="flex w-24 items-center"></div>
      <div className="flex h-5 items-center"></div>
    </div>
  )
}
