import React, { useRef } from 'react';
import Tabs from '@/app/components/Tabs';
import relajante from '@/app/assets/photos/relajante.jpg'
import quiropratico from '@/app/assets/photos/quiropractico.jpg'
import profundo from '@/app/assets/photos/profundo.jpg'
import descontracturante from '@/app/assets/photos/descontracturante.jpg'
import compostela from '@/app/assets/photos/compostela.jpg'
import deluxe from '@/app/assets/photos/deluxe.jpg'
import piernascansadas from '@/app/assets/photos/piernas-cansadas.jpg'
import aromaterapia from '@/app/assets/photos/aromaterapia.jpeg'
import regenerativo from '@/app/assets/photos/regenerativo.jpg'
import { gsap, Expo } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Masajes: React.FC = () => {
    const masajes = [
        {
          title: 'Masaje Compostela',
          content: {
            image: compostela,
            text: 'Elimina la inflamación, mejora la circulación de tu piernas y  refréscate. El masaje compostela es un masaje completo descontracturante, donde recibirás un tratamiento único de piernas cansadas, reflexología  o vendas en frío. Además el masaje incluye esencia de romero, vital para tus  piernas. Finalmente terminaremos con una mascarilla de aloe vera.',
            time: '90 minutos',
            price: '80€'
          }
        },
        {
          title: 'Masaje Deluxe',
          content: {
            image: deluxe,
            text: 'El masaje deluxe se trata de  una terapia destinada a mejorar el bienestar de la persona  pues su máximo objetivo es aumentar la producción de endorfinas en nuestro cuerpo, acompañado con un ritual de aromaterapia con un aceite esencial  de lavanda. Disfrutarás de un masaje de hombros y cabeza, acompañado de aceite esencial de lavanda y un tratamiento facial, hidratando e forma profunda la piel de tu cara y de tu cuello.',
            time: '90 minutos',
            price: '80€'
          }
        },
        {
          title: 'Masaje Regenerativo',
          content: {
            image: regenerativo,
            text: 'Este masaje que tiene como objetivo aliviar la tensión muscular, mejorar la circulación sanguínea, estimular el sistema inmunológico y favorecer la recuperación de los tejidos dañados. Se trata de un masaje que combina técnicas suaves y profundas, presiones, amasamientos, roces y movimientos específicos sobre la piel, con el fin de relajar el cuerpo y la mente.',
            time: '40 minutos',
            price: '30€'
          }
        },
        {
          title: 'Masaje Decontracturante',
          content: {
            image: descontracturante,
            text: 'Experimenta un alivio inmediato del estrés y la tensión acumulada en tu cuerpo con nuestro masaje decontracturante. Mediante técnicas especializadas, trabajaremos en los puntos de tensión muscular, liberando nudos y restableciendo la flexibilidad y el equilibrio en tu cuerpo. Este masaje es ideal para aquellos que buscan alivio de dolores musculares y rigidez.',
            time: '60 minutos',
            price: '60€'
          }
        },
        {
          title: 'Masaje Profundo',
          content: {
            image: profundo,
            text: 'Masaje de espalda, masaje de cuello y masaje de hombros. Este masaje de presión firme, se enfoca en la tensión y tirantez del músculo. El masaje profundo se trata de un masaje a lo largo de toda la espalda, enfocado a las personas que pasan varias horas del día sentadas y que han adoptado malos hábitos posturales. Relaja la zona lumbar, el cuello, la cabeza y los hombros con nuestro masaje profundo.',
            time: '60 minutos',
            price: '60€'
          }
        },
        {
          title: 'Masaje Quiropráctico',
          content: {
            image: quiropratico,
            text: 'Experimenta un alivio inmediato del estrés y la tensión acumulada en tu cuerpo con nuestro masaje quiropráctico. Se trata de un masaje descontracturante que consiste en eliminar las contracturas que provocamos al realizar nuestra actividad cotidiana, con estrés o crispación. Sea cual sea la causa de la contractura es necesario eliminarla porque crea una descompensación estructural.',
            time: '60 minutos',
            price: '55€'
          }
        },
        {
          title: 'Masaje Piernas Cansadas',
          content: {
            image: piernascansadas,
            text: 'Empezaremos con un masaje en la pierna entera, trabajaremos con   presión suave, con poco de drenaje, realizando vaciados, a continuación, se acompañará con un ritual especial verano, con un aceite esencial. El aceite esencial quimiotipado de Romero, es el aceite de la mente. Usado en la antigua Grecia, con propiedades analgésicas, relajantes musculares, drenantes y activadoras de la circulación, finalmente realizaremos un vendaje en pierna entera efecto frio',
            time: '60 minutos',
            price: '60€'
          }
        },
        {
          title: 'Masaje Relajante',
          content: {
            image: relajante,
            text: 'Experimenta un alivio inmediato del estrés y la tensión acumulada en tu cuerpo con nuestro masaje relajante. Mediante técnicas especializadas, trabajaremos en los puntos de tensión muscular, liberando nudos y restableciendo la flexibilidad y el equilibrio en tu cuerpo. Este masaje es ideal para aquellos que buscan alivio de tensión muscular.',
            time: '60 minutos',
            price: '60€'
          }
        },
        {
          title: 'Aromaterapia',
          content: {
            image: aromaterapia,
            text: 'Ya sea que desees reducir el estrés, aliviar dolores musculares, mejorar la calidad del sueño o simplemente consentirte, nuestro masaje de aromaterapia te brindará una experiencia holística y personalizada. Permítenos llevarte a un viaje de relajación y sanación, donde los aromas y las manos expertas de nuestro terapeuta se unen para brindarte una experiencia inolvidable de bienestar y rejuvenecimiento.',
            time: '60 minutos',
            price: '60€'
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
        <h2 className='pb-8 sm:px-8 sm:text-center title'>Nuestros Masajes <span className="text-2xl px-2 sm:text-center sm:block">&#10022;</span></h2>
     <Tabs tabs={masajes} />
    </div>
  );
};

export default Masajes;