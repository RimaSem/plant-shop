import { ThemeProps } from "./themeInterface";

export const theme: ThemeProps = {
  colors: {
    white: "#ffffff",
    black: "#000000",
    transparentBlack: "rgba(0, 0, 0, 0.5)",
    grey: "#808080",
    accentGrey: "#7c7c7c",
    accentDark: "#313232",
    primaryGreen: "#5da271",
    secondaryGreen: "#437d53",
    accentGreen: "#437652",
    lightGreen: "#a1f0b7",
    lightOrange: "#f8e1a0",
    textLight: "#e3e3e3",
    textGrey: "#898989",
  },

  sizes: {
    containerL: "1200px",
    containerXL: "1400px",
  },
};

export const devices = {
  mobileXS: "(max-width: 300px)",
  mobileS: "(max-width: 350px)",
  mobileM: "(max-width: 400px)",
  // mobileXL: "(max-width: 500px)",
  // mobileXXL: "(max-width: 520px)",
  // tabletXXS: "(max-width: 580px)",
  tabletXS: "(min-width: 700px)",
  tabletS: "(min-width: 780px)",
  tabletM: "(min-width: 800px)",
};
