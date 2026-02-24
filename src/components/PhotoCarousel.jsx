import React, { useState, useEffect } from 'react';
import './PhotoCarousel.css';

const PhotoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Array de fotos - reemplaza con tus imágenes reales
  const photos = [
    {
      src: "/foto1.jpg",
      alt: "Foto 1 de Fran"
    },
    {
      src: "/foto2.jpg", 
      alt: "Foto 2 de Fran"
    },
    {
      src: "/foto3.jpg",
      alt: "Foto 3 de Fran"
    },
    {
      src: "/foto4.jpg",
      alt: "Foto 4 de Fran"
    },
    {
      src: "/foto5.jpg",
      alt: "Foto 5 de Fran"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="photo-carousel-section">
      <div className="carousel-container">
        <h2 className="carousel-title">Momentos</h2>
        
        <div className="carousel">
          <button className="carousel-btn prev-btn" onClick={prevSlide}>
            &#10094;
          </button>
          
          <div className="carousel-track">
            {photos.map((photo, index) => (
              <div
                key={index}
                className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="carousel-image"
                />
              </div>
            ))}
          </div>
          
          <button className="carousel-btn next-btn" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
        
        <div className="carousel-indicators">
          {photos.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoCarousel;
