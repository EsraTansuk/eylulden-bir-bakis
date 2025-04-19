/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        light: "var(--color-light)",
        medium: "var(--color-medium)",
        textColor: "var(--color-text)",
        backgroundColor: "var(--color-background)",
        
        // Hover/Active/Focus Durumları
        primaryState: {
          hover: "var(--color-primary-hover)",
          active: "var(--color-primary-active)",
        },
        
        // Saydamlık varyasyonları
        transparent: {
          primary: "var(--color-transparent-primary)",
          secondary: "var(--color-transparent-secondary)"
        },
        
        // Gölgeler
        shadow: {
          light: "var(--color-shadow-light)",
          medium: "var(--color-shadow-medium)"
        },
        
        // Vurgu renkleri
        accent: {
          primary: "var(--color-accent-primary)",
          success: "var(--color-accent-success)",
          warning: "var(--color-accent-warning)",
        },
        
        // Metin renkleri
        text: {
          DEFAULT: "var(--color-text)",
          lightColor: "var(--color-text-light)",
          lighterColor: "var(--color-text-lighter)",
          whiteColor: "var(--color-text-white)",
        },
        
        // Kenarlık renkleri
        border: {
          DEFAULT: "var(--color-border)",
          light: "var(--color-border-light)",
        },
        
        // Link renkleri
        link: {
          DEFAULT: "var(--color-link)",
          hover: "var(--color-link-hover)",
        },
        
        // Özel renkler
        dotBgColor: "var(--color-dot-bg)",
        cindoruk: "var(--color-cindoruk)",
      },
      fontFace: {
        charmonman: {
          fontFamily: "var(--font-charmonman)",
        },
        categoryTitle: {
          fontFamily: "var(--font-raleway)",
        },
        mainTitle: {
          fontFamily: "var(--font-newsreader)",
        },
        subHeadling: {
          fontFamily: "var(--font-workSans)",
        },
        text: {
          fontFamily: "var(--font-inter)",
        },
      },
      boxShadow: {
        sm: "0 2px 4px rgba(0, 0, 0, 0.05)",
        md: "0 4px 6px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 15px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
