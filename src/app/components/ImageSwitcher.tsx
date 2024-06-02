import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import deluxe from '@/app/assets/webp/Postre-Matuca-19.webp'; // Add more image URLs as needed
import deluxe2 from '@/app/assets/webp/Postre-Matuca-21.webp'; // Add more image URLs as needed
import deluxe3 from '@/app/assets/webp/Postre-Matuca-17.webp'; // Add more image URLs as needed

const images = [
  deluxe,
  deluxe2,
  deluxe3,
  // Add more image URLs as needed
];

const FadeImage: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [nextImageIndex, setNextImageIndex] = useState(1);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setNextImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setTimeout(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000); // Match this duration to your CSS animation duration
      }, 4000); // Change image every 4 seconds

      return () => clearInterval(intervalId);
    }, []);

    return (
      <figure className={'timelineFigure'}>
        {images.map((src, index) => (
          <figure
            key={index}
            className={`imageFigure ${index === currentImageIndex ? 'fadeIn' : 'fadeOut'}`}
          >
            <Image src={src} alt={`Image ${index + 1}`} width={0} height={0} sizes='100vw' className='w-full h-full object-cover' />
          </figure>
        ))}
      </figure>
    );
  };

  export default FadeImage;