import React from 'react'


const FlipCard = ({name,
    character
}) => {
  return (
    <div className='flex items-center justify-center bg-transparent h-screen'>
        <div className='w-48 h-64 rounded-lg'>
            <div 
                className='flex  justify-center w-full h-full bg-cover bg-center rounded-lg shadow-lg border-2 border-gray-300'
                style={{ 
                    backgroundImage: `url('/card.jpg')`
                }}
            >
                <div className='flex items-center justify-center w-44 h-48 text-white font-bold text-lg bg-red-500 bg-cover bg-center rounded-lg mt-1'
                style={{
                    backgroundImage: `url(${character})`
                }}>
                </div>
                <p className='font-title text-2xl'>{name}</p>
            </div>
        </div>
    </div>
  )
}

export default FlipCard