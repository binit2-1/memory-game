import React from 'react'

const HeroText = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <img src='/logo.png' alt='Logo' className='w-[700px] h-auto'/>
        <h1 className='font-title text-[90px] drop-shadow-[4px_4px_0px_#c026d3] text-yellow-300 my-10'>Memory Game</h1>
    </div>
  )
}

export default HeroText