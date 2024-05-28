import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import GloveIcon from '@/app/assets/globe.svg';

const LocaleSwitcher = () => {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('header');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const locales = ['es', 'en', 'fr', 'de'];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const switchLocale = (newLocale: string) => {
    const { pathname, searchParams } = new URL(window.location.href);
    const newUrl = `/${newLocale}${pathname.replace(`/${locale}`, '')}`;
    router.push(newUrl + searchParams.toString());
    setDropdownOpen(false);
  };

  return (
    <div className='relative'>
      <button onClick={toggleDropdown} className='flex items-center'>
        <GloveIcon width={22} height={22} />
        <span className="sr-only">Cambiar idioma</span>
      </button>

        <ol className={`absolute top-[64px] right-[-1.5rem] w-[100px] bg-bg_color border border-solid border-text_color flex p-4 flex-col justify-center items-center gap-4 sm:border-0 sm:w-[280px] sm:flex-row sm:justify-between sm:top-[50px] sm:left-[50%] sm:right-[50%] sm:translate-x-[-50%] sm:translate-y-[-50%] sm:z-[-1] transition-all ease-in-expo ${dropdownOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          {locales.map((loc) => (
            <li key={loc} className='sm:block sm:w-fit'>
              <button onClick={() => switchLocale(loc)}>
              {t(`locale.${loc}`)}
              </button>
            </li>
          ))}
        </ol>

    </div>
  );
};

export default LocaleSwitcher;
