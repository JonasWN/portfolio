import styled from "styled-components"
import { motion } from "framer-motion"
import { device } from "../../styles/layout-styles"

export const StyledScrollBar = styled<any>(motion.div)`
  height: ${(props: any) => props.height};
  width: 1px;
  background: #ccc;
  position: fixed;
  right: 5%;
  top: 50%;
  transform: translate(-0, -50%);

  @media ${device.mobile} {
    display: none !important;
  }

  div {
    background: ${props => props.theme.color.background.containerDark};
    width: 1px;
    opacity: 0.5;
  }
`
