/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      primary: "#004d40",
      secondary: "#ff9800",
      tertiary: "#202020",
      white: "#fff",
      my_border: "#EBE9E9",
      gray: "#D3D3D3",
      dark_gray: "#737272",
      "btn-bg": "#e0f2f1",
      "blue-text": "#358DF4",
      "aqua-blue": "#09D3FF",
      "md-dark-gray": "#7A7878",
      "light-pink": "#e8f5e9",
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      main: "33px",
      base: "15px",
    },

    extend: {
      backgroundImage: {
        logo: "/icons/Inowork.png",
      },
    },
   
  },
  plugins: [],
};
