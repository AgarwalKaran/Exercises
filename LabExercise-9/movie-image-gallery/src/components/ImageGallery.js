// src/components/ImageGallery.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?s=batman&apikey=90adb8eb`
        );
        
        console.log(response.data);  // Log the response for debugging

        if (response.data && response.data.Search) {
          const fetchedImages = response.data.Search.map((movie) => ({
            title: movie.Title,
            imageUrl: movie.Poster,
          }));
          setImages(fetchedImages);
        } else {
          setError('No images found or invalid response.');
        }
      } catch (error) {
        setError('Error fetching data: ' + error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="gallery-container">
      <h2>Movie Image Gallery</h2>
      {error ? (
        <p>{error}</p>
      ) : (
        <div className="gallery">
          {images.length > 0 ? (
            images.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.imageUrl} alt={image.title} />
                <p>{image.title}</p>
              </div>
            ))
          ) : (
            <p>Loading images...</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
