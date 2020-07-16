import React from "react"
import SEO from "../components/seo"
import Nav from "../components/nav"
import styled from "styled-components"
import Footer from "../components/footer"
import Form from "../components/form"
import { device } from "../styles/layout-styles"

const ContactPage = () => {
  return (
    <>
      <SEO title="Contact |" />
      <Nav />
      <StyledContact>
        <div>
          <h1>Glæder mig til at hore fra dig!</h1>
          <h3>E-Mail - jonn0512@gmail.com</h3>
          <h3>Telefon - 21 22 14 21</h3>
        </div>
        <Form />
      </StyledContact>
      <Footer />
    </>
  )
}

const StyledContact = styled.header`
  display: flex;
  margin: 0 auto;
  width: 85vw;
  height: 70vh;
  max-width: 980px;
  position: relative;

  @media ${device.tablet} {
    height: initial;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  @media ${device.mobile} {
    margin-top: 90px;
    justify-content: space-between;
  }

  div {
    display: flex;
    flex-direction: column;
    width: 40%;

    @media ${device.tablet} {
      width: 100%;
    }

    h1 {
      color: #072142;
      font-weight: 600;
      font-size: 1.6rem;
      font-family: orbitron;
    }

    h3 {
      font-size: 1.2rem;
      color: #254063;
      font-family: orbitron;
      font-weight: 100;
      margin: 20px 0;
    }
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
