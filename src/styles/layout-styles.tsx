import styled from "styled-components"
import { motion } from "framer-motion"

const sizes = {
  sm: "420px",
  md: "768px",
  lg: "1280px",
  xl: "1920px",
}

export const device = {
  mobile: `(max-width: ${sizes.sm})`,
  tablet: `(max-width: ${sizes.md})`,
  desktop: `(max-width: ${sizes.lg})`,
  desktopL: `(max-width: ${sizes.xl})`,
}

export const Container = styled<any>(motion.div)`
  display: flex;
  min-height: 100vh;
  justify-content: space-between;
  flex-direction: column;
  padding: 2%;
`
