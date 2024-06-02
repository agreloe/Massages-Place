import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {

  return {
    name: 'Lugar de masajes',
    short_name: 'Lugar de masajes',
    description: 'Masajes en Santiago de Compostela: un santuario de paz y rejuvenecimiento, perfecto para recuperar energías.',
    start_url: "https://lugardemasajes.netlify.app",
    display: 'standalone',
    background_color: '#EDE6E0',
    categories: ["masajes", "camino de santiago", "descontracturante"],
    theme_color: '#EDE6E0',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      }
    ],
  }
}