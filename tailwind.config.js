/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,ts}", // Inclui todos os arquivos HTML e TypeScript
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e293b",
        secondary: "#182130",
        label: "#f8fafb",
      },
      boxShadow: {
        default: "0 4px 20px rgba(25, 25, 25, 0.15)",
      },
    },
  },
  plugins: [],
};
