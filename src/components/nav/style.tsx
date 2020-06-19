import styled from "styled-components"
import { device } from "../../styles/layout-styles"
import { motion } from "framer-motion"

export const StyledNav = styled<any>(motion.nav)`
  @media ${device.tablet} {
    margin: 4%;
  }

  @media ${device.mobile} {
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    left: 0;
    transform: translateY(${props => (props.show ? 0 : "-100%")});
    transition: transform 400ms linear;
    width: 100%;
    justify-content: space-between;
    padding: 2% 5%;
    z-index: 200;
    margin: 0;
  }

  ul {
    color: ${props => props.theme.color.font.textDark};
    display: flex;
    align-items: center;
    li,
    a {
      &:first-child {
        font-size: ${props => props.theme.fontSize.md};
        font-family: Orbitron;
        text-shadow: ${props => props.theme.shadow.text};
        margin-right: auto;
      }
      :not(:first-child) {
        font-size: ${props => props.theme.fontSize.sm};
        text-shadow: ${props => props.theme.shadow.text};
        margin-left: 10px;
        font-weight: 300;
        text-transform: uppercase;

        @media ${device.mobile} {
          display: none;
        }
      }
    }
  }
`

export const StyledPhone = styled.div`
  display: none;

  @media ${device.mobile} {
    display: block;
  }

  .active .x {
    transform: scale(1);
    transition: transform 400ms 350ms;
  }

  .plate {
    height: 80px;
    width: 80px;
  }
  svg {
    height: 80px;
    position: absolute;
    width: 80px;
  }
  .burger {
    filter: url(#gooeyness);
  }
  .x {
    transform: scale(0);
    transition: transform 400ms;
  }
  .line {
    fill: none;
    stroke: #494970;
    stroke-width: 4.5px;
    stroke-linecap: round;
    stroke-linejoin: round;
    transform-origin: 50%;
    transition: stroke-dasharray 500ms 200ms, stroke-dashoffset 500ms 200ms,
      transform 500ms 200ms, stroke 400ms;
  }
  .x .line {
    stroke-width: 3px;
  }
  .active .line {
    stroke: ${props => props.theme.color.font.textLight};
  }

  .plate2 .line1 {
    stroke-dasharray: 21 185.62753295898438;
    transition-delay: 0;
  }
  .plate2 .line2 {
    stroke-dasharray: 21 178.6514129638672;
    transition-delay: 30ms;
  }
  .plate2 .line3 {
    stroke-dasharray: 21 197.92425537109375;
    transition-delay: 60ms;
  }
  .plate2 .line4 {
    stroke-dasharray: 21 190.6597137451172;
    transition-delay: 90ms;
  }
  .plate2 .line5 {
    stroke-dasharray: 21 208.52874755859375;
    transition-delay: 120ms;
  }
  .plate2 .line6 {
    stroke-dasharray: 21 186.59703063964844;
    transition-delay: 150ms;
  }
  .active.plate2 .line1 {
    stroke-dasharray: 5 185.62753295898438;
    stroke-dashoffset: -141px;
  }
  .active.plate2 .line2 {
    stroke-dasharray: 5 178.6514129638672;
    stroke-dashoffset: -137px;
  }
  .active.plate2 .line3 {
    stroke-dasharray: 5 197.92425537109375;
    stroke-dashoffset: -176px;
  }
  .active.plate2 .line4 {
    stroke-dasharray: 5 190.6597137451172;
    stroke-dashoffset: -159px;
  }
  .active.plate2 .line5 {
    stroke-dasharray: 5 208.52874755859375;
    stroke-dashoffset: -139px;
  }
  .active.plate2 .line6 {
    stroke-dasharray: 5 186.59703063964844;
    stroke-dashoffset: -176px;
  }
  .active.plate2 .x {
    transition: transform 400ms 250ms;
  }
`
let easing = [0.77, 0, 0.175, 1]
const variants = {
  enter: {
    translateX: 0,
    transition: { ease: easing, duration: 0.6 },
  },
  initial: {
    translateX: "100%",
  },
  exit: {
    translateX: "-100%",
    transition: { ease: easing, duration: 0.6 },
  },
}
export const StyledPhoneNav = styled(motion.div).attrs(() => ({
  variants,
  initial: "initial",
  animate: "enter",
  exit: "exit",
}))`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #070710;
  z-index: 5;

  .phone-menu {
    display: block;
  }
`
