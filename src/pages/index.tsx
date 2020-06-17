import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"
import Hero from "../components/hero"
import ScrollBar from "../components/scrollBar"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <Hero />
  </Layout>
)

export default IndexPage
