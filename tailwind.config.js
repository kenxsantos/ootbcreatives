/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  // These paths are just examples, customize them to match your project structure
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      animation: {
        spinSlow: "spin 8s linear infinite",
      },
      screens: {
        xs: "390px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
        "4xl": "2560px",
        "5xl": "3200px",
      },
      clipPath: {
        "custom-polygon":
          "polygon(7% 0%, 100% 0%, 100% 100%, 7% 100%, 0% 93%, 0% 7%)",
      },
      fontFamily: {
        metropolis: ["Metropolis", "sans-serif"],
        jost: ["Jost"],
        garnet: ["Garnet", "sans-serif"],
      },
      backgroundImage: {
        rocket: 'url("/assets/backgrounds/OOTBRocketBG.webp")',
        "vertical-planets": 'url("/assets/backgrounds/OOTBVerticalBG.webp")',
        "vertical-planets-1":
          'url("/assets/backgrounds/OOTBVerticalPlanets1.webp")',
        "vertical-planets-2":
          'url("/assets/backgrounds/OOTBVerticalPlanets2.webp")',
        "vertical-planets-3":
          'url("/assets/backgrounds/OOTBVerticalPlanets3.webp")',
        "vertical-planets-4":
          'url("/assets/backgrounds/OOTBVerticalPlanets4.webp")',
        "blurred-planets":
          'url("/assets/backgrounds/OOTBBlurredPlanetsBG.webp")',
        "clear-planets": 'url("/assets/backgrounds/OOTBClearPlanetsBG.webp")',
        academy: 'url("/assets/backgrounds/OOTBAcademyBG.webp")',
        "gradient-red":
          "linear-gradient(90deg, rgba(200,111,73,1) 26%, rgba(208,129,96,1) 45%, rgba(221,159,133,1) 63%, rgba(199,179,183,1) 90%)",
        "gradient-purple":
          "linear-gradient(90deg, rgba(114,64,130,1) 26%, rgba(155,120,164,1) 100%)",
        "gradient-white":
          "linear-gradient(0deg, rgba(255,255,255,0.3757878151260504) 0%, rgba(255,255,255,1) 100%)",
        "gradient-navbar":
          "linear-gradient(90deg, rgba(166,103,209,0) 0%, rgba(0,212,255,1) 100%)",

        //new homepage

        services: 'url("/assets/backgrounds/services.png")',
        clients: 'url("/assets/backgrounds/clients.png")',
        crewmates: 'url("/assets/backgrounds/crewmates.png")',
        "show-services": 'url("/assets/backgrounds/show-services.png")',
      },
      colors: {
        "orange-red": "#EF722E",
        onyx: "#3A3A3C",
        purple: "#7D2A8C",
        "oxford-blue": "#122344",
        "honey-yellow": "#FCB43E",
      },
      boxShadow: {
        "bottom-glow": "0 0px 15px rgba(255, 105, 180, 0.6)",
        "inner-clients": "0px 50px 44px -22px rgba(166, 103, 209, 1)  inset",
        "inner-service": "0px -177px 157px -73px rgba(0,0,0,1) inset",
        "inner-overlay": "450px 0px 500px 100px rgba(0, 0, 0, 0.9) inset",
        "border-glow": "20px 20px 60px #bebebe, -20px -20px 60px #ffffff",
        "inner-crewmates":
          "11px 200px 400px -160px rgba(255,255,255,0.5) inset",

        //new box
        "inner-shadow": "0px 0px 59px 3px rgba(0,0,0,0.79) inset",
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
          "text-shadow": "4px -1px 33px rgba(255,255,255,1)",
        },
        ".hover:text-glow": {
          "@apply hover:text-glow": {},
        },
        ".clip-path-custom-polygon": {
          clipPath:
            "polygon(7% 0%, 93% 0%, 100% 7%, 100% 93%, 93% 100%, 7% 100%, 0% 93%, 0% 7%)",
        },
        ".clip-path-cut-top-corners": {
          clipPath:
            "polygon(7% 0%, 90% 0%, 100% 7%, 100% 100%, 0% 100%, 0% 7%)",
        },
      });
    },
  ],
};
