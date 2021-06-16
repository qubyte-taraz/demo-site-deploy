import React from "react"
import { Typography, Grid, Drawer, Avatar } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  basket: {
    width: 400,
  },
  image: {
    width: 100,
    height: 130,
  },
  square: {
    width: 100,
    height: 120,
  },
})

export default function Basket(props) {
  const classes = useStyles()
  return (
    <Drawer
      ModalProps={{ onBackdropClick: props.closeBasket }}
      anchor="right"
      open={props.open}
    >
      <Grid container direction="row" className={classes.basket} spacing={5}>
        <Grid item>
          <Avatar variant="square" className={classes.square}>
            <img className={classes.image} src={props.data.images[0]} />
          </Avatar>
        </Grid>
        <Grid item>
          <Typography variant="h6">{props.data.name}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">£{props.data.price.value}</Typography>
        </Grid>
      </Grid>
    </Drawer>
  )
}
