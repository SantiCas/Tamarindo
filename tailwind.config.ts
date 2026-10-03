import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tamarindo: {
          50: "#fef9ec",
          100: "#fdf0ca",
          200: "#fae090",
          300: "#f7c94d",
          400: "#f5b325",
          500: "#ee930c",
          600: "#d26d07",
          700: "#ae4c09",
          800: "#8d3b0f",
          900: "#753110",
          950: "#431705",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
