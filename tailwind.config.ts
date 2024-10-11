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
        background: "rgb(var(--background))",
        background_bg: "rgb(var(--background) / var(--tw-bg-opacity))",
        background_fg: "rgb(var(--background) / var(--tw-text-opacity))",
        foreground: "rgb(var(--foreground))",
        foreground_bg: "rgb(var(--foreground) / var(--tw-bg-opacity))",
        foreground_fg: "rgb(var(--foreground) / var(--tw-text-opacity))",
      },
    },
  },
  plugins: [],
};
export default config;
