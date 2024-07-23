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
        indexbg: 'url("/assets/backgrounds/OOTBRocketBG.png")',
        clientsbg: 'url("/assets/backgrounds/OOTBBlurredPlanetsBG.png")',
        "events-management": "linear-gradient(135deg, #8b2a18, #b45d27)",
        "public-relation": "linear-gradient(135deg, #3f2987, #903da4)",
      },
      colors: {
        orange: "#F38920",
        purple: "#A667D1",
      },
      boxShadow: {
        "bottom-glow": "0 0px 15px rgba(255, 105, 180, 0.6)",
        "inner-clients": "0px 50px 44px -22px rgba(166, 103, 209, 1)  inset",
        "inner-service": "0px -177px 157px -73px rgba(0,0,0,1) inset",
        "inner-overlay": "255px 0px 255px 200px rgba(0,0,0,1) inset",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".list-decimal-none": {
          listStyleType: "none",
          counterReset: "list",
        },
        ".list-decimal-none li": {
          counterIncrement: "list",
          position: "relative",
          paddingLeft: "1.5em",
        },
        ".list-decimal-none li::before": {
          content: 'counter(list) "."',
          position: "absolute",
          left: 0,
          color: "white",
        },
        ".hide-scrollbar": {
          /* For Firefox */
          "scrollbar-width": "none",
          /* For Internet Explorer and Edge */
          "-ms-overflow-style": "none",
        },
        ".hide-scrollbar::-webkit-scrollbar": {
          /* For WebKit-based browsers (Chrome, Safari) */
          display: "none",
        },
        ".text-glow": {
          "text-shadow": "0 0 10px rgba(255, 255, 255, 0.7)",
        },
        ".hover\\:text-glow": {
          "@apply hover:text-glow": {},
        },
      });
    },
  ],
};
