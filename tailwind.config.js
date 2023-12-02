/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "tt-main-text": "rgba(34, 34, 34, 1)",
        "tt-secondary-text": "rgba(155, 155, 155, 1)",
        "tt-background-icon": "rgba(226, 227, 228, 1)",
        "tt-field-icon": "rgba(150, 159, 168, 1)",
        "tt-icon": "rgba(104, 105, 105, 1)",
        "tt-primary": "rgba(227, 6, 17, 1)",
        "tt-secondary": "rgba(0, 123, 255, 1)",
        "tt-main-background": "rgba(255, 255, 255, 1)",
        "tt-unaccented-background": "rgba(246, 247, 248, 1)",
        "tt-contrast-text": "rgba(255, 255, 255, 1)",
        "tt-field-background": "rgba(236, 241, 247, 1)",
        "tt-field-border": "rgba(220, 225, 230, 1)",

        "tt-black": "#000",
        "tt-white": "#FFF",
        "tt-light-light-gray": "#F2F3F7",
        "tt-stroke": "#DCE1E6",
        "tt-red": "#E30611",
        "tt-gray": "#88888D",
        "tt-dark-gray": "#5F6367",
        "tt-light-gray": "#9B9EA1",
        "tt-bg-error": "#FFF5F5",
        "tt-stroke-error": "#FFD8D8",
        "tt-blue": "#007BFF",
        "tt-light-blue": "#C2E7FE",
        "tt-lighter-gray": "#BCC1C6",
      },
      maxWidth: {
        "tt-field": "334px",
      },
      height: {
        "tt-field": "56px",
      },
      borderRadius: {
        "tt-input": "0.25rem",
        "tt-card": "1rem",
        "tt-card-large": "4rem",
        "tt-bth": "0.5rem",
      },
      textColor: {
        DEFAULT: "rgba(34, 34, 34, 1)",
        "tt-field": "#212121",
      },
      backgroundColor: {
        DEFAULT: "#FFF",
        "tt-bg": "#FFF",
      },
      boxShadow: {
        "tt-popup-menu": "0px 0px 30px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
