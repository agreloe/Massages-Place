import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {

  return {
    name: 'Masajes Compostela',
    short_name: 'Masajes Compostela',
    description: 'Masajes en Santiago de Compostela: un santuario de paz y rejuvenecimiento, perfecto para recuperar energías.',
    start_url: "https://masajescompostela.com/",
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
    ],
  }
}