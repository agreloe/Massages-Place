import React, { useRef, useEffect } from 'react';
import { gsap, Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useIsomorphicLayoutEffect from '@/utils/useIsomorphicLayoutEffect';
import {useTranslations} from 'next-intl';
import deluxe from '@/app/assets/webp/deluxe.webp'
import Image from 'next/image';
import useMediaQuery from '@/utils/useMediaQuery';

const VideoComponent: React.FC = () => {
  const videoElementRef = useRef<HTMLVideoElement | null>(null);
  const t = useTranslations('videoComponent');
  const videoRef = useRef<HTMLInputElement>(null)
  const q = gsap.utils.selector(videoRef);
  const tl = useRef()
  gsap.registerPlugin(ScrollTrigger);

  const isBreakpoint = useMediaQuery(767.9);

  useIsomorphicLayoutEffect(() => {

    let anim = gsap.fromTo(q('.section'), {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.3,
      ease: Expo.easeOut,
    }
    )

    anim.play();

  })

  useIsomorphicLayoutEffect(() => {
    const handleResize = () => {
      if (videoElementRef.current) {
        if (isBreakpoint) {
          videoElementRef.current.play();
        } else {
          videoElementRef.current.pause();
        }
      }

      window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }})



  return (
    <div ref={videoRef} className='flex items-center justify-between sm:flex-col sm:gap-16 sm-justify-center h-full'>
        <div className='section'>
            <p className='color-text-color text-2xl sm:hidden'>&#10022;</p>
            <h1 className='sm:text-center'>{t('title')}</h1>
            <p className='w-[60%] sm:w-full sm:text-center'>{t('description')}</p>
        </div>

        <span className='h-full w-[1px] block bg-text_color absolute top-0 left-[50%] translate-[-50%, -50%] sm:hidden'></span>

        <div className="arc-wrapper section">

      <div className='arc'>
      <picture className='hiddem sm:block sm:w-full sm:h-full sm:object-cover'>
        {/* @ts-ignore */}
        <source media="(max-width: 767px)" srcSet={deluxe}  />
        <Image className='w-full !h-full object-cover object-right' src={deluxe} alt="Imagen de aceites esenciales" width={0} height={0} sizes='100vw'></Image>
      </picture>

        <video ref={videoElementRef} className='arc-video sm:hidden sm:w-full sm:h-auto' autoPlay loop muted>
        <source src="/video-portada-mc.webm" type="video/webm" />
        </video>
      </div>
        </div>
    </div>
  );
};

export default VideoComponent;