"use client";

import React, { useState, useEffect, useRef } from "react";
import useIsomorphicLayoutEffect from "@/utils/useIsomorphicLayoutEffect";
import { useRouter } from "next/navigation";
import styles from "@/app/styles/header.module.scss";
import ScrollToButton from "@/app/components/ScrollToButton";
import { gsap, Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useMediaQuery from "@/utils/useMediaQuery";
import LocaleSwitcher from "@/app/components/LocaleSwitcher";
import { useTranslations } from 'next-intl';
import logoImg from '@/app/assets/logo-mc-v2.webp';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  const t = useTranslations('header');
  const router = useRouter();
  //const [visible, setVisible] = useState(false);
  const [toggle, setToggle] = useState(false);
  const isBreakpoint = useMediaQuery(767.9);
  const menuRef = useRef<HTMLUListElement>(null);
  const headerRef = useRef<HTMLInputElement>(null);
  const q = gsap.utils.selector(headerRef);
  gsap.registerPlugin(ScrollTrigger);

  /* const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setVisible(currentScrollPos < 20);
  };

  useEffect(() => {
    setVisible(false);
  }, []);

  useIsomorphicLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visible]); */

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node) && toggle) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggle]);

  const handleRefresh = () => {
    router.push("/");
    router.refresh();
  };

  const openMenu = () => {
    if(toggle) {
      setToggle(false);
    }
    else {
      setToggle(true);
    }

    if (isBreakpoint) {
      // @ts-ignore
      let anim = gsap.fromTo(
        q('.nav-item'),
        {
          y: '100%',
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.3,
          ease: Expo.easeOut,
          delay: 0.3
        },
      );

      // @ts-ignore
      !toggle ? anim.play() : anim.reverse(0);
    }
  };


  return (
    <header
      ref={headerRef}
      className={`w-[100%] fixed z-[100] bg-bg_color border-b border-solid border-text_color ${styles.header}`}
    >
      <div className="header-style">
        <nav className="py-2 px-6 flex items-center justify-between min-h-[80px] relative">
          <button type="button" onClick={handleRefresh} className="z-[100]">
            <span className="sr-only">Pagina de Inicio</span>
            <Link href="/">
              <Image src={logoImg} alt="Logo de lugar de masajes" width={90} height={90}></Image>
            </Link>
          </button>
          <button
            type="button"
            id="button"
            onClick={openMenu}
            className={`${styles.hamburger} ${toggle ? styles.open : ""}`}
            aria-pressed={toggle ? "true" : "false"}
          >
            <span></span>
            <span className="sr-only">Menu</span>
          </button>
          <ul ref={menuRef} className={`nav-items flex items-center gap-4 sm:gap-8 ${toggle ? styles.active : ""}`}>
            <li className="nav-item" onClick={openMenu}>
              <ScrollToButton toId="masajes" duration={150}>
                {t('massages')}
              </ScrollToButton>
            </li>
            <li className="nav-item" onClick={openMenu}>
              <ScrollToButton toId="espacio" duration={150}>
                {t('space')}
              </ScrollToButton>
            </li>
            <li className="nav-item" onClick={openMenu}>
              <ScrollToButton toId="contacto" duration={150}>
                {t('contact')}
              </ScrollToButton>
            </li>
            <li className="nav-item">
              <LocaleSwitcher />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
