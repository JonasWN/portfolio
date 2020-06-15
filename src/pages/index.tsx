import React from "react"
//@ts-ignore
import Face from "../static/images/Face.svg"
import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { Nav } from "../components/nav"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <h1>Jonas Nielsen</h1>
    <img src={Face} alt="" />
  </Layout>
)

export default IndexPage
