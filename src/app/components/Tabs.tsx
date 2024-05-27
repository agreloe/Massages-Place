import React, { useState, useRef } from 'react';
import styles from '@/app/styles/tabs.module.scss';
import Image, { StaticImageData } from 'next/image';
import ScrollToButton from '@/app/components/ScrollToButton';
import { gsap, Expo } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

interface Tab {
  title: string;
  content: {
    image: StaticImageData;
    text: string;
    time: string;
    price: string;
  };
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const tabsRef = useRef<HTMLInputElement>(null)
  const q = gsap.utils.selector(tabsRef);
  const tl = useRef()
  gsap.registerPlugin(ScrollTrigger);

  const tabAnim = () => {
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
        q('.img-holder'),
        {
            yPercent: -100
        },
        {
            yPercent: 0
        }, '<25%'
    )
    .fromTo(
        q('.img'),
        {
            yPercent: 100
        },
        {
            yPercent: 0
        }, '<'
      )


        // @ts-ignore
      return () => tl.current.play();
  }

  const clickHandler = (index: number) => {
    setActiveTabIndex(index);
    tabAnim();
  }

  return (
    <div ref={tabsRef} className={`${styles.tabs}`}>
      <div className={`content ${styles.tabs__navigation}`}>
        <ul className={styles.tabs__list}>
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={`${styles.tabs__tab} ${index === activeTabIndex ? styles['tabs__tab--active'] : ''}`}
              onClick={() => clickHandler(index)}
            >
              <ScrollToButton toId='tab' duration={50}>
                {tab.title}
              </ScrollToButton>
            </li>
          ))}
        </ul>
      </div>
      <div id="tab" className={`content ${styles.tabs__content}`}>
        <div className="title">
          <h3>{tabs[activeTabIndex].title}</h3>

          <p className={`py-4 ${styles.tabs__text}`}>{tabs[activeTabIndex].content.text}</p>

          <div className='pb-8 font-bold'>
              <p>{`Duración: ${tabs[activeTabIndex].content.time}`}</p>

              <p>{`Precio: ${tabs[activeTabIndex].content.price}`}</p>
          </div>
        </div>

        <div className='img-holder overflow-hidden'>
          <Image width={0} height={0} sizes='100vw' placeholder="blur" src={tabs[activeTabIndex].content.image} alt={tabs[activeTabIndex].title} className={`w-full img ${styles.tabs__image}`} />
        </div>


      </div>
    </div>
  );
};

export default Tabs;
