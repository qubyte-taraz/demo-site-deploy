import React from "react"
import Head from "next/head"

import Layout from "../components/layout"
import HgPlp from "../components/hgPlp"
import axios from "axios"

export default function Ecommerce() {
  const [loading, setLoading] = React.useState(true)
  const [data, setData] = React.useState({})

  React.useEffect(async () => {
    const result = await axios.get("/api/hgData")
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
        <title>Qubit Demo Site || Home and Garden</title>
        <meta name="description" content="Home and Garden" />
        <link rel="icon" href="/qubit-favicon.svg" />
      </Head>
      {loading ? (
        <div>loading</div>
      ) : (
        <div>
          <HgPlp data={data.homeGarden} />
        </div>
      )}
    </Layout>
  )
}
