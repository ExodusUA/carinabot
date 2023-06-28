import React from 'react'
import './HowItWorks.css'
import HeaderSection from '../../Components/HeaderSection/HeaderSection'
import Advantage from '../../Components/Advantage/Advantage'
import search from '../../images/HowItWorks/search.svg'
import currency from '../../images/HowItWorks/currency.svg'
import gears from '../../images/HowItWorks/gears.svg'
import InfoSection from '../../Components/InfoSection/InfoSection'
import info_1 from '../../images/HowItWorks/info-1.webp'
import info_2 from '../../images/HowItWorks/info-2.webp'
import CTABlock from '../../Components/CTABlock/CTABlock'



function HowItWorks() {

    const infoNormalText = [
        {
            title: 'Price vs derivation',
            text: 'CarinaBot compares current EUR/USD price with its own derivation (so called "derived price"), resulting from triangular model of other currency pairs and their combinations.'
        },
        {
            title: 'Usual market behaviour',
            text: 'Inner mathematical relations of currency pairs, as a linear fractional system, dictates the current EUR/USD price to move within a range of the derived price.'
        },
        {
            title: 'Profitable opportunity',
            text: "Approximately 4-5x weekly, there's a deviation and EUR/USD slips out of the usual balanced range. This is the profitable opportunity CarinaBot is waiting for."
        },
    ]

    const infoProfit = [
        {
            title: 'Opening the trade',
            text: 'CarinaBot automatically calculates the optimal volume and opens a relevant BUY or SELL trade on your trading account to profit from the price differences it detects.'
        },
        {
            title: 'Closing the trade',
            text: 'The closing of the trade is also fully automated. CarinaBot utilizes pre-calculated Take-Profits and Stop-Losses with the highest probability of success.'
        }
    ]

    return (
        <>
            <HeaderSection backgroundClass={'howItWorksBackground'} />

            <section className='howItWorksCards'>
                <div className="wrapper">
                    <div className="howHeaderCards">
                        <Advantage text='center' image={search} title='Analyses markets' description='CarinaBot is connected to your account and analyse EUR/USD market in real-time.' />
                        <Advantage text='center' image={currency} title='Waits for an opportunity' description='Then it waits for an opportunity, a deviation between current and derived price.' />
                        <Advantage text='center' image={gears} title='Trades automatically' description='When a deviation with high probability is detected, CarinaBot opens a trade.' />
                    </div>
                </div>
            </section>

            <section className='infoSectionBlock'>
                <div className="wrapper">
                    <InfoSection type='normal' title='Trading strategy' image={info_1} textData={infoNormalText} />
                </div>
            </section>

            <section className='infoSectionBlock InfoBlockLight'>
                <div className="wrapper">
                    <InfoSection type='reverse' title='Making a profit' image={info_2} textData={infoProfit} />
                </div>
            </section>

            <CTABlock title='See our results' type='center' description='CarinaBot trades like this for more than 3 years on our own Live account.' buttonText='See Live results' buttonLink='https://platform.torobase.com/?apiKey=AKVDXDR9YBU35X7&amp;secret=7LbHZHGgCvuz6XzSEvMU' buttonType='primary' />
        </>
    )
}

export default HowItWorks