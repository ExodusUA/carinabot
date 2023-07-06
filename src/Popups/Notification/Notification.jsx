import React, { useState, useEffect } from 'react';
import './Notification.css';

function Notification({setStatus}) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let timer;

        const showNotification = () => {
            setIsVisible(true);
            timer = setTimeout(() => {
                setIsVisible(false);
            }, 5000);
        };

        const timeout = setTimeout(showNotification, 0);

        return () => {
            clearTimeout(timeout);
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className="notifyWrapper">
            <div className={`notification ${isVisible ? 'show' : ''}`}>
                <div className="close"><p onClick={e => setStatus(false)}>✖</p></div>
                <div className="icon">
                    <span role="img" aria-label="checkmark">✅</span>
                </div>

                <p id='contact-form-success-alert'>Message sent!</p>
                <p>Thank you, we'll reply soon!</p>
            </div>
        </div>

    );
}

export default Notification;