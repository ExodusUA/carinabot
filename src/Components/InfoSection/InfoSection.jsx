import React from 'react'
import './InfoSection.css'

function InfoSection(props) {
    return (
        <div className={`infoSection ${props.type === 'normal' ? '' : 'infoReverse'}`}>
            <img src={props.image} width={740} height={'100%'} alt="Info Image" />

            <div className="infoSectionText">
                <h2>{props.title}</h2>

                {
                    props.textData.map((item, index) => (
                        <div key={index} className='infoSectionItem'>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default InfoSection