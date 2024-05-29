import createNextIntlPlugin from 'next-intl/plugin';
import withPWA from 'next-pwa';
import withPlugins from 'next-compose-plugins';

const withNextIntl = createNextIntlPlugin();



/** @type {import('next').NextConfig} */

const nextConfig = {
  distDir: 'build',
  reactStrictMode: false,
  experimental: {
    appDir: true,
    enableUndici: true
  },
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost:3000',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1:3000',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
    ]
  },

  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgo: false,
            },
          },
        ],
      },
      {
        test: /\.worker\.(ts|js)$/,
        loader: 'worker-loader',
        options: {
          name: 'static/[hash].worker.js',
        },
      }
    );

    return config;
  },
};

const pwaConfig = {
  pwa: {
    dest: 'public',
  },
};

export default withPlugins([
  [withPWA, pwaConfig],
  [withNextIntl],
], nextConfig);
