import React from 'react'

const FlipCard = () => {
  return (
    <div className='flex items-center justify-center bg-transparent h-screen'>
        <div className='w-48 h-64 rounded-lg'>
            {/* Card with card.jpg background */}
            <div 
                className='w-full h-full bg-cover bg-center rounded-lg shadow-lg border-2 border-gray-300'
                style={{ 
                    backgroundImage: `url('/card.jpg')`
                }}
            >
                <div className='flex items-center justify-center h-full text-white font-bold text-lg bg-black bg-opacity-50 rounded-lg'>
                    CARD
                </div>
            </div>
        </div>
    </div>
  )
}

export default FlipCard