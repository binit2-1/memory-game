import React from 'react'

const GameModeSelection = ({
  text,
  onClick
}) => {
  return (
    <div className='flex flex-row items-center justify-center gap-4'>
      <button className='style-rectangle cursor-pointer transition-transform duration-250 hover:scale-110' onClick={onClick}>{text}</button>
    </div>
  )
}

export default GameModeSelection