import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { Github, Volume2, VolumeOff, CircleQuestionMark } from 'lucide-react'
import CircularButton from './components/CircularButton.jsx'  
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import GameBoard from './pages/GameBoard.jsx'

const App = () => {
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef(null)
  const videoRef = useRef(null)
  const modeToSize = {easy:3, medium:4, hard:5}

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playVideo = () => {
        video.play().catch(error => {
          console.error("Error playing video:", error);
        });
      };
      playVideo();
      video.addEventListener('pause', playVideo);
      video.addEventListener('ended', () => {
        video.currentTime = 0;
        playVideo();
      });
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
    <BrowserRouter>
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
        
        <Routes>
          <Route path="/" element={<GameBoard />} />
          <Route path="/game" element={<GameBoard />} />
        </Routes>

        <div className="absolute flex items-center justify-between bottom-8 w-full px-52 z-50">
          <div className="flex gap-4">
            <CircularButton icon={<CircleQuestionMark />} />
            <CircularButton icon={isMuted ? <VolumeOff /> : <Volume2 />} onClick={handleVolumeToggle} />
          </div>
          <CircularButton icon={<Github />} onClick={handleGithubClick} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App

