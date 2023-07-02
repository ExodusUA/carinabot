import React from 'react'
import './MainButton.css'

function MainButton(props) {
  return (
    <button className={`mainButton ${props.type === 'black' ? 'mainDark' : 'mainWhite'} ${props.border !== undefined && 'mainButtonBorder'}`}>{props.text}</button>
  )
}

export default MainButton