import { useState } from 'react'
import './Accordion.css';

function Accordion({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='accordion'>
            <button
                className="accordion-title"
                onClick={ () => setIsOpen(!isOpen) }
            >
            {title}
            </button>
            { isOpen && 
            <div className="accordion-content">
                {children}
            </div>
            }      
        </div>
    );

}

export default Accordion;