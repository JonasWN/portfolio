import React, { useEffect } from "react"
import { RecoilRoot } from "recoil"
import GlobalStyle from "../../styles/reset-css"
import { Theme } from "../../styles/theme-styles"
import { ThemeProvider } from "styled-components"
import { Container } from "../../styles/layout-styles"
import { AnimatePresence } from "framer-motion"

const Layout = ({ children, path }: any) => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={Theme}>
        <AnimatePresence exitBeforeEnter>
          <Container
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={path}
          >
            <GlobalStyle />
            <>{children}</>
          </Container>
        </AnimatePresence>
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default Layout
