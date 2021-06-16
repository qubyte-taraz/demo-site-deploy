import React from "react"
import Head from "next/head"

import Layout from "../components/layout"
import FashionPlp from "../components/fashionPlp"
import axios from "axios"

export default function Ecommerce() {
  const [loading, setLoading] = React.useState(true)
  const [data, setData] = React.useState({})

  React.useEffect(async () => {
    const result = await axios.get("/api/fashionData")
    setData(result.data)
    setLoading(false)
  }, [])

  React.useEffect(() => {
    // window.uv.emit("ecView", {
    //   type: "category",
    //   subtypes: ["Home"],
    //   language: "en-gb",
    //   country: "GB",
    //   currency: "GBP",
    // })
  }, [])

  return (
    <Layout>
      <Head>
        <title>Qubit Demo Site || Fashion</title>
        <meta name="description" content="Fashion" />
        <link rel="icon" href="/qubit-favicon.svg" />
      </Head>
      {loading ? (
        <div>loading</div>
      ) : (
        <div>
          <FashionPlp data={data.fashion} />
        </div>
      )}
    </Layout>
  )
}
