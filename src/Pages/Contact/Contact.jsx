import React from 'react'
import './Contact.css'
import HeaderSection from '../../Components/HeaderSection/HeaderSection'
import TeamMember from '../../Components/TeamMember/TeamMember'
import oliver_krupa from '../../images/Contact/oliver-krupa.webp'
import damien_reaver from '../../images/Contact/damien-reaver.webp'
import alex_bauer from '../../images/Contact/alex-bauer.webp'
import CTABlock from '../../Components/CTABlock/CTABlock'
import { useState } from 'react'
import { useEffect } from 'react'


function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState('')


    function sendEmail() {

        /* FIELDS VALIDATION */

        if (name === '') {
            setStatus('Please enter your name')
            return
        } else if (email === '' || !email.includes('@')) {
            setStatus('Incorrect email address')
            return
        } else if (message === '') {
            setStatus('Please enter your message')
            return
        } else {
            setStatus('Sending message...')

            const data = {
                email: email,
                name: name,
                message: message,
                robotName: 'CarinaBot'
            }

            fetch('https://vps.carinabot.com/api/contact-us', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),

            })
                .then((response) => {
                    if (response.status === 200) {
                        setStatus("Message sent! Thank you, we'll reply soon!")
                        setName('')
                        setEmail('')
                        setMessage('')
                    }
                })
                .catch((error) => {
                    console.log(error)
                })

        }

    }

    /* SCROLL TO TOP */

    useEffect(() => {
        scrollToTop();
      }, []);
    
      const scrollToTop = () => {
        window.scrollTo(0, 0);
      };

    return (
        <>
            <HeaderSection title={'Contact'} subtitle={'Contact us with your questions'} backgroundClass={'contactHeader'} />

            <section className="contact">
                <div className="wrapper">
                    <h1>Let's get in touch</h1>

                    <div className="messageForm">
                        <div className='formRow'>
                            <div>
                                <label htmlFor="messageName">Name</label>
                                <input type="text" id='messageName' placeholder='Enter your full name' value={name} onChange={e => setName(e.target.value)} />
                            </div>

                            <div>
                                <label htmlFor="messageMail">E-mail</label>
                                <input type="text" id='messageMail' placeholder='Enter your e-mail adress' value={email} onChange={e => setEmail(e.target.value)} />
                            </div>
                        </div>

                        <div className="formRow rowTextarea">
                            <label htmlFor="messageText">Message</label>
                            <textarea name="message" id="messageText" placeholder='Enter your message' value={message} onChange={e => setMessage(e.target.value)}></textarea>
                        </div>

                        <div className="formButton">
                            
                            {
                                status === '' 
                                ? <p id='contact-form-success-alert'>{status}</p>
                                : ''
                            }
                            <button className='mainButton mainDark' onClick={e => sendEmail()}>Submit Message</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contactTeam">
                <div className="wrapper">
                    <h1>Meet Our Team</h1>
                    <p className='contactTeamSubtitle'>We bring artificial intelligence for algorithmic trading to everyone</p>


                    <div className="contactMembers">
                        <TeamMember image={oliver_krupa} name={'Oliver Krupa'} role={'Software Engineer'} text={'Oliver is very talented Software Engineer passionate about programming languages, machine learning and trading.'} />
                        <TeamMember image={damien_reaver} name={'Damien Reaver'} role={'Founder / Trader / Engineer'} text={'Damien is real FX guru, driven by algorithmic trading. He displays rich skills in automated algo trading and research.'} />
                        <TeamMember image={alex_bauer} name={'Alex Bauer'} role={'Co-founder / Trader'} text={'Alex has been a professional FX trader for 11 years and still counting. He joined his forces with Damien back in 2014.'} />
                    </div>
                </div>
            </section>

            <CTABlock bg={'ctaWithBG'} title={'Start free trial'} description={'First 3 months for free. See CarinaBot performance and profitability yourself.'} buttonLink={'https://vps.carinabot.com'} buttonText={'Get Started'} buttonType={'dark'} />
        </>
    )
}

export default Contact