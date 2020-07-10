import React from "react"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Nav from "../components/nav"
import styled from "styled-components"
import Footer from "../components/footer"
import Layout from "../components/layout"
import Button from "../components/button"
import { device } from "../styles/layout-styles"
import { useStaticQuery, graphql } from "gatsby"

const CvPage = () => {
  const { image, pdf } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "CV.png" }) {
        name
        sharp: childImageSharp {
          fluid(maxWidth: 595, maxHeight: 842, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      pdf: file(relativePath: { eq: "CV.pdf" }) {
        publicURL
      }
    }
  `)

  return (
    <Layout>
      <SEO title="CV |" />
      <Nav />
      <StyledCv>
        <h1>{image.name}</h1>
        <section>
          <figure>
            <Img fluid={image.sharp.fluid}></Img>
          </figure>
          <div className="container-download">
            <h2>Download CV</h2>
            <Button title="download" download={true} link={pdf.publicURL} />
          </div>
        </section>
      </StyledCv>
      <Footer />
    </Layout>
  )
}

const StyledCv = styled.main`
  margin: 0 auto;

  @media ${device.mobile} {
    margin-top: 80px;
  }

  h1 {
    color: #072142;
    font-weight: 600;
    font-size: 2rem;
    font-family: orbitron;
    text-align: center;
    margin-bottom: 10px;
    width: 50%;

    @media ${device.tablet} {
      width: inherit;
    }
  }

  section {
    display: flex;
    max-width: 900px;
    width: 80vw;

    @media ${device.tablet} {
      width: 90vw;
      flex-direction: column;
      align-items: center;
    }

    figure {
      width: 60%;
      border: 1px solid #ccc;

      @media ${device.mobile} {
        width: 80%;
      }
    }

    .container-download {
      width: 50%;
      display: grid;
      grid-template-rows: 10%;
      place-content: center;

      h2 {
        text-align: center;
        font-size: 1.2rem;
        color: #254063;
        font-family: orbitron;
        font-weight: 100;

        @media ${device.tablet} {
          display: none;
        }
      }
    }
  }
`

export default CvPage
