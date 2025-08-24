import React from 'react'
import fetchCharacters from '../api/rickAndMorty.js'
import { useState, useEffect } from 'react'
import Scorecard from '../components/Scorecard.jsx'
import FlipCard from '../components/FlipCard.jsx'

const GameBoard = () => {
  const [char, setChar] = useState([])

  useEffect(() => {
    async function loadCharacters() {
      const characters = await fetchCharacters()
      console.log('Characters loaded:', characters) // Debug log
      setChar(characters.slice(0, 3))
    }
    
    loadCharacters()
  }, [])

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
          />
        ))}
      </div>
    </div>
  )
}

export default GameBoard