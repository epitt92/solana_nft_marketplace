import { CssBaseline } from '@mui/material'
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import React, { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import logo from '../../Assets/images/SLASHLOGO.png'
import { BsTwitter, BsDiscord, BsFillGearFill } from 'react-icons/bs'
import { Switch } from '@headlessui/react'
import { useState } from 'react'
import { BiMoon, BiSun } from 'react-icons/bi'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Layout({ children, user, setLocalWallet, nfts, pfp, dbCoins, mbc }) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [enabled, setEnabled] = useState(true)

  const { publicKey, sendTransaction } = useWallet()

  const handleKeyPress = useCallback(event => {
    // console.log(`Key pressed: ${event.key}`)
  }, [])

  useEffect(() => {
    // attach the event listener
    document.addEventListener('keydown', handleKeyPress)
    // remove the event listener
    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [handleKeyPress])

  const dispatch = useDispatch()

  const removeLocalWallet = async () => {
    localStorage.setItem('userWallet', null)
    location.reload()
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  useEffect(() => {
    if (publicKey) {
      setLocalWallet(publicKey.toBase58())
      return () => {}
    }
  }, [publicKey])

  useEffect(() => {
    //cycle through mbs and set every 10 seconds
  }, [])

  return (
    <div className="">
      <CssBaseline />
      <header className="w-full border-b border-[#303030] sticky z-50 top-0">
        <div className="mx-auto w-full h-14 flex flex-col items-center justify-center bg-[#0A0B0D]/90 backdrop-blur-lg  ">
          <div className="flex w-full items-c enter justify-between  h-14   ">
            <div className="flex items-center h-14">
              <div className="flex items-center  justify-center h-full border-r px-16 border-[#303030]">
                <a href="#">
                  <NavLink to={'/'} style={{ textDecoration: 'none' }}>
                    <div className="flex items-center justify-center font-bold  text-2xl text-shadow-lg shadow-pink-500/50 text-pink-400 hover:animate-pulse">
                      <img src={logo} alt="logo" className=" h-9" />
                    </div>
                  </NavLink>
                </a>
              </div>
              <div className=" flex h-20 justify-around   text-sm  font-bold ">
                <NavLink to={'/collections'} style={{ textDecoration: 'none' }}>
                  <div className="flex items-center  justify-center px-5 h-full  border-zinc-800 w-full ">
                    <p className="">collections</p>
                  </div>
                </NavLink>
                <NavLink to={'/portfolio'} style={{ textDecoration: 'none' }}>
                  <div className="flex items-center  justify-center px-5  border-zinc-800 h-full w-full ">
                    <p className="font-regular"> portfolio</p>
                  </div>
                </NavLink>
                <NavLink to={'/airdrop'} style={{ textDecoration: 'none' }}>
                  <div className="flex  justify-center items-center px-5   border-zinc-800  h-full  w-full">
                    <p> airdrop</p>
                  </div>
                </NavLink>
              </div>
            </div>
            <div className="mx-3 px-6 w-1/4 flex items-center justify-end">
              <NavLink to={'/slash'} style={{ textDecoration: 'none' }}>
                <button className="rounded bg-pink-500  drop-shadow shadow hover:bg-pink-400 hover:shadow-pink-400/40 hover:shadow  transition ease-in-out shadow-pink-400/20 text-black font-bold border-pink px-4 py-1.5 mx-5">
                  SLASH NFT
                </button>
              </NavLink>
              <div className="">
                <WalletModalProvider style={{}}>
                  <WalletMultiButton className="moneyboys-wallet-button" />
                </WalletModalProvider>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className=" flex justify-center w-full relative ">{children}</div>
      <footer className="w-full border-t border-[#303030] sticky z-50 bottom-0">
        <div className="mx-auto w-full h-12 flex flex-col items-center justify-center bg-[#0A0B0D]/90 backdrop-blur-lg  ">
          <div className="flex w-full items-c enter justify-between  h-12   ">
            <div className="flex items-center h-12 w-full">
              <div className="flex items-center  justify-center h-full border-r px-16 border-[#303030]">
                <span class="flex h-3 w-3 absolute left-10">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
                </span>
                <p className="text-sm font-bold"> LIVE </p>
              </div>
              <div className="text-gray-400 flex h-12 justify-between  w-24 text-sm  font-bold border-r border-[#303030] ">
                <div className="flex items-center  justify-center h-full  w-full ">
                  <button>
                    {' '}
                    <BsTwitter className="" />
                  </button>
                </div>
                <div className="flex items-center  justify-center  border-zinc-800 h-full w-full ">
                  <button>
                    <BsDiscord className="" />
                  </button>
                </div>
              </div>
              <div className="text-gray-400 w-16 space-x-2 h-12 justify-around flex text-sm  font-bold border-r border-[#303030] ">
                <div className="flex items-center  justify-center px-1 ">
                  <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className={classNames(
                      'bg-zinc-700 shadow-inner relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring focus:ring-pink-400 focus:ring-offset',
                    )}
                  >
                    <span className="sr-only">Use setting</span>
                    <span
                      className={classNames(
                        enabled ? 'translate-x-5' : 'translate-x-0',
                        'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-pink-400 shadow ring-0 transition duration-200 ease-in-out shadow-xl',
                      )}
                    >
                      <span
                        className={classNames(
                          enabled ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200',
                          'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
                        )}
                        aria-hidden="true"
                      >
                        <BiSun className="text-black" />
                      </span>
                      <span
                        className={classNames(
                          enabled ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100',
                          'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
                        )}
                        aria-hidden="true"
                      >
                        <BiMoon className="text-black" />
                      </span>
                    </span>
                  </Switch>
                </div>
              </div>
              <div className="flex items-center   justify-center px-4 h-full ">
                <button>
                  {' '}
                  <BsFillGearFill className="" />
                </button>
              </div>
            </div>

            <div className="mx-3 px-6 w-full flex items-center justify-end ">
              <div className="flex items-center text-sm  border-[#303030] px-4 h-12 "> 24HR VOLUME: 23002 </div>

              <div className=" flex items-center border-x border-[#303030] px-4 h-12">
                {' '}
                <svg width="12" height="10" viewBox="0 0 101 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M100.48 69.3817L83.8068 86.8015C83.4444 87.1799 83.0058 87.4816 82.5185 87.6878C82.0312 87.894 81.5055 88.0003 80.9743 88H1.93563C1.55849 88 1.18957 87.8926 0.874202 87.6912C0.558829 87.4897 0.31074 87.2029 0.160416 86.8659C0.0100923 86.529 -0.0359181 86.1566 0.0280382 85.7945C0.0919944 85.4324 0.263131 85.0964 0.520422 84.8278L17.2061 67.408C17.5676 67.0306 18.0047 66.7295 18.4904 66.5234C18.9762 66.3172 19.5002 66.2104 20.0301 66.2095H99.0644C99.4415 66.2095 99.8104 66.3169 100.126 66.5183C100.441 66.7198 100.689 67.0067 100.84 67.3436C100.99 67.6806 101.036 68.0529 100.972 68.415C100.908 68.7771 100.737 69.1131 100.48 69.3817ZM83.8068 34.3032C83.4444 33.9248 83.0058 33.6231 82.5185 33.4169C82.0312 33.2108 81.5055 33.1045 80.9743 33.1048H1.93563C1.55849 33.1048 1.18957 33.2121 0.874202 33.4136C0.558829 33.6151 0.31074 33.9019 0.160416 34.2388C0.0100923 34.5758 -0.0359181 34.9482 0.0280382 35.3103C0.0919944 35.6723 0.263131 36.0083 0.520422 36.277L17.2061 53.6968C17.5676 54.0742 18.0047 54.3752 18.4904 54.5814C18.9762 54.7875 19.5002 54.8944 20.0301 54.8952H99.0644C99.4415 54.8952 99.8104 54.7879 100.126 54.5864C100.441 54.3849 100.689 54.0981 100.84 53.7612C100.99 53.4242 101.036 53.0518 100.972 52.6897C100.908 52.3277 100.737 51.9917 100.48 51.723L83.8068 34.3032ZM1.93563 21.7905H80.9743C81.5055 21.7907 82.0312 21.6845 82.5185 21.4783C83.0058 21.2721 83.4444 20.9704 83.8068 20.592L100.48 3.17219C100.737 2.90357 100.908 2.56758 100.972 2.2055C101.036 1.84342 100.99 1.47103 100.84 1.13408C100.689 0.79713 100.441 0.510296 100.126 0.308823C99.8104 0.107349 99.4415 1.24074e-05 99.0644 0L20.0301 0C19.5002 0.000878397 18.9762 0.107699 18.4904 0.313848C18.0047 0.519998 17.5676 0.821087 17.2061 1.19848L0.524723 18.6183C0.267681 18.8866 0.0966198 19.2223 0.0325185 19.5839C-0.0315829 19.9456 0.0140624 20.3177 0.163856 20.6545C0.31365 20.9913 0.561081 21.2781 0.875804 21.4799C1.19053 21.6817 1.55886 21.7896 1.93563 21.7905Z"
                    fill="url(#paint0_linear_174_4403)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_174_4403"
                      x1="8.52558"
                      y1="90.0973"
                      x2="88.9933"
                      y2="-3.01622"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.08" stop-color="#9945FF" />
                      <stop offset="0.3" stop-color="#8752F3" />
                      <stop offset="0.5" stop-color="#5497D5" />
                      <stop offset="0.6" stop-color="#43B4CA" />
                      <stop offset="0.72" stop-color="#28E0B9" />
                      <stop offset="0.97" stop-color="#19FB9B" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="ml-2 text-sm font-bold"> 23.23</div>
              </div>
              <div className="flex items-center text-sm px-4"> TPS: 22303 </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
