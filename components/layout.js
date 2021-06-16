import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/core/styles"
import { CssBaseline } from "@material-ui/core"

import theme from "../theme"
import Header from "./header"

const useStyles = makeStyles({
  contain: {
    margin: `5% auto`,
  },
  footer: {
    width: "auto",
    marginBottom: 0,
    position: "relative",
    height: 100,
    backgroundColor: `${theme.palette.primary.dark}`,
    color: `${theme.palette.text.light}`,
    textAlign: "center",
  },
})
export default function Layout({ children }) {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <div className={classes.contain}>
        <main>{children}</main>
        {/* <footer className={classes.footer}>footer</footer> */}
      </div>
    </ThemeProvider>
  )
}
