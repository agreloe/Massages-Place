import React, { useRef } from 'react';
import Tabs from '@/app/components/Tabs';
import relajante from '@/app/assets/webp/relajante.webp'
import quiropratico from '@/app/assets/webp/quiropractico.webp'
import profundo from '@/app/assets/webp/profundo.webp'
import descontracturante from '@/app/assets/webp/descontracturante.webp'
import compostela from '@/app/assets/webp/compostela.webp'
import deluxe from '@/app/assets/webp/deluxe.webp'
import piernascansadas from '@/app/assets/webp/piernas-cansadas.webp'
import aromaterapia from '@/app/assets/webp/aromaterapia.webp'
import regenerativo from '@/app/assets/webp/regenerativo.webp'
import { gsap, Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {useTranslations} from 'next-intl';

const Masajes: React.FC = () => {
  const t = useTranslations('massages');
    const masajes = [
        {
          title: t('compostela.title'),
          content: {
            image: compostela,
            text: t('compostela.description'),
            time: t('compostela.time'),
            price: t('compostela.price')
          }
        },
        {
          title: t('deluxe.title'),
          content: {
            image: deluxe,
            text: t('deluxe.description'),
            time: t('deluxe.time'),
            price: t('deluxe.price')
          }
        },
        {
          title: t('regenerative.title'),
          content: {
            image: regenerativo,
            text: t('regenerative.description'),
            time: t('regenerative.time'),
            price: t('regenerative.price')
          }
        },
        {
          title: t('decontracturant.title'),
          content: {
            image: descontracturante,
            text: t('decontracturant.description'),
            time: t('decontracturant.time'),
            price: t('decontracturant.price')
          }
        },
        {
          title: t('deep.title'),
          content: {
            image: profundo,
            text: t('deep.description'),
            time: t('deep.time'),
            price: t('deep.price')
          }
        },
        {
          title: t('quiropractic.title'),
          content: {
            image: quiropratico,
            text: t('quiropractic.description'),
            time: t('quiropractic.time'),
            price: t('quiropractic.price'),
          }
        },
        {
          title: t('tiredLegs.title'),
          content: {
            image: piernascansadas,
            text: t('tiredLegs.description'),
            time: t('tiredLegs.time'),
            price: t('tiredLegs.price'),
          }
        },
        {
          title: t('relaxing.title'),
          content: {
            image: relajante,
            text: t('relaxing.description'),
            time: t('relaxing.time'),
            price: t('relaxing.price'),
          }
        },
        {
          title: t('aromatheraphy.title'),
          content: {
            image: aromaterapia,
            text: t('aromatheraphy.description'),
            time: t('aromatheraphy.time'),
            price: t('aromatheraphy.price'),
          }
        }
      ];
      const massageRef = useRef<HTMLInputElement>(null)
  const q = gsap.utils.selector(massageRef);
  const tl = useRef()
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    //@ts-ignore
     tl.current = gsap
        .timeline({defaults: {duration: 0.3, ease: Expo.easeOut}})
        .fromTo(
            q('.title'),
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
            }
        )
        .fromTo(
          q('.content'),
          {
            y: 50,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
          }
        )

        ScrollTrigger.create({
          trigger: massageRef.current,
          start: "top 60%",
          end: "bottom top",
          animation: tl.current,
          onEnter: () => {
            // @ts-ignore
            return () => tl.current.play();
          },
        });

        ScrollTrigger.refresh(true)
  })

  return (
    <div ref={massageRef} className='py-16'>
        <h2 className='pb-8 sm:px-8 sm:text-center title'>{t('title')} <span className="text-2xl px-2 sm:text-center sm:block">&#10022;</span></h2>
     <Tabs tabs={masajes} />
    </div>
  );
};

export default Masajes;