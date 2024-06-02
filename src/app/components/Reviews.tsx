import React, { useEffect, useState, useRef } from 'react';
import { getPlaceReviews } from '@/utils/googlePlaces';
import Carousel from '@/app/components/Carousel';
import { gsap, Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {useTranslations} from 'next-intl';
import Worker from 'worker-loader!../workers/reviewsWorker';
import AnimationWorker from 'worker-loader!../workers/animationWorker';
import useIsomorphicLayoutEffect from '@/utils/useIsomorphicLayoutEffect';

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
    const worker = useRef<Worker | null>(null);
  const animationWorker = useRef<AnimationWorker | null>(null);
    const t = useTranslations('reviews');
  const reviewsRef = useRef<HTMLInputElement>(null)
  const q = gsap.utils.selector(reviewsRef);
  const tl = useRef()
  gsap.registerPlugin(ScrollTrigger);
  const [reviews, setReviews] = useState<Review[]>([]);

  const fakeReviews = [
    {
      "author_name": "John Doe",
      "author_url": "https://www.google.com/maps/contrib/123456789012345678901/reviews",
      "language": "en",
      "profile_photo_url": "https://lh3.googleusercontent.com/a-/1234567890abcdefg",
      "rating": 5,
      "relative_time_description": "a month ago",
      "text": "Absolutely wonderful experience! The massage was incredibly relaxing and the staff was very professional. I'll definitely be coming back!",
      "time": 1609459200
  },
    {
      "author_name": "Jane Gardner",
      "author_url": "https://www.google.com/maps/contrib/123456789012345678901/reviews",
      "language": "en",
      "profile_photo_url": "https://lh3.googleusercontent.com/a-/1234567890abcdefg",
      "rating": 5,
      "relative_time_description": "a month ago",
      "text": "Best massage I've ever had! The ambiance was soothing, and the therapist was very skilled. Left feeling rejuvenated and stress-free. Highly recommend!",
      "time": 1609459200
  },
    {
      "author_name": "William Smith",
      "author_url": "https://www.google.com/maps/contrib/123456789012345678901/reviews",
      "language": "en",
      "profile_photo_url": "https://lh3.googleusercontent.com/a-/1234567890abcdefg",
      "rating": 5,
      "relative_time_description": "a month ago",
      "text": "Fantastic service and atmosphere! The massage was perfect, targeting all my sore spots. The staff is friendly and attentive. Can't wait for my next session!",
      "time": 1609459200
  },
    {
      "author_name": "Gary Wallace",
      "author_url": "https://www.google.com/maps/contrib/123456789012345678901/reviews",
      "language": "en",
      "profile_photo_url": "https://lh3.googleusercontent.com/a-/1234567890abcdefg",
      "rating": 5,
      "relative_time_description": "a month ago",
      "text": "An oasis of relaxation! The massage therapist was amazing, easing all my tension. Clean and serene environment. Five stars well-deserved!",
      "time": 1609459200
  },
    {
      "author_name": "Jeffrey Lee",
      "author_url": "https://www.google.com/maps/contrib/123456789012345678901/reviews",
      "language": "en",
      "profile_photo_url": "https://lh3.googleusercontent.com/a-/1234567890abcdefg",
      "rating": 5,
      "relative_time_description": "a month ago",
      "text": "Exceeded my expectations! The massage was just what I needed after a stressful week. Professional and welcoming staff. Highly recommend this place!",
      "time": 1609459200
  },
  ]

  /* useGSAP(() => {
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
  }) */

  /* useEffect(() => {
    const fetchReviews = async () => {
      const fetchedReviews = await getPlaceReviews(placeId);
      setReviews(fetchedReviews);
    };

    fetchReviews();

  }, [placeId]); */

  useIsomorphicLayoutEffect(() => {
    worker.current = new Worker();

    worker.current.onmessage = (event: MessageEvent) => {
      const message = event.data;
      if (message.type === 'REVIEWS_RESULT') {
        setReviews(fakeReviews);
      }
    };

    worker.current.postMessage({ type: 'FETCH_REVIEWS', payload: { placeId: placeId } });

    return () => {
      worker.current?.terminate();
    };
  }, []);

  useIsomorphicLayoutEffect(() => {

    const handleAnimation = () => {
      animationWorker.current = new AnimationWorker();

      animationWorker.current.onmessage = (event: MessageEvent) => {
        const { type, payload } = event.data;
        if (type === 'ANIMATION_RESULT') {


          const reviewsAnim = gsap
      .fromTo(
        q('.content'),
        {
            y: payload[0].y,
            opacity: payload[0].opacity,
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
        }
      };

      animationWorker.current.postMessage({
        type: 'ANIMATE',
        payload: [
          { y: 50, opacity: 0 }
        ]
      });
    };

    handleAnimation();

    return () => {
      animationWorker.current?.terminate();
    };
  },[])


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
