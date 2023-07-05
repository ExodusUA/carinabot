import React from 'react'
import './Download.css'
import HeaderSection from '../../Components/HeaderSection/HeaderSection'
import aiBotVPS from '../../images/Download/ai-bot-vps.webp'
import register from '../../images/Download/register.webp'
import automated_software from '../../images/Download/automated-software.webp'
import MainButton from '../../Components/MainButton/MainButton'
import { Link } from 'react-router-dom'
import DownloadSection from '../../Components/DownloadSection/DownloadSection'
import { useEffect } from 'react'

function Download() {

    const faqDataPC = [
        {
            question: 'Download & Install',
            answer: `<ul>
            <li><a href="https://java.com/en/download/" target="_blank" rel="noreferrer">Download and install Java</a> first </li>
            <li><a href="download/CarinaBot.jar" target="_blank" rel="noreferrer">Download CarinaBot</a> and start it </li>
        </ul>`
        },
        {
            question: 'Start on trading account',
            answer: `<ul>
            <li>Register in <a href="https://platform.torobase.com/register" target="_blank" rel="noreferrer">Torobase</a> and get trading account</li>
            <li>Start CarinaBot and login to your account</li>
            <li><strong>Keep CarinaBot non-stop opened. It waits for a profitable opportunity to trade.</strong></li>
        </ul>`
        },
        {
            question: 'What is API-Key?',
            answer: `<ul>
            <li> API access to your Torobase trading account</li>
            <li> Only for trading, it can't withdraw money</li>
            <li> It's in <strong>"Welcome to Torobase!"</strong> e-mail </li>
        </ul>`
        }
    ]

    const dataPCButtons = [
        {
            link: 'https://java.com/en/download/',
            text: '1. Install Java'
        },
        {
            link: '../../../CarinaBot.jar',
            text: '2. Then CarinaBot'
        },
    ]

    const faqTorobase = [
        {
            question: 'Get account',
            answer: `<p>CarinaBot trades on your Torobase trading account. If you don't have any, go to <a href="https://www.torobase.com" target="_blank" rel="noreferrer">Torobase.com</a> and sign up for an account for free. </p>`
        },
        {
            question: 'Deposits & Withdrawals',
            answer: `<p>Your Torobase account is registered under your name and under your full control. Trade on global FX markets and add or withdraw money anytime. </p>`
        },
        {
            question: 'API-Key & Secret',
            answer: `<p> In <strong>"Welcome To Torobase!"</strong> e-mail you received after registration is your API-Key &amp; Secret. It allows CarinaBot to connect and trade on your account. </p>`
        }
    ]

    const dataTorobaseButtons = [
        {
            link: 'https://platform.torobase.com/register',
            text: 'Get Torobase Account'
        },
    ]

    /* SCROLL TO TOP */

    useEffect(() => {
        scrollToTop();
      }, []);
    
      const scrollToTop = () => {
        window.scrollTo(0, 0);
      };

    return (
        <div>

            <HeaderSection title='Download' subtitle='It takes only 5 minutes' backgroundClass={'downloadSection'} />

            <section className="downloadInfo">
                <div className="wrapper">
                    <div className="downloadInfoContent">
                        <div className='downloadInfoImage'>
                            <img src={aiBotVPS} alt="Bot" width={605} height={'100%'} />
                        </div>

                        <div className='downloadInfoText'>
                            <h2>Online VPS</h2>
                            <h3>PC / Android / iPhone</h3>
                            <div>
                                <p>✔ Hosted on VPS server for free</p>
                                <p>✔ Online and trading for you 24/7</p>
                                <p>✔ PC / Tables / Smartphones</p>
                                <p>✔ No installation required</p>
                                <Link to='https://vps.carinabot.com'><MainButton text='Start Carinabot' type='black' /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='downloadInfoSection sectionLight'>
                <div className="wrapper">
                    <DownloadSection image={automated_software} title={'Only for PC'} subtitle={'Windows / Mac / Linux'} faqData={faqDataPC} buttons={dataPCButtons} />
                </div>
            </section>

            <section className='downloadInfoSection'>
                <div className="wrapper">
                    {
                        <DownloadSection image={register} title={'Torobase'} subtitle={'Global Trading Broker'} faqData={faqTorobase} buttons={dataTorobaseButtons} />
                    }

                </div>
            </section>
        </div>
    )
}

export default Download