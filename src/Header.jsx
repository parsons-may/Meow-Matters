import './Header.css';
import { useState } from "react";
import Button from "./components/Button";
import AdaptiveDropdown from './components/AdaptiveDropdown';

function Header( {goToPage} ) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <header className="header">
            <div className="header-top">
            <img
            src="/images/catLogo.jpg"
            alt="image of cat in leaves"
            className="logo"
            onClick={() => goToPage('/')}
            />
            <h1 className="header-title">
                Meow Matters!
            </h1>

            <div className="menu-button">
            <button
            className="menu-logo"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            aria-expanded={dropdownOpen}
            >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
            </div>
            </div>

        <div className={`nav-menu ${dropdownOpen ? "open" : ""}`}>
               <AdaptiveDropdown goToPage={goToPage} />
           </div>

        </header>
    );
}

export default Header;