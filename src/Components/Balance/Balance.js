import React, { useState } from 'react'
import { Area, AreaChart, Line, LineChart, ResponsiveContainer } from 'recharts'
const supportedTokens = ['SOL', 'USDC']
import Profile from '../User/Profile'
import WalletTag from '../Wallet/WalletTag'
const example = [
  { v: 300, t: 1620000000 },
  { v: 333, t: 1620000000 },
  { v: 320, t: 1620000000 },
  { v: 420, t: 1620000000 },
  { v: 530, t: 1620000000 },
  { v: 340, t: 1620000000 },
  { v: 640, t: 1620000000 },
  { v: 435, t: 1620000000 },
  { v: 544, t: 1620000000 },
  { v: 689, t: 1620000000 },
  { v: 760, t: 1620000000 },
  { v: 710, t: 1620000000 },
]

export default function Balance(props) {
  const [priceHistory, setPriceHistory] = useState(example)
  const [balances, setBalances] = useState(props.balances)

  return (
    <div className=" flex-col w-full flex justify-center px-8 pt-3  border-t border-zinc-800 my-3">
      <div className="flex flex-col ">
        <p className="text-sm font-bold text-gray-200"> total balance </p>

        <div className="flex items-center">
          <p className="font-bold text-4xl flex">
            {' '}
            <span className="text-lg mt-1 mr-0.5 "> $</span>
            {props.totalBalance ? props.totalBalance.toFixed(2) : '0.00'}{' '}
          </p>
          <div className="flex flex-col mx-3">
            <div className="text-emerald-300 font-medium flex p-1  justify-center items-center">
              <p className="text-sm font-bold">+$3,300.0</p>
            </div>
            <div className="rounded-full bg-green-400/20 p-1 flex font-medium  justify-center items-center text-emerald-400">
              <p className="text-xs font-bold">+0.52%</p>
            </div>
          </div>
        </div>
        {/* <WalletTag user={props.user} /> */}
      </div>
    </div>
  )
}

{
  /* <div className="flex w-full -mt-8">
        <ResponsiveContainer width="100%" height={96}>
          <LineChart width={600} height={86} data={priceHistory} margin={{ top: 0, right: -10, left: 0, bottom: 0 }}>
            <Line
              strokeWidth={2}
              dot={false}
              type="monotone"
              dataKey="v"
              stroke="#6288ff"
              fillOpacity={5}
              fill="url(#colorUv)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div> */
}
