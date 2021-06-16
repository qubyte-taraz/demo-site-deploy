import React from "react"
import Head from "next/head"

import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Qubit Demo Site</title>
        <meta name="description" content="Qubit Demo Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>hello world</h1>
    </Layout>
  )
}
