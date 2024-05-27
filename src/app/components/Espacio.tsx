import React, { useRef } from 'react';
import espacio from '@/app/assets/photos/espacio.jpg';
import Image from 'next/image';
import { gsap, Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {useTranslations} from 'next-intl';

const Espacio: React.FC = () => {
    const t = useTranslations('space');
    const espacioRef = useRef<HTMLInputElement>(null)
  const q = gsap.utils.selector(espacioRef);
  const tl = useRef()
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(()=>{
    //@ts-ignore
    const blockAnim = gsap
      .fromTo(
        q('.content'),
        {
            y: 100,
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
        trigger: espacioRef.current,
        start: "top 60%",
        end: "bottom top",
        animation: blockAnim,
        onEnter: () => {
          // @ts-ignore
          return () => blockAnim.play();
        },
      });

      ScrollTrigger.refresh(true)
  })

  return (
    <div ref={espacioRef} className="py-16 sm:px-8 flex sm:flex-col gap-8 justify-between sm:justify-center sm:gap-16">


        <div className='content w-[40%] sm:w-full sm:order-2'>
            <div className="arc-wrapper">
                <div className='arc'>
                    <Image src={espacio} alt='Foto de la cabina de masajes' width={0} height={0} sizes='100vw' placeholder="blur" className='w-full h-full object-cover'></Image>
                </div>
            </div>

        </div>

        <span className='h-full w-[1px] block bg-text_color absolute top-0 left-[50%] translate-[-50%, -50%] sm:hidden'></span>

        <div className='content w-[40%] sm:w-full'>
            <h2 className='pb-8 sm:text-center'>{t('title')} <span className="text-2xl px-2 sm:text-center sm:block">&#10022;</span></h2>
            <p className='pb-4'>{t('description')}</p>
            <p>{t('description2')}</p>
            <a href='https://api.whatsapp.com/send/?phone=34691771284&text=Hola%2C+quisiera+pedir+una+cita+para+Masajes+Compostela&type=phone_number&app_absent=0' target='_blank' rel='noopener noreferrer' className='mt-8 p-2 px-6 border border-solid border-text_color outline outline-transparent hover:outline-text_color hover:outline-offset-4 w-fit outline-1 transition-all ease-in-expo block sm:mx-auto'>{t('button')}</a>
        </div>


    </div>
  )

}

export default Espacio;