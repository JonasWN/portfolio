import React from "react"
import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { Nav } from "../components/nav"
import { Hero } from "../components/hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <Hero />
    <h1>Jonas Nielsen</h1>
  </Layout>
)

export default IndexPage
