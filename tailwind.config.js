/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  // These paths are just examples, customize them to match your project structure
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        metropolis: ["metropolis", "sans-serif"],
        jost: ["Jost"],
      },
    },
  },
  plugins: [],
};
