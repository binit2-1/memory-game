import React from 'react'
import fetchCharacters from '../api/rickAndMorty.js'
import { useState, useEffect } from 'react'
import Scorecard from '../components/Scorecard.jsx'
import FlipCard from '../components/FlipCard.jsx'
import GameOverScreen from '../components/GameOverScreen.jsx'

const GameBoard = () => {
  const [char, setChar] = useState([])
  const [gameCards, setGameCards] = useState([])
  const [allCardsFlipped, setAllCardsFlipped] = useState(false)
  const [clickedCards, setClickedCards] = useState([]) 
  const [gameOver, setGameOver] = useState(false) 
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    async function loadCharacters() {
      const characters = await fetchCharacters()
      console.log('Characters loaded:', characters)
      setChar(characters.slice(0, 20))

      const selectedCards = characters.slice(0, 4) // 4 cards for medium
      setGameCards(selectedCards)
    }
    
    loadCharacters()
  }, [])

  const handleCardClick = (name, index) => {
    console.log(`Card clicked: ${name}, ${index}`)

    const currentCard = gameCards[index]
    
    // Check if this card was already clicked
    const alreadyClicked = clickedCards.some(card => card.name === currentCard.name)
    
    if (alreadyClicked) {
      console.log('Game Over! Card already clicked:', currentCard.name)
      setGameOver(true)
      return // Stop execution
    }

    // Add to clicked cards
    setClickedCards(prev => [...prev, { name: currentCard.name, index }])

    // ✅ FIXED: Update score state properly
    const newScore = score + 1;
    setScore(newScore); // Update score state
    
    if(newScore > bestScore) {
      setBestScore(newScore); // Update best score if needed
    }

    // Continue with normal flip logic
    setAllCardsFlipped(true)
    
    const otherCards = char.filter(character => 
      character.id !== currentCard.id && 
      character.name !== "Antenna Rick"
    )
    
    const r1 = Math.floor(Math.random() * otherCards.length);
    let r2 = Math.floor(Math.random() * otherCards.length);
    while (r2 === r1) {
      r2 = Math.floor(Math.random() * otherCards.length);
    }
    let r3 = Math.floor(Math.random() * otherCards.length);
    while (r3 === r1 || r3 === r2) {
      r3 = Math.floor(Math.random() * otherCards.length);
    }

    const nextCards = [currentCard, otherCards[r1], otherCards[r2], otherCards[r3]]

    setTimeout(() => {
      setGameCards(nextCards)
      setTimeout(() => {
        setAllCardsFlipped(false)
      }, 500)
    }, 1000)
  }

  // ✅ Conditional rendering in the return statement
  const handlePlayAgain = () => {
    setGameOver(false)
    setClickedCards([])
    setScore(0) 
    // Reset to initial cards
    const initialCards = char.slice(0, 4)
    setGameCards(initialCards)
  }

  return (
    <div className='relative w-full h-full'>
      <div className='absolute top-8 right-8 z-50'>
        <Scorecard score={score} bestScore={bestScore} /> 
      </div>
      <div className='flex justify-center items-center h-full gap-6 p-8'>
        {gameCards.map((character, index) => ( 
          <FlipCard 
            key={character.id || index} 
            character={character.image} 
            name={character.name}
            isFlipped={allCardsFlipped}
            onClick={() => handleCardClick(character.name, index)}
          />
        ))}
      </div>
      
      {/* Game Over Popup Overlay */}
      {gameOver && (
        <GameOverScreen score={score} onPlayAgain={handlePlayAgain} />
      )}
    </div>
  )
}

export default GameBoard