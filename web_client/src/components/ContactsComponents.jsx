import React from 'react';
import './ContactsComponents.css';

function Contacts() {
    return (
        <div className="contacts-page">
            <header className="header-с">
                <h1>Контакти нашого сервісу</h1>
            </header>

            <div className="contacts-content">
                <div className="contact-info">
                    <h2>Контактна інформація</h2>
                    <p>Адреса: вул. Освітня, 12, Київ, Україна</p>
                    <p>Телефон: +38 (044) 123-45-67</p>
                    <p>Email: info@lastlight.pp.ua</p>
                </div>

                <div className="admin-info">
                    <h2>Наша команда</h2>
                    <ul>
                        <li><strong>Розробник:</strong> Kelar_r aka Олег Удовицький</li>
                        <li><strong>Редактор:</strong> Kelar_r aka Олег Удовицький</li>
                        <li><strong>Секретар:</strong> Kelar_r aka Олег Удовицький</li>
                    </ul>
                </div>

                <div className="social-media">
                    <h2>Ми в соціальних мережах</h2>
                    <ul>
                        <li>
                            <a href="https://facebook.com/school" target="_blank" rel="noopener noreferrer" className="social-btn facebook">Facebook</a>
                        </li>
                        <li>
                            <a href="https://instagram.com/school" target="_blank" rel="noopener noreferrer" className="social-btn instagram">Instagram</a>
                        </li>
                        <li>
                            <a href="https://twitter.com/school" target="_blank" rel="noopener noreferrer" className="social-btn twitter">Twitter</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
     
}

export default Contacts;
