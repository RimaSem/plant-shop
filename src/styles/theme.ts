import { ThemeProps } from "./themeInterface";

export const theme: ThemeProps = {
  colors: {
    white: "#FFFFFF",
    accentDark: "#313232",
    primaryGreen: "#5da271",
    secondaryGreen: "#437d53",
    textLight: "#e3e3e3",
  },

  sizes: {
    containerL: "1200px",
  },
};

export const devices = {
  // mobileL: "(max-width: 425px)",
  // mobileXL: "(max-width: 500px)",
  // mobileXXL: "(max-width: 520px)",
  // tabletXXS: "(max-width: 580px)",
  tabletXS: "(min-width: 700px)",
  tabletS: "(min-width: 780px)",
  // tabletM: "(max-width: 865px)",
};
