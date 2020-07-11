import React from "react"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Nav from "../components/nav"
import styled from "styled-components"
import Footer from "../components/footer"
import Button from "../components/button"
import { device } from "../styles/layout-styles"

const ContactPage = () => {
  return (
    <>
      <SEO title="Contact |" />
      <Nav />
      <StyledContact>
        <h1>Kontakt</h1>
        <form action="">
          <input type="name" />
          <input type="email" />
          <textarea name="message" id="" cols={30} rows={30}></textarea>
        </form>
      </StyledContact>
      <Footer />
    </>
  )
}

const StyledContact = styled.main``

export default ContactPage
