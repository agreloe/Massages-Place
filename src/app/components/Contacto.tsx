import React, { useRef } from "react";
import MyGoogleMap from "@/app/components/GoogleMap";
import Form from "@/app/components/Form";
import { gsap, Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {useTranslations} from 'next-intl';

const Contacto: React.FC = () => {
    const t = useTranslations("contact");
  const contactoRef = useRef<HTMLInputElement>(null);
  const q = gsap.utils.selector(contactoRef);
  const tl = useRef<gsap.core.Timeline>();
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    //@ts-ignore
    tl.current = gsap
      .timeline({ defaults: { duration: 0.3, ease: Expo.easeOut } })
      .fromTo(
        q(".title"),
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
        }
      )
      .fromTo(
        q(".content"),
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
        }
      );

    ScrollTrigger.create({
      trigger: contactoRef.current,
      start: "top 60%",
      end: "bottom top",
      animation: tl.current,
    });

    ScrollTrigger.refresh(true);
  }, {scope: contactoRef});
  return (
    <div ref={contactoRef} className="py-16 sm:px-8">
        <span className="h-full w-[1px] block bg-text_color absolute top-0 left-[50%] translate-[-50%, -50%] sm:hidden"></span>
      <h2 className="pb-8 sm:text-center title">
        {t('title')}{" "}
        <span className="text-2xl px-2 sm:text-center sm:block">&#10022;</span>
      </h2>
      <div className="flex gap-8 sm:flex-col justify-between content">
        <div className="w-[40%] sm:w-full flex flex-col gap-8">
          <Form />
          <div>
            <p className="underline">{t('disclaimer')}</p>
            <p>
              {t('disclaimerText')}{" "}
              <a
                href="https://api.whatsapp.com/send/?phone=34691771284&text=Hola%2C+quisiera+pedir+una+cita+para+Masajes+Compostela&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {t('wsapp')}
              </a>
              ,{" "}
              <a
                href="mailto:reservasmasajescompostela@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {t('email')}
              </a>{" "}
              o{" "}
              <a
                href="tel:691771284"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {t('phone')}
              </a>
              .
            </p>
          </div>
        </div>



        <div className="w-[40%] sm:w-full sm:order-1">
          <div className="flex flex-col gap-8">
            <p>
              {t('location')}{" "}
              <a
                className="underline"
                href="https://www.google.com/maps/place//data=!4m2!3m1!1s0xd2eff2244657055:0x559aeaeb76d17d71?sa=X&ved=1t:8290&ictx=111"
                rel="noopener noreferrer"
                target="_blank"
              >
                {t('address')}
              </a>
            </p>

            <MyGoogleMap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
