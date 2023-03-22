import React from 'react'

export default function Header() {
  return (
    <div className="flex justify-center h-14">
      <div className=" px-5 text-xs font-bold text-gray-300 flex w-full justify-between items-center space-x-5 border-b border-zinc-800">
        <div className="flex space-x-3 items-center w-36">
          <div className="">
            <span className=" w-20 ml-2">type</span>
          </div>
        </div>
        <div className="flex w-24 items-center">
          <span className="text-center">action</span>
        </div>
        <div className="flex w-24 items-center">
          <span className=""> time </span>
        </div>
        <div className="flex w-24 items-center justify-center">
          <span className=""> explorer</span>
        </div>
      </div>
    </div>
  )
}
