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

  div {
    background: #072142c7;
    width: 1px;
    opacity: 0.5;
    transition: height 0.6s ease-out;
  }
`
