import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <p>Welcome to XYZ Firewall!!</p>
    </Container>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
