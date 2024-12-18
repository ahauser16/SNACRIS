import React, { useState } from 'react';
import './Accordion.css';

const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion-container">
            <div className={`accordion ${isOpen ? 'active' : ''}`} onClick={toggleAccordion}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-cheveron-up"><path class="secondary" fill-rule="evenodd" d="M8.7 13.7a1 1 0 1 1-1.4-1.4l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L12 10.42l-3.3 3.3z" /></svg>
                <span>{title}</span>
            </div>
            <div className={`panel ${isOpen ? 'open' : ''}`}>
                {children}
            </div>
        </div>
    );
};

export default Accordion;