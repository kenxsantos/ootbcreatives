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
        rocket: 'url("/assets/backgrounds/OOTBRocketBG.png")',
        "blurred-planets":
          'url("/assets/backgrounds/OOTBBlurredPlanetsBG.png")',
        "clear-planets": 'url("/assets/backgrounds/OOTBClearPlanetsBG.png")',
        academy: 'url("/assets/backgrounds/OOTBAcademyBG.png")',
        "gradient-red":
          "linear-gradient(90deg, rgba(200,111,73,1) 26%, rgba(208,129,96,1) 45%, rgba(221,159,133,1) 63%, rgba(199,179,183,1) 90%)",
        "gradient-purple":
          "linear-gradient(90deg, rgba(114,64,130,1) 26%, rgba(155,120,164,1) 100%)",
        "gradient-white":
          "linear-gradient(0deg, rgba(255,255,255,0.3757878151260504) 0%, rgba(255,255,255,1) 100%)",
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
        "border-glow": "20px 20px 60px #bebebe, -20px -20px 60px #ffffff",
        "inner-crewmates": "1px 200px 400px -53px rgba(255,255,255,0.4) inset",
      },
      rotate: {
        120: "120deg",
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
