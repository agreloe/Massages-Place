"use client";
import React, { useState, useRef, useEffect } from 'react';
import Reviews from '@/app/components/Reviews';
import VideoComponent from '@/app/components/VideoComponent';
import Contacto from '@/app/components/Contacto';
import Blur from '@/app/assets/blur.svg';
import useIsomorphicLayoutEffect from '@/utils/useIsomorphicLayoutEffect';
import Masajes from '@/app/components/Masajes';
import Espacio from '@/app/components/Espacio';
import { gsap, Expo } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {useTranslations} from 'next-intl';


// @ts-ignore
const Home: React.FC = () => {
  const t = useTranslations("modal");

  const placeId = 'ChIJVXBlRCL_Lg0RcX3RduvqmlU';

  const homeRef = useRef<HTMLInputElement>(null)
  const q = gsap.utils.selector(homeRef);
  const tl = useRef()
  gsap.registerPlugin(ScrollTrigger);

  const handleClose = () => {
    document.getElementById('modal')?.classList.remove('open');
  };

  useEffect(() => {
    let anim = gsap.fromTo(
      q('.blur-bottom'),
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 3,
      }
    )

    anim.play();
  })

  return (
    <main ref={homeRef} className='relative overflow-hidden pt-[80px]'>
      <Blur className="blur w-[600px] h-[500px]"></Blur>
      <Blur className="blur-bottom w-[600px] h-[500px] rotate-45"></Blur>
      <section className='pt-16 pb-20 sm:px-8 border-b border-solid border-text_color relative'>
        <div className='container'>
        <VideoComponent></VideoComponent>
        </div>
      </section>
      <section id='masajes' className="border-b border-text_color">
        <div className="container">
          <Masajes></Masajes>
        </div>
      </section>

      <section id='espacio' className="border-b border-text_color relative">
        <div className="container">
          <Espacio></Espacio>
        </div>
      </section>

      <section className="border-b border-text_color">
        <div className="container">
          <Reviews placeId={placeId} />
        </div>
      </section>



      <section id='contacto' className='pb-[120px] relative'>
        <div className='container'>
          <Contacto></Contacto>
        </div>
      </section>

      <div id='modal' className='absolute left-0 top-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] w-full h-full z-200 pointer-events-none opacity-0 transition-all ease-in-expo'>

        <div id='modal-content' className=' bg-bg_color border border-solid border-text_color p-8 text-center h-[300px] w-full mx-8 flex justify-center items-center flex-col gap-4 relative lg:w-[50%]'>
          <button type="button" onClick={handleClose} className='absolute top-[0.7rem] right-[1.5rem]' >
            <span className='text-[2.5rem]'>&#215;</span>
            <span className="sr-only">Cerrar</span>
          </button>
          <p className='text-h5'>{t('title')}</p>
          <p>{t('description')}</p>
          <p>{t('description2')}{" "}<a className='underline' href='https://api.whatsapp.com/send/?phone=34691771284&text=Hola%2C+quisiera+pedir+una+cita+para+un+masaje&type=phone_number&app_absent=0' target='_blank' rel="noopener noreferrer">WhatsApp</a></p>
        </div>
      </div>



    </main>
  );
};

export default Home;
