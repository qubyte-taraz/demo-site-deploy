import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Link from "next/link"
import { Grid, AppBar, Toolbar, Button } from "@material-ui/core"
import { AccountBox, ShoppingBasket } from "@material-ui/icons"
import Image from "next/image"

const useStyles = makeStyles((theme) => ({
  bar: {
    backgroundColor: `${theme.palette.primary.dark}`,
  },
  links: {
    color: `${theme.palette.text.light}`,
    textDecoration: "none",
  },
  left: {
    width: "20%",
  },
  mid: {
    width: "60%",
  },
  midLinks: {
    marginRight: "10%",
  },
  right: {
    width: "20%",
  },
}))

export default function Header() {
  const classes = useStyles()

  return (
    <AppBar className={classes.bar}>
      <Toolbar>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          className={classes.contain}
        >
          <Grid item className={classes.left}>
            <Link href="/" className={classes.links}>
              <Image
                src="https://i.ibb.co/0rn5Q7J/qubit-logo-white.png"
                alt="Qubit Demo Site"
                width={250}
                height={74}
              />
            </Link>
          </Grid>
          <Grid item className={classes.mid}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item className={classes.midLinks}>
                <Button color="inherit">
                  <Link href="/fashion">
                    <a className={classes.links}>Fashion</a>
                  </Link>
                </Button>
              </Grid>
              <Grid item className={classes.midLinks}>
                <Button color="inherit">
                  <Link className={classes.links} href="/beauty">
                    <a className={classes.links}>Beauty</a>
                  </Link>
                </Button>
              </Grid>
              <Grid item className={classes.midLinks}>
                <Button color="inherit">
                  <Link href="/home-and-garden">
                    <a className={classes.links}>Home and Garden</a>
                  </Link>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.right}>
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="center"
            >
              <Grid item>
                <AccountBox />
              </Grid>
              <Grid item>
                <ShoppingBasket />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
