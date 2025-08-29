import React from 'react'
import fetchCharacters from '../api/rickAndMorty.js'
import { useState, useEffect } from 'react'
import Scorecard from '../components/Scorecard.jsx'
import FlipCard from '../components/FlipCard.jsx'
import GameOverScreen from '../components/GameOverScreen.jsx'
import GameWonScreen from '../components/GameWonScreen.jsx'

const GameBoard = () => {
  const [char, setChar] = useState([])
  const [gameCards, setGameCards] = useState([])
  const [allCardsFlipped, setAllCardsFlipped] = useState(false)
  const [clickedCards, setClickedCards] = useState([]) 
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
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
    const newClickedCards = [...clickedCards, { name: currentCard.name, index }]
    setClickedCards(newClickedCards)

    // Update score state properly
    const newScore = score + 1;
    setScore(newScore); // Update score state
    
    if(newScore > bestScore) {
      setBestScore(newScore); // Update best score if needed
    }

    // Check win condition - if we've clicked all available characters (20 total)
    if (newClickedCards.length >= 20) {
      console.log('You Win! All cards clicked correctly')
      setGameWon(true)
      return
    }

    // Continue with normal flip logic
    setAllCardsFlipped(true)
    
    // Filter out clicked cards AND "Antenna Rick" from available cards
    const clickedNames = newClickedCards.map(card => card.name)
    const otherCards = char.filter(character => 
      !clickedNames.includes(character.name) && 
      character.name !== "Antenna Rick"
    )
    
    // Check if we have enough unclicked cards to continue
    if (otherCards.length < 2) {
      console.log('You Win! No more unclicked cards available')
      setTimeout(() => {
        setGameWon(true)
      }, 1000)
      return
    }
    
    const r1 = Math.floor(Math.random() * otherCards.length);
    let r2 = Math.floor(Math.random() * otherCards.length);
    while (r2 === r1) {
      r2 = Math.floor(Math.random() * otherCards.length);
    }

    const nextCards = [currentCard, otherCards[r1], otherCards[r2]]

    setTimeout(() => {
      // First flip cards back to face-down
      setAllCardsFlipped(false)
      
      // Then change the cards after a small delay
      setTimeout(() => {
        setGameCards(nextCards)
      }, 200)
    }, 1000)
  }

  const handlePlayAgain = () => {
    setGameOver(false)
    setGameWon(false)
    setClickedCards([])
    setScore(0)
    setAllCardsFlipped(false)
    setGameCards(char.slice(0, 3))
  }

  return (
    <div className='relative w-full h-full min-h-screen overflow-hidden'>
      <div className='absolute top-8 right-8 z-50 sm:top-8 sm:right-8'>
        <Scorecard score={score} bestScore={bestScore} /> 
      </div>
      <div className='flex justify-center items-center h-full gap-6 p-8'>
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
      
      {/* Game Over Popup Overlay */}
      {gameOver && (
        <GameOverScreen score={score} onPlayAgain={handlePlayAgain} />
      )}
      {gameWon && (
        <GameWonScreen score={score} onPlayAgain={handlePlayAgain} />
      )}
    </div>
  )
}

export default GameBoard