import DomeGallery from './DomeGallery';
import { useLanguage, translations } from '@/context/LanguageContext';
import './PhotoGallery.css';

const PhotoGallery = () => {
  const { language } = useLanguage();
  const t = translations[language].album;
  // Usar las imágenes del usuario
  const images = [
    "/fotoFran_1.jpeg",
    "/fotoFran_2.jpeg",
    "/fotoFran_3.jpeg",
    "/fotoFran_4.jpeg",
    "/fotoFran_5.jpeg",
    "/fotoFran_6.jpeg",
    "/fotoFran_7.jpeg",
    "/fotoFran_8.jpeg",
    "/fotoFran_9.jpeg",
    "/fotoFran_10.jpeg",
    "/fotoFran_11.jpeg",
    "/fotoFran_12.jpeg",
    "/fotoFran_13.jpeg",
    "/fotoFran_14.jpeg",
    "/fotoFran_15.jpeg",
    "/fotoFran_16.jpeg",
    "/fotoFran_17.jpeg",
    "/fotoFran_18.jpeg"
  ];

  return (
    <section id="mi-albun" className="photo-gallery-section">
      <h2 className="section-title">{t.title}</h2>
      <div className="dome-gallery-container">
        <DomeGallery
          images={images}
          fit={0.65}
          minRadius={700}
          maxVerticalRotationDeg={15}
          segments={35}
          dragDampening={1.5}
          grayscale={false}
        />
      </div>
    </section>
  );
};

export default PhotoGallery;
