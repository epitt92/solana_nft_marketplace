import React from 'react'

export default function TokenListHeader() {
  return (
    <div className="flex justify-center h-12">
      <div className=" px-5 text-xs font-bold text-gray-300 flex w-full justify-between items-center space-x-5 border-b border-zinc-800 bg-zinc-800/10">
        <div className="flex space-x-3 items-center w-36">
          <div className="">
            <span className=" w-20 ml-2">name</span>
          </div>
        </div>
        <div className="flex w-24 items-center">
          <span className="text-center">price</span>
        </div>
        <div className="flex w-24 items-center">
          <span className="">amount</span>
        </div>
        {/* <div className="flex w-24 items-center justify-center">
          <span className="">tracking</span>
        </div> */}
      </div>
    </div>
  )
}
