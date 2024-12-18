import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css'; // Підключення стилів

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const hamburgerRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                isOpen &&
                menuRef.current && !menuRef.current.contains(event.target) &&
                hamburgerRef.current && !hamburgerRef.current.contains(event.target)
            ) {
                closeMenu();
            }
        };

        if (isOpen) {
            document.body.classList.add('body-locked');
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.body.classList.remove('body-locked');
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <a href="/">
                        <img src="/images/Logos/Logo_after-photoshop.png" alt="Logo" className='logo'/>
                    </a>
                </div>
                <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
                    <li className="navbar-item"><a href="/">Головна</a></li>
                    <li className="navbar-item"><a href="/news">Новини</a></li>
                    <li className="navbar-item"><a href="/gallery">Фотогалерея</a></li>
                    <li className="navbar-item"><a href="contacts">Контакти</a></li>
                </ul>
                <div className="hamburger" onClick={toggleMenu} ref={hamburgerRef}>
                    &#9776; {/* Іконка "гамбургер" */}
                </div>
            </div>
            {/* Випадаюче меню для мобільних пристроїв */}
            <div className={`dropdown-wrapper ${isOpen ? 'show' : ''}`}>
                <div className={`dropdown-menu ${isOpen ? 'show' : ''}`} ref={menuRef}>
                    <div className="close-btn" onClick={closeMenu}>✖</div> 
                    <ul className="dropdown-list">
                        <li><a href="/">Головна</a></li>
                        <li><a href="/news">Новини</a></li>
                        <li><a href="/gallery">Фотогалерея</a></li>
                        <li><a href="/contacts">Контакти</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;