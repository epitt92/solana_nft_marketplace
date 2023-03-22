import React from 'react'

import dead from '../../../Assets/images/dead.png'
import CollectionTable from '../../../Components/Tables/CollectionTable'
import { useNavigate } from 'react-router-dom'
import CollectionPreviewCard from '../../../Components/Cards/CollectionPreviewCard'

let a1 = 'https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https://cdn.solanamonkey.business/gen2/3405.png'
let a2 = 'https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https://cdn.solanamonkey.business/gen2/3381.png'
let a3 = 'https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https://cdn.solanamonkey.business/gen2/1657.png'
let a4 = 'https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https://cdn.solanamonkey.business/gen2/1658.png'
let a5 = 'https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https://cdn.solanamonkey.business/gen2/1659.png'
let a6 = 'https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https://cdn.solanamonkey.business/gen2/1660.png'
let a7 = 'https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https://cdn.solanamonkey.business/gen2/1661.png'
let a8 = 'https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https://cdn.solanamonkey.business/gen2/1662.png'
let a9 = 'https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https://cdn.solanamonkey.business/gen2/1663.png'

let collection = { img: ' https://solanamonkey.business/logo/smb.png', name: 'Solana Monkey_Business' }

const example = {
  1: {
    id: 1,
    name: 'monke #2304',
    collection: collection,
    author: { name: 'soldegen', image: a9 },
    floorPrice: 0.1,
    volume: 220,
    image: a1,
    supply: 1000,
  },
  2: {
    id: 2,
    name: 'monke #1660',
    collection: collection,

    author: { name: 'daodev', image: a3 },
    floorPrice: 5,
    volume: 20,
    image: a6,
    supply: 10000,
  },
  3: {
    id: 3,
    name: 'monke #3304',
    author: { name: 'monkelove', image: a8 },
    floorPrice: 1.1,
    volume: 320,
    collection: collection,
    image: a5,
    supply: 130,
  },
  4: {
    id: 4,
    name: 'monke #4304',
    author: { name: 'solwhale', image: a4 },
    collection: collection,
    floorPrice: 1.4,
    volume: 220,
    image: a2,
    supply: 120,
  },
  5: {
    id: 5,
    name: 'monke #5304',
    collection: collection,
    author: { name: 'banana', image: a7 },
    floorPrice: 0.5,
    volume: 220,
    image: a3,
    supply: 4000,
  },
}

export default function Home() {
  const [featuredCollections, setFeaturedCollections] = React.useState(example)
  const [featuredCollection, setFeaturedCollection] = React.useState(example[1])

  console.log(Object.values(featuredCollection))

  return (
    <div className="h-full w-full font-ProtoMono">
      <div
        className="flex relative w-full h-full bg-black bg-repeat"
        style={{
          backgroundImage: `url(${featuredCollection.image})`,
          height: 560,
          backgroundSize: 50,
        }}
      >
        <div className="w-full flex justify-center absolute top-0 ">
          <div className=" w-full h-14 text-center bg-black/90 backdrop-blur-sm font-['Cygnito_Mono'] font-bold   text-shadow shadow-white/30   flex items-center justify-center">
            // {'Trade blue chips NFT collections at a fraction of the price, while earning '}{' '}
            <a className="mx-2 text-pink-400 shadow-pink-400 text-shadow" href="https://example.com">
              {`  $SLASH.`}{' '}
            </a>
          </div>
        </div>
        <div className=" absolute w-full bottom-0 flex flex-col  pt-64 bg-gradient-to-b from-black/0 to-black/95">
          <div className="flex flex-col justify-end h-full font-bold px-20 text-white ">
            <div className="text-4xl font-bold"> {featuredCollection.name} </div>
            <div className="text-2xl"> By @{featuredCollection.author.name.toUpperCase()} </div>
            <div>
              {' '}
              Supply: {featuredCollection.supply} Floor Price: {featuredCollection.floorPrice} ◎ Volume:{' '}
              {featuredCollection.volume} ◎{' '}
              <button className="border rounded px-5 py-0.5 bg-gray-100/10  backdrop-blur-sm"> Explore </button>
            </div>
          </div>
          <div className="flex justify-center mx-20 items-center">
            <div className="w-full grid grid-cols-5  -mb-20 mt-8 justify-center items-center gap-5 grid-rows-1 ">
              {featuredCollections &&
                Object.values(featuredCollections).map(collection => (
                  <CollectionPreviewCard
                    setFeaturedCollection={setFeaturedCollection}
                    featuredCollections={featuredCollections}
                    collection={collection}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center pt-36 px-20 ">
        {' '}
        <CollectionTable />
      </div>
    </div>
  )
}
