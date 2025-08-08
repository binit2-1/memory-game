import React from 'react'

const CircularButton = ({icon, onClick}) => {
  return (
    <div className="flex items-end">
      <button className="style-button" onClick={onClick}>
        {icon}
      </button>
    </div>
  )
}

export default CircularButton