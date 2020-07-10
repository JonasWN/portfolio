import React from "react"
import SEO from "../components/seo"
import Nav from "../components/nav"
import Footer from "../components/footer"
import Layout from "../components/layout"

const CvPage = () => {
  return (
    <Layout>
      <SEO title="CV |" />
      <Nav />
      <div>Cv page</div>
      <Footer />
    </Layout>
  )
}

export default CvPage
