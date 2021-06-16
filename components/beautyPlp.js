import React from "react"
import {
  Grid,
  Typography,
  CardMedia,
  Card,
  CardContent,
  CardActionArea,
  Chip,
} from "@material-ui/core"
import Link from "next/link"
import { makeStyles } from "@material-ui/core/styles"

export default function BeautyPlp(props) {
  let useStyles = makeStyles((theme) => ({
    banner: {
      backgroundImage: `url(${props.data.banner})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "40vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      paddingLeft: "5%",
      paddingTop: "5%",
    },
    divider: {
      marginTop: 20,
      borderTop: `${theme.palette.primary.main} solid 1px`,
      paddingTop: 10,
      borderBottom: `${theme.palette.primary.main} solid 1px`,
      paddingBottom: 10,
    },
    chips: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
    chip: {
      marginRight: 15,
      marginLeft: 15,
    },
    containPlp: {
      width: "100%",
    },
    card: {
      maxWidth: 345,
      marginTop: 10,
      border: "none",
      boxShadow: "none",
      backgroundColor: "transparent",
    },
    media: {
      height: 250,
      width: 300,
      backgroundSize: "contain",
    },
  }))
  let classes = useStyles()

  return (
    <Grid container direction="column" justify="flex-start">
      <Grid item>
        <div className={classes.banner}>
          <Typography style={{ color: "white" }} variant="h1">
            {props.data.section}
          </Typography>
        </div>
      </Grid>
      <Grid item className={classes.divider}>
        <div className={classes.chips}>
          <Chip className={classes.chip} label="All" color="primary" />
          {props.data.categories.map((category, index) => (
            <Chip
              color="primary"
              variant="outlined"
              className={classes.chip}
              key={index}
              label={category}
            />
          ))}
        </div>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.containPlp}
          spacing={4}
        >
          {props.data.products.map((product, index) => (
            <Grid key={index} item>
              <Link href={`beauty/${product.productId}`}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={product.images[0]}
                      title={product.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {product.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        £{product.price.value}.00
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}
