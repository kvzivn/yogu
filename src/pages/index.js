import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{
        position: `absolute`,
        top: `45%`,
        left: `50%`,
        width: `100%`,
        transform: `translate(-50%, -50%)`,
        maxWidth: `400px`,
        margin: `0 auto`,
        padding: `0 1rem`
    }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
