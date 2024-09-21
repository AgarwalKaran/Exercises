// src/App.js
import React from 'react';
import Card from './Card';
import './index.css'; // Ensure Tailwind CSS is imported

const App = () => {
  const cardData = [
    {
      title: 'The Shawshank Redemption',
      features: 'Drama, Crime, 1994',
      image: 'https://i.redd.it/which-is-the-best-poster-for-the-shawshank-redemption-v0-tbsjqzx8ls2d1.jpg?width=1160&format=pjpg&auto=webp&s=701992cfc9e711fed00ece351f80916d1988c1fa',
    },
    {
      title: 'Inception',
      features: 'Action, Sci-Fi, 2010',
      image: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
    },
    {
      title: 'The Dark Knight',
      features: 'Action, Crime, 2008',
      image: 'https://upload.wikimedia.org/wikipedia/en/c/c9/Darkknight_cd.jpg',
    },
    {
      title: 'Fight Club',
      features: 'Drama, Thriller, 1999',
      image: 'https://m.media-amazon.com/images/I/61sNuDFJlWL._AC_UF894,1000_QL80_.jpg',
    },
    {
      title: 'Forrest Gump',
      features: 'Drama, Romance, 1994',
      image: 'https://i1.sndcdn.com/artworks-000191327675-qzmfah-t500x500.jpg',
    },
    {
      title: 'The Matrix',
      features: 'Action, Sci-Fi, 1999',
      image: 'https://upload.wikimedia.org/wikipedia/en/9/9a/The_Matrix_soundtrack_cover.jpg',
    },
    {
      title: 'The Godfather',
      features: 'Crime, Drama, 1972',
      image: 'https://m.media-amazon.com/images/I/61RZI1cKZUL._AC_UF1000,1000_QL80_.jpg',
    },
    {
      title: 'Pulp Fiction',
      features: 'Crime, Drama, 1994',
      image: 'https://upload.wikimedia.org/wikipedia/en/0/06/Pulp_Fiction_%28Soundtrack%29.png',
    },
    {
      title: 'The Lord of the Rings: The Return of the King',
      features: 'Action, Adventure, 2003',
      image: 'https://images.moviesanywhere.com/45bc0ec075bfc0b4d8f184a7cc5bf993/876ed805-83b1-4387-b0d0-62d08c36536d.jpg',
    },
    {
      title: 'The Social Network',
      features: 'Biography, Drama, 2010',
      image: 'https://i.ytimg.com/vi/bynULuoHi98/maxresdefault.jpg',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center p-5 bg-gray-100 min-h-screen">
      {cardData.map((card, index) => (
        <Card key={index} title={card.title} features={card.features} image={card.image} />
      ))}
    </div>
  );
};

export default App;
