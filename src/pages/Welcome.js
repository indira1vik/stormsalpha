// Welcome.js
import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';


function Welcome() {
    const [displayText, setDisplayText] = useState('');
    let navigate = useNavigate();
    const fullText = 'Indirakanth V';

    const goToHome = useCallback(() => {
        setTimeout(() => {
            navigate('/home', {replace: true});
        });
    }, [navigate]);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayText(fullText.slice(0, index + 1));
            index++;
            if (index === fullText.length) {
                clearInterval(interval);
                setTimeout(goToHome, 1400);
            }
        }, 96);
        return () => clearInterval(interval);
    }, [navigate, goToHome]);

    return (
        <div className="welcome">
            <header className="welcome-header">
                <h1 className="welcome-text">{displayText}<span className="cursor">|</span></h1>
            </header>
        </div>
    );
}

export default Welcome;
