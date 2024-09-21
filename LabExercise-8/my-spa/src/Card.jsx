// src/Card.jsx
import React, { useState } from 'react';

const Card = ({ title, features, image }) => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 m-4">
  <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{features}</p>
        <button
          onClick={handleLikeClick}
          className={`text-red-500 transition-transform duration-300 ${
            liked ? 'scale-150' : 'scale-100'
          }`}
        >
          ❤️
        </button>
      </div>
    </div>
  );
};

export default Card;
