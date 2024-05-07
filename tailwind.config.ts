import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: "#fff",
        dimgray: {
          100: "#686868",
          200: "#5e5e5e",
          300: "#555",
          400: "#525252",
        },
        black: "#000",
        darkblue: "#002abc",
        gainsboro: "#e3e3e3",
        darkgray: "#9ba1ab",
      },
      fontFamily: {
        montserrat: "Montserrat",
        unna: "Unna",
      },
      borderRadius: {
        "8xs": "5px",
        "10xs-6": "2.6px",
        "10xs-9": "2.9px",
      },
    },
    fontSize: {
      "4xs": "0.56rem",
      "6xs": "0.44rem",
      "5xs": "0.5rem",
      base: "1rem",
      xs: "0.75rem",
      "5xs-5": "0.47rem",
      "6xs-5": "0.41rem",
      "3xs": "0.63rem",
      "2xs": "0.69rem",
    },
  },
  screens: {
    sm: "640px",
    md: "768px",

    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
    "3xl": "1792px",
  },
  corePlugins: {
    preflight: false,
  },
  important: true,
  plugins: [],
};
export default config;
