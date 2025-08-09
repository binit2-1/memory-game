import React from 'react'

const GameMode = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <img src='/logo.png' alt='Logo' className='w-[700px] h-auto'/>
        <h1 className='font-title text-[90px] drop-shadow-[4px_4px_0px_#c026d3] text-yellow-300 my-10'>Memory Game</h1>
        <div className='flex flex-row items-center justify-center gap-4'>
           <button className='style-rectangle'>Easy</button >
            <button className='style-rectangle'>Medium</button >
            <button className='style-rectangle'>Hard</button >
        </div>
    </div>
  )
}

export default GameMode