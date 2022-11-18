module.exports = {
  content: ["./*.html", "./assets/**/*.js"],

  theme: {
    screens: {
      xs: "475px",

      sm: "540px",
      // => @media (min-width: 576px) { ... }

      md: "720px",
      // => @media (min-width: 768px) { ... }

      lg: "960px",
      // => @media (min-width: 992px) { ... }

      xl: "1140px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1320px",
      // => @media (min-width: 1400px) { ... }
    },
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        black: "#212b36",
        dark: "#090E34",
        "dark-700": "#090e34b3",
        primary: "#f55a38",
        secondary: "#13C296",
        "body-color": "#637381",
        warning: "#FBBF24",
      },
      boxShadow: {
        input: "0px 7px 20px rgba(0, 0, 0, 0.03)",
        pricing: "0px 39px 23px -27px rgba(0, 0, 0, 0.04)",
        "switch-1": "0px 0px 5px rgba(0, 0, 0, 0.15)",
        testimonial: "0px 60px 120px -20px #EBEFFD",
      },
      animation: {
        'linethrough': 'linethrough 4s linear forwards',
      },
      keyframes: {
        linethrough: {
          '100%': {
            'transform': 'translateX(0)'
          },
        },
      },
      transitionTimingFunction: {
        bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
