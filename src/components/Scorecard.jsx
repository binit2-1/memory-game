import React from 'react'
import { useState } from 'react'

const Scorecard = ({
    grid,
    onCardClick,
}) => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
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