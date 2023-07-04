import React from 'react'
import './CTABlock.css'
import { Link } from 'react-router-dom'
import MainButton from '../MainButton/MainButton'

function CTABlock(props) {
    return (
        <section className={`CTABlock ${props.type === 'center' ? 'CTACenter' : ''} ${props.bg}`}>
            <div className="wrapper">
                <h2>{props.title}</h2>
                <h3>{props.description}</h3>
                <Link to={props.buttonLink}>
                    <MainButton type={props.buttonType} text={props.buttonText} />
                </Link>
            </div>
        </section>
    )
}

export default CTABlock