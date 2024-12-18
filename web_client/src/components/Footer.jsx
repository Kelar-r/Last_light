import React from 'react';

const Footer = () => {
  return (
    <footer className="text-deYork py-8">
      <div className="container mx-auto text-center">
        <p className="mb-1">© 2024 Останнє Світло. Всі права захищені.</p>
        <p className="mb-2">
          Ми прагнемо стати джерелом знань та натхнення для кожного, хто бажає
          розвиватися та відкривати нові горизонти. Приєднуйтесь до нас і освітліть
          свій шлях до успіху разом із "Останнім Світлом".
        </p>
        <div className="mb-1">
          <h3 className="font-semibold">Контакти:</h3>
          <p>📍 Адреса: вул. Освітня, 12, Київ, Україна</p>
          <p>📞 Телефон: +38 (044) 123-45-67</p>
          <p>✉️ Email: info@lastlight.pp.ua</p>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Слідкуйте за нами:</h5>
          <a href="#" className="text-deYork-400 hover:text-gray-300 mx-2">Facebook</a>|
          <a href="#" className="text-deYork-400 hover:text-gray-300 mx-2">Instagram</a>|
          <a href="#" className="text-deYork-400 hover:text-gray-300 mx-2">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
