import React from "react"
import Head from "next/head"

import Layout from "../components/layout"
import BeautyPlp from "../components/beautyPlp"
import axios from "axios"

export default function Ecommerce() {
  const [loading, setLoading] = React.useState(true)
  const [data, setData] = React.useState({})

  React.useEffect(async () => {
    const result = await axios.get("/api/beautyData")
    setData(result.data)
    setLoading(false)
  }, [])

  React.useEffect(() => {
    uv.emit("ecView", {
      type: "category",
      subtypes: ["Home"],
      language: "en-gb",
      country: "GB",
      currency: "GBP",
    })
  }, [])

  return (
    <Layout>
      <Head>
        <title>Qubit Demo Site || Beauty</title>
        <meta name="description" content="Beauty" />
        <link rel="icon" href="/qubit-favicon.svg" />
      </Head>
      {loading ? (
        <div>loading</div>
      ) : (
        <div>
          <BeautyPlp data={data.beauty} />
        </div>
      )}
    </Layout>
  )
}
