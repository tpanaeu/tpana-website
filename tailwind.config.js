module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "Success": {
          "300": "#199033",
          "500": "#32A94C",
          "700": "#4CC366"
        },
        "Gray": {
          "500": "#595959",
          "700": "#999999",
          "800": "#cbcbcbff",
          "900": "#D9D9D9",
          "Black": "#000000",
          "White": "#FFFFFF"
        },
        "Danger": {
          "300": "#A22020",
          "500": "#BF2626",
          "700": "#E14747"
        },
        "Primary": {
          "100": "#003EB3",
          "300": "#0074F0",
          "500": "#14A9FF",
          "700": "#85DCFF"
        },
        "foreground": "#000000",
        "background": "#FFFFFF"
      },
      "spacing": {
        "Unit": "8px",
        "TripleUnit": "24px",
        "FiveUnits": "40px",
        "HalfUnit": "4px",
        "TenUnits": "80px",
        "FourUnits": "32px",
        "DoubleUnit": "16px"
      },
      "borderRadius": {
        "Radius 4": "4px",
        "Round": "50%",
        "Radius 8": "8px",
        "Radius 2": "2px"
      },
      "scale": {
        "MaxContent": "1414px"
      }
    }
  },
  "plugins": [],
  "content": [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ]
}