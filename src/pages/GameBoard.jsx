import React from 'react'
import fetchCharacters from '../api/rickAndMorty'
import { useState, useEffect } from 'react'

const GameBoard = () => {
  const [char, setChar] = useState([])

  useEffect(() => {
    async function loadCharacters() {
      const characters = await fetchCharacters()
      setChar(characters)
    }
    
    loadCharacters()
  }, [])

  return (
    <div>
        
    </div>
  )
}

export default GameBoard