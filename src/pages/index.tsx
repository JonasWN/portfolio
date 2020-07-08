import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"
import Hero from "../components/hero"
import ScrollBar from "../components/scrollBar"
import Gallery from "../components/gallery"
import About from "../components/about"
import Footer from "../components/footer"

const IndexPage = () => (
  <Layout>
    <SEO title=" " />
    <Nav />
    <Hero />
    <Gallery />
    <About />
    <Footer />
    <ScrollBar />
  </Layout>
)

export default IndexPage
