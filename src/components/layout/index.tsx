import React from "react"
import GlobalStyle from "../../styles/reset-css"
import { Container } from "../../styles/layout-styles"
import { Theme } from "../../styles/theme-styles"
import { ThemeProvider } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { RecoilRoot, selector, useRecoilState, useRecoilValue } from "recoil"

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
    <RecoilRoot>
      <ThemeProvider theme={Theme}>
        <Container>
          <GlobalStyle />
          <>{children}</>
        </Container>
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default Layout
