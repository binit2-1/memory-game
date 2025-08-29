import React, { useState, useRef } from 'react'

const FlipCard = ({name, character, onClick, isFlipped = false}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY
    
    setMousePosition({ x: mouseX, y: mouseY })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setMousePosition({ x: 0, y: 0 })
  }

  const handleCardClick = () => {
    // Just call the parent onClick handler
    if (onClick) onClick()
  }

  // Calculate 3D transform based on flip state (prop) and mouse position
  const getTransform = () => {
    if (isFlipped) {
      return 'perspective(1000px) rotateY(180deg) translateZ(20px)'
    }
    
    if (!isHovered) return 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)'
    
    const { x, y } = mousePosition
    const rotateY = (x / 200) * 20
    const rotateX = -(y / 200) * 20
    const translateZ = 20
    
    return `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`
  }

  return (
    <div className='flex items-center justify-center bg-transparent h-screen'>
        <div className='w-24 sm:w-32 md:w-40 lg:w-48 h-40 sm:h-48 md:h-56 lg:h-64 rounded-lg'>
            <div 
                ref={cardRef}
                className="relative w-full h-full rounded-lg shadow-lg border-2 border-gray-300 cursor-pointer hover:shadow-2xl transition-transform duration-1000 ease-in-out"
                style={{ 
                    transform: getTransform(),
                    transformStyle: 'preserve-3d'
                }}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleCardClick}
            >
                {/* Front side of card */}
                <div 
                    className='absolute inset-0 w-full h-full bg-cover bg-center rounded-lg flex flex-col items-center justify-between p-2'
                    style={{ 
                        backgroundImage: `url('/card.jpg')`,
                        backfaceVisibility: 'hidden'
                    }}
                >
                    <div className='flex w-20 sm:w-28 md:w-36 lg:w-44 h-24 sm:h-32 md:h-40 lg:h-48 font-bold text-lg bg-cover bg-center border-2 border-white rounded-lg mt-1'
                    style={{
                        backgroundImage: `url(${character})`
                    }}>
                    </div>
                    <p className='font-title text-white text-xs sm:text-sm md:text-base lg:text-lg'>{name}</p>
                </div>

                {/* Back side of card */}
                <div 
                    className='absolute inset-0 w-full h-full bg-cover bg-center rounded-lg'
                    style={{ 
                        backgroundImage: `url('/card.jpg')`,
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                    }}
                >
                </div>
            </div>
        </div>
    </div>
  )
}

export default FlipCard