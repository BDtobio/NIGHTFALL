import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      fontFamily: {
        muro: ["Muro"],
        Blastimo:["Blastimo"],
        heading15medium: ["Heading15Medium"],
        headingMedium: ["HeadingMedium"],
        Hamston:["Hamston"], 
      nougat:["Nougat"],
        nickson: ["Nickson"],
      },
      
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
