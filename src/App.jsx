import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { Github, Volume2, VolumeOff, CircleQuestionMark, SendToBack } from 'lucide-react'
import CircularButton from './components/CircularButton.jsx'  
import HeroText from './components/HeroText.jsx'
import GameModeSelection from './components/GameModeSelection.jsx'
import fetchCharacters from './api/rickAndMorty.js'

const App = () => {
  const [isMuted, setIsMuted] = useState(false)
  const [scorecard, setScorecard] = useState(true)
  const audioRef = useRef(null)
  const videoRef = useRef(null)

  const modeToSize = {easy:3, medium:4, hard:5}

  useEffect(() => {
    async function load(){
      try{
        setLoading(true)
        const characters = await fetchCharacters(2)
        setAllCards(characters)
      } catch (error){
        setFetchError("failed to load characters")
      } finally {
        setLoading(false)
      }

    }

    load()
  }, [])

  useEffect(() => {

    const video = videoRef.current;
    if (video) {
      const playVideo = () => {
        video.play().catch(error => {
          console.error("Error playing video:", error);
        });
      };
      
      // Play immediately
      playVideo();
      
      // Set up event listeners
      video.addEventListener('pause', playVideo);
      video.addEventListener('ended', () => {
        video.currentTime = 0;
        playVideo();
      });
      
      // Clean up event listeners
      return () => {
        if (video) {
          video.removeEventListener('pause', playVideo);
          video.removeEventListener('ended', playVideo);
        }
      };
    }
  }, []);

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
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-screen h-screen object-cover"
          onError={(e) => console.error("Error loading video:", e)}
        >
          <source src="/background.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      <audio ref={audioRef} src='/theme.mp3' loop preload='auto' />
      <div className='absolute w-[200px] h-auto top-8 left-[13rem] z-50'>
        <img
          src='/logo.png'
          alt='Logo'
          className='cursor-pointer transition-transform duration-300 hover:scale-110'
        />
      </div>

      <div className='absolute flex items-center justify-center w-full h-full bottom-8'>
        <HeroText />
      </div>
      <div className='absolute flex items-end justify-center w-full h-full gap-4 bottom-64'>
        <GameModeSelection text="Easy" onClick={() => setGameMode("easy")} />
        <GameModeSelection text="Medium" onClick={() => setGameMode("medium")} />
        <GameModeSelection text="Hard" onClick={() => setGameMode("hard")} />
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

