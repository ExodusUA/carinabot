import React from 'react'
import './Homepage.css'
import { Link } from 'react-router-dom'
import MainButton from '../../Components/MainButton/MainButton'
import Advantage from '../../Components/Advantage/Advantage'
import ai_image from '../../images/Homepage/ai.svg'
import security_image from '../../images/Homepage/security.svg'
import pay_image from '../../images/Homepage/pay.svg'
import gears_image from '../../images/Homepage/gears.svg'
import ai_bot_vps from '../../images/Homepage/ai-bot-vps.webp'
import how_it_works from '../../images/Homepage/how_it_works.webp'
import CTABlock from '../../Components/CTABlock/CTABlock'

import TradingChart from '../../Components/TradingChart/TradingChart'
import Profits from '../../Components/Profits/Profits'

import gift_image from '../../images/Homepage/gift.svg'
import Owner from '../../Components/Owner/Owner'
import user_1 from '../../images/Homepage/user-1.webp'
import user_2 from '../../images/Homepage/user-2.webp'
import user_3 from '../../images/Homepage/user-3.webp'
import user_1_decoration from '../../images/Homepage/user-1_decoration.webp'
import user_2_decoration from '../../images/Homepage/user-2_decoration.webp'
import user_3_decoration from '../../images/Homepage/user-3_decoration.webp'
import Trial from '../../Components/Trial/Trial'
import { useState, useEffect } from 'react'

function Homepage() {

    const handleScrollToAnchor = (event, anchor) => {
        event.preventDefault();
        const element = document.querySelector(anchor);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    const [lazyLoad, setLazyLoad] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setLazyLoad(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

        /* SCROLL TO TOP */

        useEffect(() => {
            scrollToTop();
          }, []);
        
          const scrollToTop = () => {
            window.scrollTo(0, 0);
          };
    

    return (
        <>
            <section className='homepageHeader'>
                <div className="homepageContainer">
                    <h3>3.9% Monthly profits</h3>
                    <h1>Automated Trading Robot</h1>

                    <div className="homepageHeaderButtons">
                        <Link to={'/'} onClick={(e) => handleScrollToAnchor(e, '#results')} ><MainButton text='See Results' type='white' /></Link>
                        <Link to={'https://vps.carinabot.com/'}><MainButton text='Try For Free' type='white' /></Link>
                    </div>

                    <Link className='homepageContainerLink' to='#' onClick={(e) => handleScrollToAnchor(e, '#how-it-works')}>How it works?</Link>
                </div>

                <Link to={'/'} aria-label='scroll down' onClick={(e) => handleScrollToAnchor(e, '#advantages')}><div className="scrollDown"></div></Link>
            </section>

            <section className='homepageAdvantages' id='advantages'>
                <div className='wrapper'>
                    <h2>Algorithmic trading with artificial intelligence</h2>

                    <div className="homeAdvantagesContent"> 
                        <div className="homeAdvantagesItems">
                            <Advantage image={ai_image} text={'left'} title='What is CarinaBot' description={'A software robot that trades for you. CarinaBot analyses markets and automatically trades on your account.'} />
                            <Advantage image={security_image} text={'left'} title='No access to your money' description={"We are not an investment firm, and we don't ask for your money. You have your money on your own account."} />
                            <Advantage image={pay_image} text={'left'} title='Pay only when you profit' description={'First 3 months for free. You will see how it works and whether you like it. NO PAYMENTS IN ADVANCE'} />
                            <Advantage image={gears_image} text={'left'} title='Easy and automated' description={'CarinaBot is suitable for beginners too. Connect it to your account, and it will automatically trade for you.'} />
                        </div>
                        <div className="homeAdvantagesInfo">
                            <img src={ai_bot_vps} alt="Advantages" width={630} height={'100%'} />
                            <Link to={'https://vps.carinabot.com/#/'}><MainButton text='Try Free 3 Months' type='black' /></Link>
                            <p>Results speak for themselves</p>
                        </div>
                    </div>
                </div>

            </section>

            <section className="homepageTrading" id='results'>
                <div className="wrapper">
                    <div className="homepageTradingContent">
                        <div>
                            <h2>Trading results</h2>

                            <div className='tradingContentItem'>
                                <p>From Live account</p>
                                <p>CarinaBot trades on our Live account too</p>
                            </div>
                            <div className='tradingContentItem'>
                                <p>Real-time updates</p>
                                <p>All the trades are here in real-time</p>
                            </div>
                            <div className='tradingContentItem'>
                                <p>See our account</p>
                                <p>Go to our account and see by yourself</p>
                            </div>


                            <Link className='tradingContentButton' to={'https://platform.torobase.com/webapp/ebanking/?account=1106131456827406'}>
                                <MainButton text='See our account' type='white' />
                            </Link>
                        </div>

                        <div className='tradingChart'>
                            {
                                lazyLoad ? <TradingChart /> : null
                            }

                        </div>
                    </div>
                </div>
            </section>

            <section className='homepageHow' id='how-it-works'>
                <div className="wrapper">
                    <h2>How It Works?</h2>
                    <h3>Automated AI-Trading Robot</h3>
                    <h4>Using artificial intelligence and triangular-modelling algorithms, CarinaBot predicts future EUR/USD price moves for period of several minutes. When a good opportunity occurs, CarinaBot trades it automatically and earns a profit on your account.</h4>
                    <img className='howItWorkImage' src={how_it_works} alt="How It Works" width={864} height={'100%'} />

                    <div className="homepageHowButtons">
                        <p>* CarinaBot can't make a withdrawal</p>
                        <div>
                            <Link to={'/how-it-works'} aria-label='how-it-works'>
                                <MainButton text={'Learn More'} type='black' />
                            </Link>
                            <Link to={'https://vps.carinabot.com/#/'}>
                                <MainButton text={'Try 3 Months Free'} type='black' />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <CTABlock align='left' title="Live results" description="See our account where CarinaBot trades for more than 3 years already." buttonText="See our account" buttonType="white" buttonLink="https://platform.torobase.com/?apiKey=AKVDXDR9YBU35X7&secret=7LbHZHGgCvuz6XzSEvMU" />

            <section className='homepageProfits'>
                <div className="wrapper">
                    <h2>Profits calculator</h2>
                    <h4>Based on real Live results</h4>

                    {
                        lazyLoad ? <Profits /> : null
                    }
                </div>
            </section>

            <section className="homepageWhy">
                <div className="wrapper">
                    <h2>Why To Try</h2>
                    <h4>Easy. Fair. Secure.</h4>

                    <div className="homepageWhyCards">
                        <Advantage image={gift_image} text={'center'} title='3 months for free' description={'It costs nothing to try. No subscription, no credit card. Try DEMO or LIVE.'} />
                        <Advantage image={gears_image} text={'center'} title="It's fully automated" description={'No special skills required. CarinaBot trades for you fully automatically.'} />
                        <Advantage image={pay_image} text={'center'} title='Pay only when you profit' description={'You only share with us 10% when it has actually earned profits for you.'} />
                        <Advantage image={security_image} text={'center'} title='Safe and secure' description={"CarinaBot only trades for you. It can't make any withdrawals or transfers."} />
                    </div>

                    <Link to={'https://vps.carinabot.com'}> <MainButton text="Let's Try" type='black' /></Link>
                </div>
            </section>

            <section className="homepageAuthors">
                <div className="wrapper">
                    <h2>Who can use it?</h2>
                    <h4>Improve your trading and become profitable</h4>

                    <div className="authorsBlock">
                        <Owner title={'Beginner'} desc={'Trade without special skills'} image={user_1} demoImage={user_1_decoration} hoverTitle="The best option for beginners" hoverDesc="No previous experience or knowledge is needed. CarinaBot will trade for you automatically." />
                        <Owner title={'Expert'} desc={'Upgrade your profitability'} image={user_2} demoImage={user_2_decoration} hoverTitle="Diversify and increase profits" hoverDesc="If you are already a trader and want to increase profits, CarinaBot is the solution." />
                        <Owner title={'Portfolio manager'} desc={'Trade for your clients'} image={user_3} demoImage={user_3_decoration} hoverTitle="Automate your portfolio" hoverDesc="Use CarinaBot to provide trading services to your clients and take a fee from their profits." />
                    </div>

                </div>
            </section>

            <Trial />

        </>
    )
}

export default Homepage