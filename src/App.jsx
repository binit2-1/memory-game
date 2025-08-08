import React from 'react'

const App = () => {
  return (
    <div>
      <video 
      autoPlay 
      loop 
      muted 
      className='w-screen h-screen object-cover '
      >    
        <source src="/background.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default App

