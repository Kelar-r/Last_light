import React, { useState, useEffect } from 'react';
import './Header.css'; // Підключення стилів

function Header() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 500); // Delay before launch animation
    }, []);

  

    return (
    <header className="header" style={{backgroundImage: 'url(/images/index/header-background.png)'}}>
        <div className={`header-content ${isVisible ? 'visible' : ''}`}>
            <h1 className="header-title">Вітаємо в Останньому Світлі!</h1>
            <p className="header-text">
            Ми – освітній проект, який спрямовує студентів на шлях знань і саморозвитку. Завдяки інноваційним підходам до навчання, ми допомагаємо кожному відкривати нові можливості та впевнено крокувати до успіху, ставши світлом на цьому шляху.
            </p>
            <div className="cta-buttons">
                <button className="btn btn-primary"><a href='/register'>Почати навчання</a></button>
                <button className="btn btn-secondary">Дізнатися більше</button>
            </div>
        </div>
    </header>
    );
};

export default Header;