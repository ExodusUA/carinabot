import React from 'react'
import './Trial.css'
import { Link } from 'react-router-dom'
import MainButton from '../MainButton/MainButton'

function Trial(props) {
    return (
        <section className='CTABlock Trial'>
            <div className="wrapper">
                <h2>Start free trial</h2>
                <h4 className={'trialText'} >First 3 months for free. See CarinaBot performance and profitability yourself.</h4>
                <Link to={'https://vps.carinabot.com/'}>
                    <MainButton type={'white'} text={"Let's Try It"}/>
                </Link>
                <p className='trialBottomText'>* no credit card required</p>
            </div>
        </section>
    )
}

export default Trial