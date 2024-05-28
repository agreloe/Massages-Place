import React, { useEffect, useState, useRef } from 'react';
import { getPlaceReviews } from '@/utils/googlePlaces';
import Carousel from '@/app/components/Carousel';
import { gsap, Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {useTranslations} from 'next-intl';

interface Review {
  author_name: string;
  rating: number;
  text: string;
  author_url: string;
}

interface ReviewsProps {
  placeId: string;
}

const Reviews: React.FC<ReviewsProps> = ({
  placeId }) => {
    const t = useTranslations('reviews');
  const reviewsRef = useRef<HTMLInputElement>(null)
  const q = gsap.utils.selector(reviewsRef);
  const tl = useRef()
  gsap.registerPlugin(ScrollTrigger);
  const [reviews, setReviews] = useState<Review[]>([]);

  useGSAP(() => {
    //@ts-ignore
    const reviewsAnim = gsap
      .fromTo(
        q('.content'),
        {
            y: 50,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.3,
            ease: Expo.easeOut
        }
      )

      ScrollTrigger.create({
        trigger: reviewsRef.current,
        start: "top 60%",
        end: "bottom top",
        animation: reviewsAnim,
        onEnter: () => {
          // @ts-ignore
          return () => reviewsAnim.play();
        },
      });

      ScrollTrigger.refresh(true)
  })

  useEffect(() => {
    const fetchReviews = async () => {
      const fetchedReviews = await getPlaceReviews(placeId);
      setReviews(fetchedReviews);
    };

    fetchReviews();

    console.log(reviews);
  }, [placeId]);

  return (
    <div ref={reviewsRef} className="py-16 sm:px-8 sm:min-h-[650px] min-h-[475px]">
      <div className="content">
        <h2 className='pb-8 text-center'>{t('title')}</h2>
        {
          reviews.length > 0 ? (

            <Carousel reviews={reviews}></Carousel>
          ) : (
            <p className="text-center">{t('no_reviews')}</p>
          )
        }
      </div>
    </div>
  );
};

export default Reviews;
