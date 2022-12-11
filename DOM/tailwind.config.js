/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./login.html",
    "./signup.html",
    "./create-post.html",
    "./Recipes.html",
    "./About.html",
    "./Tags.html",
    "./beef-page.html",
    "./Breakfast-page.html",
    "./Carrots.html",
    "./Food.html",
    "./recipes/beef-steak.html",
    "./recipes/recipe-script.js",
    "./recipes/chawmin.html",
    "./recipes/fried-chicken.html",
    "./recipes/noodles.html",
    "./recipes/shawarma.html",
    "./recipes/soup.html",
    "./recipes/stew.html",
    "./recipes/tikka.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6363",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
      backgroundImage: {
        main: "url('./img/main.jpg')",
      },
    },
  },
  plugins: [],
};
