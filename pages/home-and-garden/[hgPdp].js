import React from "react"
import { Button, Grid, Typography } from "@material-ui/core"
import Head from "next/head"
import axios from "axios"
import { useRouter } from "next/router"
import { makeStyles } from "@material-ui/core/styles"
import Image from "next/image"

import Layout from "../../components/layout"
import Basket from "../../components/basket"

const useStyles = makeStyles({
  containLR: {
    marginTop: 200,
  },
  right: {
    marginLeft: 250,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
})

export default function hgPdp() {
  const router = useRouter()
  const classes = useStyles()
  const [loading, setLoading] = React.useState(true)
  const [productData, setProductData] = React.useState({})
  const [open, setOpen] = React.useState(false)

  React.useEffect(async () => {
    let id = await router.query.hgPdp
    const result = await axios.get("/api/hgData")
    const products = result.data.homeGarden.products
    let findProduct = (element) => element.productId == id
    const productIndex = products.findIndex(findProduct)
    setProductData(products[productIndex])
    setLoading(false)
  }, [])

  const addToBasket = () => {
    setOpen(true)
  }

  const closeBasket = () => {
    setOpen(false)
  }

  return (
    <Layout>
      <Head>
        <title>Qubit Demo Site || Product</title>
        <meta name="description" content="Home and Garden" />
        <link rel="icon" href="/qubit-favicon.svg" />
      </Head>
      {loading ? (
        <div>loading</div>
      ) : (
        <>
          <Grid
            className={classes.containLR}
            container
            direction="row"
            justify="center"
          >
            <Grid item>
              <Image src={productData.images[0]} width={400} height={350} />
            </Grid>
            <Grid item className={classes.right}>
              <Grid container direction="column">
                <Grid item>
                  <Typography variant="h2" color="secondary">
                    {productData.name}
                  </Typography>
                </Grid>
                <Grid item>{productData.description}</Grid>
                <Grid item style={{ marginBottom: 50 }}>
                  <Typography variant="body1" color="primary">
                    £{productData.price.value}
                  </Typography>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={addToBasket}
                  >
                    Add To Basket
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Basket open={open} closeBasket={closeBasket} data={productData} />
        </>
      )}
    </Layout>
  )
}

hgPdp.getInitialProps = async (ctx) => {
  return { url: ctx.query }
}
