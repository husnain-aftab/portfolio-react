// tailwind.config.js
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      container: { center: true, padding: "1rem" },
      colors: {
        background: "hsl(0 0% 100%)",
        foreground: "hsl(222 47% 11%)",
        muted: "hsl(210 16% 93%)",
        primary: "hsl(262 83% 58%)",
        navy: {
          800: '#1e3a8a',
          900: '#172554'
        }
      }
    }
  },
  plugins: [],
};
