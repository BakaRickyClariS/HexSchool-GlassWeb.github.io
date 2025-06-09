module.exports = {
  theme: {
    screens: {
      sm: "375px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 960px) { ... }

      lg: "1920px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('images/home-header.png')",
      },
    },
  },
};
