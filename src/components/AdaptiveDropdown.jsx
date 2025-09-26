import "./AdaptiveDropdown.css";
import { useState } from "react";
import "./Button.css";

function AdaptiveDropdown( {goToPage}) {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="dropdown-nav">
             <ul className="dropdown-nav-menu">
                <li className="dropdown-nav-item">
                <a href="/" onClick={(e) => {
                    e.preventDefault();
                    goToPage("/")
                    setMenuOpen(false);
                }}
                className="btn-link"
                >
                    Home
                </a>
                </li>
                <li className="dropdown-nav-item">
                    <a href="/cats" onClick={(e) => {
                        e.preventDefault();
                        goToPage("/cats")
                        setMenuOpen(false);
                    }}
                    className="btn-link"
                    >
                    Cats
                </a>   
                </li>
                <li className="dropdown-nav-item">
                    <a href="/donate" onClick={(e) => {
                        e.preventDefault();
                        goToPage("/donate")
                        setMenuOpen(false);
                    }}
                    className="btn-link"
                    >
                        Donate
                    </a>
                </li>
                <li className="dropdown-nav-item">
                    <a href="/questions" onClick={(e) => {
                        e.preventDefault();
                        goToPage("/questions")
                        setMenuOpen(false);
                    }}
                    className="btn-link"
                    >
                        Questions
                    </a>
                </li>
            </ul>
        </nav>
      
    );
}

export default AdaptiveDropdown;