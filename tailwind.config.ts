import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xl': {'min': '1920px'},
        'lg': {'min': '1280px', 'max': '1919.9px'},
        'md': {'min': '768px', 'max': '1279.9px'},
        'sm': {'max': '767.9px'},
        'xs': {'max': '375.9px'}
      },
      colors: {
        bg_color: "#EBE5E0",
        primary: "#DEACAA",
        accent: "#E8DDD1",
        border: "#DBBFBB",
        text_color: "#39383A",
      },
      fontSize: {
        label: "0.75rem",
        h1: "2.986rem",
        h2: "2.488rem",
        h3: "2.074rem",
        h4: "1.728rem",
        h5: "1.44rem",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
      },
      zIndex: {
        '-1': '-1',
        '20': '20',
        '100': '100',
        '200': '200',
      }
    },
  },
  plugins: [],
};
export default config;
