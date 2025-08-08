import React from 'react'
import CircularButton from './components/CircularButton.jsx'

const App = () => {
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
      <div className="absolute flex items-center justify-between bottom-4 w-full px-52">

        <div className="flex gap-4">
          <CircularButton icon="?" />
          <CircularButton icon="S" />
        </div>

        <CircularButton icon="G" />
      </div>
    </div>
  )
}

export default App

