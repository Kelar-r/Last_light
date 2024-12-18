// src/components/NewsCard.js

import React, { useState, useEffect } from 'react';

const NewsCard = ({ newsArticle }) => {
  const [description, setDescription] = useState(newsArticle.snippet);

  useEffect(() => {
    const length = 187;
    if (description.length > length) {
      const newDescription = description.slice(0, length - 4) + '...';
      setDescription(newDescription);
    }
  }, [description]);

  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl max-w-sm min-w-[380px] flex flex-col">
      {/* Image Container */}
      <div className="relative pb-[100%]"> {/* Співвідношення 1:1 */}
        <img 
          src={process.env.PUBLIC_URL + newsArticle.image} 
          alt={newsArticle.title} 
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-2xl font-semibold mb-3 text-britishRacingGreen" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0)' }}>{newsArticle.title}</h2>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <div className="flex justify-between items-center mt-auto">
          <a 
            href={newsArticle.link} 
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
          >
            View
          </a>
          <button 
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
