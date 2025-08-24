import { Link } from 'react-router-dom'
import React from 'react'

const HomePage = () => {
  return (
    <div className='relative flex flex-col items-center justify-center h-screen'>
        <h1 className='text-6xl font-title mb-4 text-yellow-300'>Memory Game</h1>
        <div className='flex flex-row gap-4'>
          <Link to='/gameeasy'><button className='style-rectangle'>EASY</button></Link>
          <Link to='/gamemedium'><button className='style-rectangle'>MEDIUM</button></Link>
          <Link to='/gamehard'><button className='style-rectangle'>HARD</button></Link>
        </div>
    </div>
  )
}

export default HomePage