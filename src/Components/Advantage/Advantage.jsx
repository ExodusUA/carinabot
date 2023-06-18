import React from 'react'
import './Advantage.css'

function Advantage(props) {
    return (
        <div className={`advantageItem ${props.text === 'center' ? 'textCenter' : 'textLeft'}`}>
            <img className='advantageIcon' src={props.image} alt="Icon" />
            <p className='advantageTitle'>{props.title}</p>
            <p className='advantageDesc'>{props.description}</p>
        </div>
    )
}

export default Advantage