import React, { useState, useRef } from 'react'

const FlipCard = ({name, character, onClick}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isFlipping, setIsFlipping] = useState(false)
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    // Calculate mouse position relative to card center
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
    // Trigger flip animation
    setIsFlipping(true)
    
    // Call the parent onClick handler
    if (onClick) onClick()
    
    // Reset flip after 1 second
    setTimeout(() => {
      setIsFlipping(false)
    }, 1000)
  }

  // Calculate 3D transform based on mouse position
  const getTransform = () => {
    if (isFlipping) {
      return 'perspective(1000px) rotateY(180deg) translateZ(20px)'
    }
    
    if (!isHovered) return 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)'
    
    const { x, y } = mousePosition
    const rotateY = (x / 200) * 20 // Max rotation of 25 degrees
    const rotateX = -(y / 200) * 20 // Negative for natural tilt
    const translateZ = 20 // Lift the card up
    
    return `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`
  }

  return (
    <div className='flex items-center justify-center bg-transparent h-screen'>
        <div className='w-48 h-64 rounded-lg'>
            <div 
                ref={cardRef}
                className={`relative w-full h-full rounded-lg shadow-lg border-2 border-gray-300 cursor-pointer hover:shadow-2xl ${
                  isFlipping ? 'transition-transform duration-1000 ease-in-out' : 'transition-all duration-300 ease-out'
                }`}
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
                    <div className='flex w-44 h-48 font-bold text-lg bg-cover bg-center border-2 border-white rounded-lg mt-1'
                    style={{
                        backgroundImage: `url(${character})`
                    }}>
                    </div>
                    <p className='font-title text-white text-2xl'>{name}</p>
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