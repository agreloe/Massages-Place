"use client";
import useIsomorphicLayoutEffect from '@/utils/useIsomorphicLayoutEffect';
import { useEffect } from 'react';

const ServiceWorkerProvider: React.FC = () => {
  useIsomorphicLayoutEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
          .then((registration) => {
            console.log('Service worker registered:', registration);
          })
          .catch((registrationError) => {
            console.log('Service worker registration failed:', registrationError);
          });
      });
    }
  }, []);

  return null;
};

export default ServiceWorkerProvider;
