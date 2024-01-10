import { useState, useEffect, useCallback } from 'react';
import './App.css';

const images = [
  {
    src: '/images/fushiguro.webp',
    alt: 'Megumi Fushiguro',
  },
  {
    src: '/images/inumaki.webp',
    alt: 'Toge Inumaki',
  },
  {
    src: '/images/itadori.webp',
    alt: 'Yuji Itadori',
  },
  {
    src: '/images/kugisaki.webp',
    alt: 'Nobara Kugisaki',
  },
  {
    src: '/images/panda.webp',
    alt: 'Panda',
  },
  {
    src: '/images/zen-in.webp',
    alt: "Maki Zen'in",
  },
];

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FaCircle, FaRegCircle } from 'react-icons/fa';

function App() {
  const [currentKey, setCurrentKey] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentKey((currentKey + 1) % images.length);
  }, [currentKey]);

  function previousImage() {
    setCurrentKey((currentKey - 1 + images.length) % images.length);
  }

  function handleClickForwards() {
    nextImage();
  }

  function handleClickBackwards() {
    previousImage();
  }

  useEffect(() => {
    const interval = setTimeout(() => {
      nextImage();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentKey, nextImage]);

  return (
    <>
      <div className="carousel-container">
        <div className="carousel-control">
          <button onClick={handleClickBackwards}>
            <IoIosArrowBack className="fas fa-chevron-left fa-2x previous" />
          </button>
        </div>

        <div className="carousel-image-container">
          {images.map((value, index) => {
            return (
              <img
                className={`carousel-image${
                  currentKey === index ? '' : ' hidden'
                }`}
                src={value.src}
                key={index}
                alt={value.alt}
              />
            );
          })}
        </div>
        <div className="carousel-control">
          <button onClick={handleClickForwards}>
            <IoIosArrowForward className="fas fa-chevron-right fa-2x next" />
          </button>
        </div>

        <div className="carousel-progress">
          <button>
            {images.map((_, index) => {
              return currentKey === index ? (
                <FaCircle
                  onClick={() => setCurrentKey(index)}
                  key={index}
                  className="carousel-circle"
                />
              ) : (
                <FaRegCircle
                  onClick={() => setCurrentKey(index)}
                  key={index}
                  className="carousel-circle"
                />
              );
            })}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
