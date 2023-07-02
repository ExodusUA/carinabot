import React from 'react'
import './DownloadSection.css'
import FAQItem from '../FAQItem/FAQItem'
import MainButton from '../MainButton/MainButton'
import { Link } from 'react-router-dom'

function DownloadSection({ image, title, subtitle, faqData, buttons }) {
    return (
        <div className='downloadSectionBlock'>
            <img src={image} alt="Download Image" width={605} height={'100%'} />

            <div>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>

                {
                    faqData.map((item, index) => (
                        <FAQItem key={index} question={item.question} answer={item.answer} type='list' />
                    ))
                }

                <div className='downloadSectionButtons'>
                    {
                        buttons.map((item, index) => (
                            <Link to={item.link} key={index}><MainButton text={item.text} type='white' border /></Link>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default DownloadSection