import React, { useState } from 'react';
import styles from '@/app/styles/carousel.module.scss';
import useIsomorphicLayoutEffect from '@/utils/useIsomorphicLayoutEffect';
import Right from '@/app/assets/right-arrow.svg';
import Left from '@/app/assets/left-arrow.svg';
import {useTranslations} from 'next-intl';

interface Review {
  author_name: string;
  text: string;
  rating: number;
  author_url: string;
}

interface CarouselProps {
  reviews: Review[];
}

const Carousel: React.FC<CarouselProps> = ({ reviews }) => {
  const t = useTranslations('reviews');
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  useIsomorphicLayoutEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className={styles.carousel}>
      <div className={styles.carousel__slides} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`${styles.carousel__slide} ${index === currentIndex ? styles['carousel__slide--active'] : ''}`}
          >
            <div className={styles.carousel__content}>
              <p className={styles.carousel__text}>{review.text}</p>
              <p className={styles.carousel__author}>- {review.author_name}</p>
              <div className={styles.carousel__rating} style={{ '--rating': review.rating } as React.CSSProperties}></div>
              <a href={review.author_url} target="_blank" rel="noopener noreferrer" className={`underline ${styles.carousel__link}`}>
                {t('button')}
              </a>

            </div>
          </div>
        ))}
      </div>
      <button className={`${styles.carousel__button} ${styles['carousel__button--left']}`} onClick={() => setCurrentIndex((currentIndex === 0 ? reviews.length : currentIndex) - 1)}>
        <Left width="32" height="32"></Left>
        <span className='sr-only'>Ir a la izquierda</span>
      </button>
      <button className={`${styles.carousel__button} ${styles['carousel__button--right']}`} onClick={nextSlide}>
        <Right width="32" height="32"></Right>
        <span className='sr-only'>Ir a la derecha</span>
      </button>
    </div>
  );
};

export default Carousel;
