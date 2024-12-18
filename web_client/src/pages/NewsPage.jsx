// src/components/NewsPage.js

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import NewsCard from '../components/NewsCard';
import Footer from '../components/Footer';

// Приклад даних новин з фотографіями
const newsArticles = [
  {
    id: 1,
    title: 'Гена на',
    snippet: 'Гена на мотоциклі. А раніше уявляли що  нейронні мережі будуть працбвати на тяжких монотонних роботах а люди на різних креативних роботах але це реальність де все навпаки',
    link: '#',
    image: '/images/news/Gena.jpg',
  },
  {
    id: 2,
    title: 'Чаклун',
    snippet: 'Котрий вкрав дзвоник поділився своїм чар зіллям для збільшення всього який складається з соди...',
    link: '#',
    image: '/images/news/wizard.jpg',
  },
  {
    id: 3,
    title: 'Сходи',
    snippet: 'Ви здивуєтесь наскільки сходи це важлива частина ншого життя',
    link: '#',
    image: '/images/news/spivuchi.jpg',
  },
  {
    id: 3,
    title: 'Пий оковиту, пий соковиту',
    snippet: "Варто пам'ятати, що жінкам на добу медики дозволяють вживати не більше 30 грамів, а чоловікам — не більше 50.",
    link: '#',
    image: '/images/news/niggas.jpg',
  },
  // Додай інші новини за потреби
];

const NewsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Можна завантажити новини з API або іншого джерела
    setEvents(newsArticles);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold mb-8 text-center text-britishRacingGreen">Новини</h1>
        <div className="flex flex-wrap justify-center gap-6">
          {events.map(article => (
            <NewsCard newsArticle={article} key={article.id} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewsPage;
