import React from 'react'

export default function CollectionPreviewCard(props) {
  return (
    <div
      onClick={() => props.setFeaturedCollection(props.featuredCollections[props.collection.id])}
      className="w-full relative h-44 bg-black rounded col-span-1  border border-zinc-800 overflow-hidden transition ease-in-out  duration-300  hover:-translate-y-4"
    >
      <div className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/70 hover:to-black/40 transition ease-in-out">
        {' '}
      </div>
      <img
        className="h-12 w-12 rounded-full border border-black  top-4 left-4 absolute z-40"
        src={props.featuredCollections[props.collection.id].collection.img}
      />
      <img
        src={props.featuredCollections[props.collection.id].image}
        className="h-full w-full object-cover  hover:scale-105 transition ease-in-out duration-700"
      />
      <p className="absolute bottom-2 font-bold left-4"> {props.featuredCollections[props.collection.id].name} </p>
      <p className="absolute bottom-2 right-4 text-emerald-400"> {'$15.00'} </p>
    </div>
  )
}
