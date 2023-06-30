import React from 'react'
import './Pricing.css'
import HeaderSection from '../../Components/HeaderSection/HeaderSection'
import Advantage from '../../Components/Advantage/Advantage'
import free from '../../images/Pricing/free.svg'
import percent from '../../images/Pricing/percent.svg'
import deal from '../../images/Pricing/deal.svg'
import { Link } from 'react-router-dom'
import MainButton from '../../Components/MainButton/MainButton'
import CTABlock from '../../Components/CTABlock/CTABlock'
import { useEffect } from 'react'

function Pricing() {

    /* SCROLL TO TOP */

    useEffect(() => {
        scrollToTop();
      }, []);
    
      const scrollToTop = () => {
        window.scrollTo(0, 0);
      };

    return (
        <>
            <HeaderSection backgroundClass={'pricingBackground'} title={'Pricing'} subtitle={'It costs you nothing to try'} />
            <section className='pricingCards'>
                <div className="wrapper">
                    <Advantage text='center' image={free} title='First 3 months' description="Try first 3 months for free. See the results yourself and don't pay anything in advance." />
                    <Advantage text='center' image={percent} title='Next 3 months' description="If you are profitable, continue using it and pay us a 10% fee from the profits." />
                    <Advantage text='center' image={deal} title='Fair deal' description="Try now for free, and decide later. You can cancel it anytime. That's a fair deal." />
                </div>
            </section>

            <section className="priceSection">
                <div className="wrapper">
                    <div className="priceBLock">
                        <img className='priceBlockIcon' src={free} alt="Free" />
                        <div className="priceBlockTexts">
                            <p>First 3 months</p>
                            <p>✓ Average Monthly Profit 3.9%</p>
                            <p>✓ No charges or fees, no costs</p>
                            <p>✓ Try on DEMO, see results</p>
                            <p>✓ If profitable, switch to LIVE</p>
                        </div>
                        <div className='priceBlockBottom'>
                            <p>FREE</p>
                            <p>No fees, cancel anytime!</p>
                        </div>

                        <Link to={'https://vps.carinabot.com/#/'}>
                            <MainButton text='Start Now' type={'black'} />
                        </Link>
                    </div>

                    <div className="priceBLock">
                        <img className='priceBlockIcon' src={percent} alt="Percent" />
                        <div className="priceBlockTexts">
                            <p>Then 10% from profits</p>
                            <p>✓ Average Monthly Profit 3.9%</p>
                            <p>✓ 10% fee from your net profits</p>
                            <p>✓ Pay at the end of the period</p>
                            <p>✓ Fair for you, fair for us</p>
                        </div>
                        <div className='priceBlockBottom'>
                            <p>10% fee</p>
                            <p>No payments in advance!</p>
                        </div>

                        <Link to={'https://vps.carinabot.com/#/'}>
                            <MainButton text='Start Now' type={'black'} />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="priceTextSection">
                <div className="wrapper textWrapper">
                    <h2>Fair deal</h2>
                    <p>Every 3 months, CarinaBot will request a 10% fee from the profits. This fee is what you pay us for using our robot.</p>
                    <p>You can pay the fee and continue using our robot, or you can ignore the fee and the robot will stop trading for you.</p>
                </div>
            </section>

            <CTABlock title='Try for free' type='center' description='Try and test it yourself. First 3 months for free.' buttonText="Let's start" buttonLink='https://vps.carinabot.com/' buttonType='primary' />
        </>
    )
}

export default Pricing