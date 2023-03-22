import React from 'react'

export default function Label(props) {
  return (
    <div className="flex text-center flex-col justify-center items-center space-y-2">
      <div className="text-xs text-gray-300 font-light"> {props.header}</div>
      {props.isPerformanceMetric ? (
        <div
          style={{ fontSize: 14 }}
          className={`font-bold  ${
            props.isPerformanceMetric && props.data > 0
              ? 'text-emerald-400 text-shadow-lg shadow-emerald-300/50'
              : 'text-pink-400 text-shadow-lg shadow-pink-300/50'
          }`}
        >
          {' '}
          {props.data}
          {props.units}{' '}
        </div>
      ) : (
        <div style={{ fontSize: 14 }} className={`font-bold flex space-x-2`}>
          {' '}
          {props.data} {props.units}{' '}
        </div>
      )}
    </div>
  )
}
