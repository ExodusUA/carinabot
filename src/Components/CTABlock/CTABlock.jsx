import React from 'react'
import './CTABlock.css'
import { Link } from 'react-router-dom'
import MainButton from '../MainButton/MainButton'

function CTABlock(props) {
    return (
        <section className={`CTABlock ${props.type === 'center' ? 'CTACenter' : ''}`}>
            <div className="wrapper">
                <h2>{props.title}</h2>
                <h4>{props.description}</h4>
                <Link to={props.buttonLink}>
                    <MainButton type={props.buttonType} text={props.buttonText} />
                </Link>
            </div>
        </section>
    )
}

export default CTABlock