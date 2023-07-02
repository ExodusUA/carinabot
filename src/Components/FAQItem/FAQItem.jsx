import React, { useState, useRef, useEffect } from 'react';
import './FAQItem.css';

function FAQItem({ question, answer, type }) {
    const [isOpen, setIsOpen] = useState(false);
    const answerRef = useRef(null);
    const [maxHeight, setMaxHeight] = useState(0);

    const toggleFAQ = () => {
        setIsOpen(!isOpen);
    };

    const handleHiddenClick = (e) => {
        e.stopPropagation();
    };

    useEffect(() => {
        setMaxHeight(isOpen ? answerRef.current.scrollHeight : 0);
    }, [isOpen]);

    return (
        <div className='faqItem' onClick={toggleFAQ}>
            <div className={`faqVisible ${isOpen ? 'open' : ''}`}>
                <h4>{question}</h4>
                <div className='arrow' />
            </div>

            <div className={`faqHidden ${isOpen ? 'open' : ''}`} ref={answerRef} style={{ maxHeight: `${maxHeight}px` }}>
                {
                    type === 'list' 
                    ? <ul dangerouslySetInnerHTML={{ __html: answer }} /> : <p dangerouslySetInnerHTML={{ __html: answer }} />
                }
            </div>
        </div>
    );
}

export default FAQItem;
