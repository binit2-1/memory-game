import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { Github, Volume2, VolumeOff, CircleQuestionMark, SendToBack } from 'lucide-react'
import CircularButton from './components/CircularButton.jsx'

const App = () => {
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef(null)
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

  return (
    <div className="relative w-screen h-screen">
      <video
        autoPlay
        loop
        muted
        className="absolute w-screen h-screen object-cover"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>
      <audio ref={audioRef} src='./theme.mp3' loop preload='auto' />
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

