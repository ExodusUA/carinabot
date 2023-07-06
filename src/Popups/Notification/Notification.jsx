import React, { useState, useEffect } from 'react';
import './Notification.css';

function Notification({ setStatus }) {
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
                <p id='contact-form-success-alert'>Message sent!</p>
                <p>Thank you, we'll reply soon!</p>
                <div className="notificationButtonWrapper">
                    <button onClick={e => setStatus(false)}>OK</button>
                </div>
            </div>
        </div>

    );
}

export default Notification;