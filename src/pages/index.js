import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import ArtNightShibuya from "../components/image"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>やまもです</h1>
      {/* <ArtNightShibuya /> */}
      <img src="https://66.media.tumblr.com/62a12ca5ab58992e9f61a398f4f3f4ed/6ad0c238a07d57bb-03/s500x750/baf3b6b19a79605bf44413fdc6ef85caa8adcb6f.jpg" />
    </Layout>
  )
}

export default IndexPage
