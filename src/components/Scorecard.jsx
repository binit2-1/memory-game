import React from 'react'
import { useState, useEffect } from 'react'

const Scorecard = ({
    score,
    bestScore,

}) => {

  return (
    <div>
      <div className='flex flex-col items-start font-title text-2xl text-yellow-500 justify-center p-4 bg-fuchsia-900 rounded-lg shadow-lg'>
        <div>Score: {score}</div>
        <div>Best Score: {bestScore}</div>
      </div>
    </div>
  )
}

export default Scorecard