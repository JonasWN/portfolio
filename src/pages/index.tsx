import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"
import Hero from "../components/hero"
import ScrollBar from "../components/scrollBar"
import Gallery from "../components/gallery"

const IndexPage = () => (
  <Layout>
    <SEO title=" " />
    <Nav />
    <Hero />
    <Gallery />
    <ScrollBar />
  </Layout>
)

export default IndexPage
