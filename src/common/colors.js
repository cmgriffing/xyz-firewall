const baseColors = {
  blue1: "#61B2E2",
  blue2: "#1B97E0",
  blue3: "#036EAD",
  blueLight: "#DFEFF8",
  blueOffWhite: "#FAFDFE",
  blueDark: "#023F63",
  blueOffBlack: "#02090E",

  yellow1: "#FFD664",
  yellow2: "#FFC011",
  yellow3: "#FFBB00",
  yellowLight: "#FFF8E4",
  yellowOffWhite: "#FFFEFA",
  yellowDark: "#9C7200",
  yellowOffBlack: "#0F0B00",

  red1: "#FF8964",
  red2: "#FF4B11",
  red3: "#FF3D00",
  redLight: "#FFEBE4",
  redOffWhite: "#FFFBFA",
  redDark: "#9C2600",
  redOffBlack: "#0F0400",

  grayLight: "#EFEFEF",
  grayMedium: "#DDDDDD",
  grayDark: "#BBBBBB",
}

const publicColors = {
  lightText: baseColors.blueOffWhite,
  darkText: baseColors.blueOffBlack,
}

export const colors = {
  baseColors,
  ...publicColors,
}
