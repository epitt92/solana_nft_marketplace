import { TrophyIcon } from '@heroicons/react/20/solid'
import React from 'react'
import { BiDiamond, BiDollarCircle, BiFemale, BiHome, BiMale } from 'react-icons/bi'
import WalletTag from '../Wallet/WalletTag'

export default function Profile(props) {
  return (
    <div
      onClick={() => props.setOpen(true)}
      className="flex w-full flex-col px-5 py-5 hover:bg-zinc-800/10 cursor-pointer "
    >
      <div className="flex items-center mx-2 w-full divide-zinc-800">
        <div className="flex space-x-2 items-center justify-between w-full ">
          <div className="flex space-x-3">
            <img
              src={
                props.user.profilePicture
                  ? props.user.profilePicture
                  : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
              }
              alt="profile"
              className="w-14 h-14 rounded-full border border-zinc-800"
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold">@{props.user.username ? props.user.username : 'anon_user'}</p>
              <div className="flex items-center pt-0.5 ">
                <WalletTag user={props.user} />
              </div>
            </div>
          </div>
          <div className="flex flex-col text-right items-end justify-center 	">
            <p className="text-xs text-gray-500 -mt-1"> total balance</p>
            <p className="font-bold text-3xl flex">
              {' '}
              <span className="text-lg mt-1 mr-0.5 "> $</span>
              {props.totalBalance ? props.totalBalance.toFixed(2) : '0.00'}{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

{
  /* <div className=" border border-zinc-700 rounded-md w-full space-y-0.5 flex flex-col justify-center items-center shadow ">
              <div className="flex items-center p-2 px-4">
                <p className="font-bold text-sm "> 2,000,000</p>
                <span className="flex text-sm items-center ml-1  text-green-400">
                  <p className="text-sm font-bold"> MBC </p>
                </span>
              </div>
              <div className="space-x-2 flex border-t border-zinc-700 p-2 px-4">
                <div className="flex items-center space-x-0.5 ">
                  <p className="text-xs "> 4</p>
                  <BiMale className="h-3.5 w-3.5 " />
                </div>
                <div className="flex items-center space-x-0.5  ">
                  <p className="text-xs "> 4</p>
                  <BiFemale className="h-3.5 w-3.5 " />
                </div>
                <div className="flex items-center space-x-0.5  ">
                  <p className="text-xs "> 4</p>
                  <BiDiamond className="h-3.5 w-3.5 " />
                </div>
                <div className="flex items-center space-x-0.5 ">
                  <p className="text-xs "> 4</p>
                  <BiHome className="h-3.5 w-3.5 " />
                </div>
              </div>
            </div> */
}
