import React from 'react'

export default function Attribute(props) {
  return (
    <div className="flex justify-between w-full">
      <div>{props.label}</div> <div className="font-bold"> {props.value}</div>{' '}
    </div>
  )
}
