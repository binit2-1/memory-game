import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { Github, Volume2, VolumeOff, CircleQuestionMark, SendToBack } from 'lucide-react'
import CircularButton from './components/CircularButton.jsx'  
import HeroText from './components/HeroText.jsx'
import GameMode from './components/GameModeSelection.jsx'
import GameModeSelection from './components/GameModeSelection.jsx'
import Scorecard from './components/Scorecard.jsx'

const App = () => {
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef(null)
  const [gameMode, setGameMode] = useState({})

useEffect(() => {
  if (audioRef.current){
    audioRef.current.play().catch((error) => {
      console.error("Error playing audio:", error)
    })
  }
}, [])   

  function handleVolumeToggle() {
    setIsMuted(!isMuted)
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play()
      } else {
        audioRef.current.pause()
      }
    }
  }

  function handleGithubClick(){
    window.open('https://github.com/binit2-1/memory-game')
  }

  function handleGameModeChange(mode) {
    setGameMode(mode)
  }

  return (
    <div className="relative w-screen h-screen">
      <video
        autoPlay
        loop
        muted
        className="absolute w-screen h-screen object-cover"
        onError={(e) => console.error("Error loading video:", e)}
      >
        <source src="/background.mp4" type="video/mp4" />
        <source src="/background.webm" type="video/webm" />
      </video>
      <audio ref={audioRef} src='/theme.mp3' loop preload='auto' />

      <div className='absolute w-[200px] h-auto top-8 left-[13rem] z-50'>
        <img
          src='/logo.png'
          alt='Logo'
          className='cursor-pointer transition-transform duration-300 hover:scale-110'
        />
      </div>

      <div className='absolute  top-8 right-[13rem] z-50'>
        <Scorecard />
      </div>

      <div className='absolute flex items-center justify-center w-full h-full bottom-8'>
        <HeroText />
      </div>
      <div className='absolute flex items-end justify-center w-full h-full gap-4 bottom-64'>
        <GameModeSelection text="Easy" onClick={() => handleGameModeChange("easy")} />
        <GameModeSelection text="Medium" onClick={() => handleGameModeChange("medium")} />
        <GameModeSelection text="Hard" onClick={() => handleGameModeChange("hard")} />
      </div>
      <div className="absolute flex items-center justify-between bottom-8 w-full px-52">
        <div className="flex gap-4">
          <CircularButton icon={<CircleQuestionMark />} />
          <CircularButton icon={isMuted ? <VolumeOff /> : <Volume2 />} onClick={handleVolumeToggle} />
        </div>
        <CircularButton icon={<Github />} onClick={handleGithubClick} />
      </div>
    </div>
  )
}

export default App

