import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import GloveIcon from '@/app/assets/globe.svg'

const LocaleSwitcher = () => {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('header');
  const otherLocale = locale === 'en' ? 'es' : 'en';

  const switchLocale = () => {
    const { pathname, searchParams } = new URL(window.location.href);
    const newUrl = `/${otherLocale}${pathname.replace(`/${locale}`, '')}`;
    router.push(newUrl + searchParams.toString());
  };

  return (
    <button onClick={switchLocale} className='flex items-center'>
        <span className='sr-only'>Cambiar idioma</span>
        <GloveIcon width={22} height={22}></GloveIcon>
      {t('switchLocale', { locale: otherLocale })}
    </button>
  );
};

export default LocaleSwitcher;
