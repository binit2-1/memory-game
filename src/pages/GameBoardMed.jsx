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
      // First flip cards back to face-down
      setAllCardsFlipped(false)
      
      // Then change the cards after a small delay
      setTimeout(() => {
        setGameCards(nextCards)
      }, 200)
    }, 1000)
  }

  // ✅ Conditional rendering in the return statement
  const handlePlayAgain = () => {
    setGameOver(false)
    setClickedCards([])
    setScore(0)
    setAllCardsFlipped(false)
    setGameCards(char.slice(0, 4))
  }

  return (
    <div className='fixed inset-0 w-full h-full overflow-hidden'>
      <div className='absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 z-50'>
        <Scorecard score={score} bestScore={bestScore} /> 
      </div>
      
      {/* Fixed container with no padding to prevent scroll */}
      <div className='absolute inset-0 flex justify-center items-center'>
        {/* Mobile only: 2+2 simple layout */}
        <div className='block sm:hidden'>
          <div className='flex flex-col items-center gap-1'>
            {/* Top row: 2 cards */}
            <div className='flex gap-1'>
              {gameCards.slice(0, 2).map((character, index) => ( 
                <FlipCard 
                  key={`card-${index}`}
                  character={character.image} 
                  name={character.name}
                  isFlipped={allCardsFlipped}
                  onClick={() => handleCardClick(character.name, index)}
                />
              ))}
            </div>
            {/* Bottom row: 2 cards */}
            <div className='flex gap-1'>
              {gameCards.slice(2, 4).map((character, index) => ( 
                <FlipCard 
                  key={`card-${index + 2}`}
                  character={character.image} 
                  name={character.name}
                  isFlipped={allCardsFlipped}
                  onClick={() => handleCardClick(character.name, index + 2)}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Small and up: 4 cards in a single line */}
        <div className='hidden sm:flex justify-center items-center gap-3 md:gap-4 lg:gap-6'>
          {gameCards.map((character, index) => ( 
            <FlipCard 
              key={`card-${index}`}
              character={character.image} 
              name={character.name}
              isFlipped={allCardsFlipped}
              onClick={() => handleCardClick(character.name, index)}
            />
          ))}
        </div>
      </div>
      
      {/* Game Over Popup Overlay */}
      {gameOver && (
        <GameOverScreen score={score} onPlayAgain={handlePlayAgain} />
      )}
    </div>
  )
}

export default GameBoard