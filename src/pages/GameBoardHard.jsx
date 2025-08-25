import React from 'react'
import fetchCharacters from '../api/rickAndMorty.js'
import { useState, useEffect } from 'react'
import Scorecard from '../components/Scorecard.jsx'
import FlipCard from '../components/FlipCard.jsx'

const GameBoard = () => {
  const [char, setChar] = useState([])
  const [allCardsFlipped, setAllCardsFlipped] = useState(false)

  useEffect(() => {
    async function loadCharacters() {
      const characters = await fetchCharacters()
      console.log('Characters loaded:', characters)
      setChar(characters.slice(0, 5))
    }
    
    loadCharacters()
  }, [])

  const handleCardClick = (name) => {
    console.log(`Card clicked: ${name}`)
    
    // Flip all cards
    setAllCardsFlipped(true)
    
    // Auto-flip back after 1 second
    setTimeout(() => {
      setAllCardsFlipped(false)
    }, 1000)
  }

  return (
    <div className='relative w-full h-full'>
      <div className='absolute top-8 right-8 z-50'>
        <Scorecard />
      </div>
      <div className='flex justify-center items-center h-full gap-6 p-8'>
        {char.map((character, index) => ( 
          <FlipCard 
            key={character.id || index} 
            character={character.image} 
            name={character.name}
            isFlipped={allCardsFlipped}
            onClick={() => handleCardClick(character.name)}
          />
        ))}
      </div>
    </div>
  )
}

export default GameBoard