import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#7144b7",
      dark: "#3c0099",
    },
    secondary: {
      main: "#2d117a",
    },
    text: {
      main: "#2d117a",
      light: "white",
    },
    background: {
      paper: "white",
    },
  },
})

export default theme
