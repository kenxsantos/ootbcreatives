/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  // These paths are just examples, customize them to match your project structure
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        metropolis: ["Metropolis", "sans-serif"],
        jost: ["Jost"],
      },
      backgroundImage: {
        indexbg: 'url("/public/assets/OOTBRocketBG.png")',
        "events-management": "linear-gradient(135deg, #8b2a18, #b45d27)",
        "public-relation": "linear-gradient(135deg, #3f2987, #903da4)",
      },
    },
  },
  plugins: [],
};
