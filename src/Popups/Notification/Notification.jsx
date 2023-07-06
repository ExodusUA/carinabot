import React, { useState, useEffect } from 'react';
import './Notification.css';

function Notification() {
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
        <div className={`notification ${isVisible ? 'show' : ''}`}>
            <div className="icon">
                <span role="img" aria-label="checkmark">✅</span>
            </div>
            <div className="message">Message sent! Thank you, we'll reply soon!</div>
        </div>
    );
}

export default Notification;