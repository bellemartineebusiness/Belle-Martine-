import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F5C842',
        'primary-dark': '#d4a92e',
        background: '#0a0a0a',
        surface: '#1a1a1a',
        'surface-light': '#2a2a2a',
      },
    },
  },
  plugins: [],
};
export default config;
