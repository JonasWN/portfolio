import React from "react"
import { RecoilRoot } from "recoil"
import GlobalStyle from "../../styles/reset-css"
import { Theme } from "../../styles/theme-styles"
import { ThemeProvider } from "styled-components"
import { Container } from "../../styles/layout-styles"

const Layout = ({ children }: any) => {
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
