import React from "react"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Nav from "../components/nav"
import styled from "styled-components"
import Footer from "../components/footer"
import Button from "../components/button"
import Form from "../components/form"
import { device } from "../styles/layout-styles"

const ContactPage = () => {
  return (
    <>
      <SEO title="Contact |" />
      <Nav />
      <StyledContact>
        <Form></Form>
      </StyledContact>
      <Footer />
    </>
  )
}

const StyledContact = styled.main`
  display: flex;
  margin: 0 auto;
  width: 85vw;
  height: 70vh;
  max-width: 500px;
  position: relative;

  @media ${device.mobile} {
    margin-top: 90px;
  }

  article {
    width: 30%;
    h1 {
      color: #072142;
      font-weight: 600;
      font-size: 2.4rem;
      font-family: orbitron;
    }

    h2 {
      font-size: 1.6rem;
      color: #254063;
      font-family: orbitron;
      font-weight: 100;
    }
  }
`

export default ContactPage
