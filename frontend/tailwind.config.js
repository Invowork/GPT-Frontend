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
    colors:{
      primary:"#191919",
      secondary:"#C80601",
      white:"#fff",
      my_border:"#EBE9E9",
      gray:"#999191",
      dark_gray:"#737272"
     

    },
    fontSize:{
      'main':'33px',
      base:'15px',
     
    },

    extend: {},
  },
  plugins: [],
}

