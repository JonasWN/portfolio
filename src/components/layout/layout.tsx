import React from "react"
import GlobalStyle from "../../styles/reset-css"
import { Container } from "../../styles/layout-styles"
import { Theme } from "../../styles/theme-styles"
import { ThemeProvider } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

require("typeface-oswald")
require("typeface-orbitron")

const Layout = ({ children }: any) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <GlobalStyle />
        <>{children}</>
        <footer style={{ marginBottom: "100vh" }}>
          © {new Date().getFullYear()}, Jonas Nielsen Portfolio
        </footer>
      </Container>
    </ThemeProvider>
  )
}

export { Layout }