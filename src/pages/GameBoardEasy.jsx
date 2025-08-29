import React from 'react'
import fetchCharacters from '../api/rickAndMorty.js'
import { useState, useEffect } from 'react'
import Scorecard from '../components/Scorecard.jsx'
import FlipCard from '../components/FlipCard.jsx'

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

      const selectedCards = characters.slice(0,3)
      setGameCards(selectedCards);  
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
      return 
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

    const nextCards = [currentCard, otherCards[r1], otherCards[r2]]

    setTimeout(() => {
      setGameCards(nextCards)
      setTimeout(() => {
        setAllCardsFlipped(false)
      }, 500)
    }, 1000)
  }

  // Conditional rendering in the return statement
  if (gameOver) {
    console.log(`Score: ${score}, Best Score: ${bestScore}`)
    return (
      <div className='flex flex-col items-center justify-center h-full'>
        <h2 className='text-4xl font-title text-red-500 mb-4'>Round Lost!</h2>
        <p className='text-xl text-white mb-4'>You clicked the same card twice</p>
        <p className='text-lg text-yellow-300 mb-4'>Final Score: {score}</p>
        <button 
          onClick={() => {
            setGameOver(false)
            setClickedCards([])
            setScore(0) 
            // Reset to initial cards
            const initialCards = char.slice(0, 3)
            setGameCards(initialCards)
          }}
          className='px-6 py-3 bg-yellow-300 text-black rounded hover:bg-yellow-400 font-bold'
        >
          Play Again
        </button>
      </div>
    )
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
    </div>
  )
}

export default GameBoard