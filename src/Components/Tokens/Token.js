import { GridDragIcon } from '@mui/x-data-grid'
import React from 'react'
import Switch from '@mui/material/Switch'
import { numberWithCommas } from '../../Utils/Functions/Formatting'
const label = { inputProps: { 'aria-label': 'Switch demo' } }

function Token(props) {
  return (
    <div
      key={props.index}
      className=" text-gray-300 px-6 py-3 h-full justify-between items-center border-b flex w-full border-zinc-800 shadow hover:bg-zinc-800/20 cursor-pointer"
    >
      <div className="flex space-x-3 w-32 items-center h-full ">
        <img
          src={props.token.metadata.logoURI}
          alt={props.token.metadata.name}
          className="w-7 h-7 rounded-full border-zinc-800 bg-black"
        />
        <div className="flex flex-col whitespace-nowrap overflow-clip">
          <p className=" text-xs font-bold ">{props.token.metadata.name}</p>
          <p className="text-gray-500 text-sm">{props.token.metadata.symbol}</p>
        </div>
      </div>
      <div className="flex flex-col w-24 text-sm justify-center items-start">
        {props.token.price ? (
          <>
            <p className=" font-bold text-sm">
              {props.token.price > 1
                ? numberWithCommas(props.token.price.toFixed(2))
                : numberWithCommas(props.token.price.toFixed(6))}
            </p>
            <p className={`text-xs font-bold ${props.token.priceChange24h > 0 ? 'text-emerald-400' : 'text-red-400'}`}>
              {props.token.priceChange24h.toFixed(2)}%
            </p>
          </>
        ) : (
          <p> - </p>
        )}
      </div>
      <div className="flex w-24 items-center">
        {props.token.worth ? (
          <span className=" text-sm font-bold">
            {' '}
            ${numberWithCommas(props.token.worth.toFixed(2))}
            <p className="text-xs text-gray-400 whitespace-nowrap overflow-clip w-24">
              {(props.token.amount / 10 ** props.token.decimals).toFixed(3)} {` `} {props.token.metadata.symbol}
            </p>
          </span>
        ) : (
          <span className=" text-sm font-bold">
            <p className="text-sm font-bold text-gray-300 whitespace-nowrap overflow-clip w-24">
              {(props.token.amount / 10 ** props.token.decimals).toFixed(3)} {` `}
            </p>
            <p className="text-xs text-gray-400 whitespace-nowrap overflow-clip w-24">{props.token.metadata.symbol}</p>
          </span>
        )}
      </div>
      {/* <div className="flex h-5 items-center">
        <Switch {...label} defaultChecked />
      </div> */}
    </div>
  )
}

export default Token
