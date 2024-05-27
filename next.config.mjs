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
      config.module.rules.push({
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgo: false,
            },
          },
        ],
      });

      return config;
    },


};

export default nextConfig;
