import React from 'react'

const GameWonScreen = ({ score, onPlayAgain }) => {
  return (
    <div className='fixed inset-0 z-50 animate-fade-in'>
      <div className='absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm'></div>
      
      <div className='relative z-10 flex flex-col items-center justify-center h-full'>
        <div className='relative rounded-2xl shadow-2xl border-2 border-green-500 text-center overflow-hidden animate-popup' style={{ width: '800px', height: '450px' }}>
          <div 
            className='absolute'
            style={{ 
              backgroundImage: 'url(./gameWon.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              transform: 'rotate(-90deg)',
              transformOrigin: 'center center',
              width: '450px',
              height: '800px',
              top: '50%',
              left: '50%',
              marginTop: '-400px',
              marginLeft: '-225px'
            }}
          ></div>
          
          <div className='absolute inset-0 bg-green-900 bg-opacity-70'></div>
          
          <div className='relative z-10 flex flex-col items-center justify-center h-full px-8'>
            <h2 className='text-4xl font-title text-green-400 mb-4 drop-shadow-lg animate-slide-down'>YOU WON!</h2>
            <p className='text-xl font-title text-white mb-3 font-semibold animate-slide-up'>Congratulations!</p>
            <p className='text-lg font-title text-gray-300 mb-4 animate-slide-up animation-delay-100'>You completed the memory challenge!</p>
            <p className='text-2xl font-title text-yellow-300 mb-6 font-bold drop-shadow-md animate-slide-up animation-delay-200'>Final Score: {score}</p>
            <button 
              onClick={onPlayAgain}
              className='px-6 py-3 bg-gradient-to-r from-green-400 to-green-300 text-black text-lg font-title font-bold rounded-lg hover:from-green-300 hover:to-green-200 transform hover:scale-105 transition-all duration-200 shadow-lg animate-bounce-in animation-delay-300'
            >
              Play Again
            </button>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes popup {
          from { 
            opacity: 0; 
            transform: scale(0.8) translateY(-20px); 
          }
          to { 
            opacity: 1; 
            transform: scale(1) translateY(0); 
          }
        }
        
        @keyframes slide-down {
          from { 
            opacity: 0; 
            transform: translateY(-30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes bounce-in {
          0% { 
            opacity: 0; 
            transform: scale(0.3); 
          }
          50% { 
            transform: scale(1.1); 
          }
          100% { 
            opacity: 1; 
            transform: scale(1); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .animate-popup {
          animation: popup 0.5s ease-out;
        }
        
        .animate-slide-down {
          animation: slide-down 0.6s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.8s ease-out;
        }
        
        .animation-delay-100 {
          animation-delay: 0.1s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  )
}

export default GameWonScreen