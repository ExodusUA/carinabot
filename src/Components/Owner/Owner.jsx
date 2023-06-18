import React from 'react'
import './Owner.css'

function Owner(props) {
    return (
        <div className='owner'>
            <div className="ownerContent">
                <div className='ownerContentHover'>
                    <img src={props.image} alt="User" />
                    <div className='ownerHidden'>
                        <div>
                            <p>{props.hoverTitle}</p>
                            <p>{props.hoverDesc}</p>
                        </div>
                    </div>
                </div>
                <p className='ownerRole'>{props.title}</p>
                <p className='ownerDesc'>{props.desc}</p>
            </div>
            <img className='ownerImageDecoration' src={props.demoImage} alt="Owner Decoration" />
        </div>
    )
}

export default Owner