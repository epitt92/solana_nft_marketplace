import React from 'react'
import { BsDiscord, BsGlobe, BsTwitter } from 'react-icons/bs'
import Label from '../../../Components/Labels/Label'
import Attribute from '../../../Components/Attributes/Attribute'
import ListingTable from '../../../Components/Tables/ListingTable'
import ActivityTable from '../../../Components/Tables/ActivityTable'

let a1 = 'https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https://cdn.solanamonkey.business/gen2/3405.png'

const sampleNFT = {
  image: a1,
  attributes: [
    { background_color: 'black' },
    { shirt: 'blue' },
    { head: 'headphones' },
    { eyes: 'normal' },
    { mouth: 'smile' },
  ],
}

export default function Collection(props) {
  return (
    <div className="h-screen w-full flex-col">
      <div className="fixed w-full">
        <div className="w-full text-white  border-b border-[#303030]  ">
          {/* collection header */}
          <div className="grid-cols-12 grid w-full  px-6 py-5 space-x-1">
            <div className="flex flex-col justify-center col-span-3 ">
              <div className="flex  w-full  ">
                <img
                  className="w-12 h-12 overflow-hidden rounded-full border border-gray-700 object-contain "
                  src={a1}
                />
                <div className="flex space-x-2 ml-3 space-y-1.5 flex-col -mt-0.5 ">
                  <p className="text-xl font-bold ml-2"> Monke #1234 </p>
                  <div className="flex space-x-4 text-xs">
                    {' '}
                    <BsTwitter /> <BsDiscord /> <BsGlobe />{' '}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center col-span-1 ">
              <Label header={'FLOOR PRICE'} data={0.015} units={'SOL'} isPerformanceMetric={false} />
            </div>
            <div className="flex flex-col justify-center col-span-1 ">
              <Label header={'TOP BID'} data={40} units={'SOL'} isPerformanceMetric={false} />
            </div>
            <div className="flex flex-col justify-center col-span-1 ">
              <Label header={'1D CHANGE'} data={-1.5} units={'%'} isPerformanceMetric={true} />
            </div>
            <div className="flex flex-col justify-center col-span-1 ">
              <Label header={'7D CHANGE'} data={10.5} units={'%'} isPerformanceMetric={true} />
            </div>
            <div className="flex flex-col justify-center col-span-1 ">
              <Label header={'1D VOLUME'} data={33} units={'SOL'} isPerformanceMetric={false} />
            </div>
            <div className="flex flex-col justify-center col-span-1 ">
              <Label header={'7D VOLUME'} data={400} units={'SOL'} isPerformanceMetric={false} />
            </div>
            <div className="flex flex-col justify-center col-span-1 ">
              <Label header={'OWNERS'} data={945} units={'SOL'} isPerformanceMetric={false} />
            </div>
            <div className="flex flex-col justify-center col-span-1 ">
              <Label header={'SUPPLY'} data={2000} units={'SOL'} isPerformanceMetric={false} />
            </div>
            <div className="flex flex-col justify-center col-span-1 ">
              <Label header={'ROYALTY'} data={5.0} units={'%'} isPerformanceMetric={false} />
            </div>
          </div>
        </div>
        {/* collection main section */}
        <div className="w-full h-screen grid grid-cols-48 divide-x divide-[#303030]">
          <div className="col-span-9 h-full w-full text-sm">
            <div class="flex flex-col justify-center  p-7 border-b border-[#303030] ">
              <div className="text-sm font-bold mb-6"> Status </div>
              <div class="flex items-center mb-4">
                <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-pink-400 " />
                <label for="default-radio-1" class="ml-2 font-medium text-xs">
                  BUY NOW
                </label>
              </div>
              <div class="flex items-center mb-4">
                <input
                  checked
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="default-radio"
                  class="w-4 h-4 text-pink-400  "
                />
                <label for="default-radio-2" class="ml-2 text-xs font-medium">
                  Show All
                </label>
              </div>
            </div>
            <div class="flex flex-col justify-center  p-7  border-[#303030] ">
              <div className="text-sm font-bold mb-6"> Attributes </div>
              <div className="text-xs w-full flex-col flex space-y-2">
                {sampleNFT.attributes.map((attribute, index) => {
                  return <Attribute label={Object.keys(attribute)[0]} value={Object.values(attribute)[0]} />
                })}
              </div>
            </div>
          </div>
          <div className="col-span-28 h-full w-full">
            {' '}
            <ListingTable />
          </div>
          <div className="col-span-11 h-full w-full">
            <div class="flex flex-col justify-center  border-b border-[#303030] ">
              <ActivityTable />
            </div>
            <div class="flex flex-col justify-center  p-7 border-[#303030] ">
              <div className="text-sm font-bold mb-6"> Stats </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
