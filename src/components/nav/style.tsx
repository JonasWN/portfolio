import styled, { keyframes } from "styled-components"
import { device } from "../../styles/layout-styles"
import { motion } from "framer-motion"

const aHover = keyframes`
  from {
    transform: scaleX(0);
    transform-origin: 0%;
  }

  50% {
    transform-origin: 0%;
    transform: scale(1);
  }

  51% {
    transform-origin: 100%;
    transform: scaleX(1);
  }

  to {
    transform-origin: 100%;
    transform: scaleX(0);
  }
`

export const StyledNav = styled<any>(motion.nav)`
  width: 95%;
  margin: 0 auto;
  @media ${device.tablet} {
    margin: 4%;
  }

  @media ${device.mobile} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    height: 80px;
    top: 0;
    left: 0;
    transform: translateY(${props => (props.show ? 0 : "-100%")});
    transition: transform 400ms linear;
    background: ${props => props.theme.color.background.site};
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
        margin-left: 15px;
        font-weight: 300;
        text-transform: uppercase;
        position: relative;

        &:nth-child(3) {
          margin-left: 7px;
        }

        &:hover :after {
          cursor: pointer;
          animation: ${aHover} 0.8s alternate cubic-bezier(0.77, 0, 0.175, 1);
        }

        &:nth-child(2) &:hover :after {
          animation: none;
        }

        :hover {
          cursor: pointer;
        }

        &:after {
          content: "";
          position: absolute;
          top: 50%;
          left: -0.2rem;
          width: calc(100% + 0.4rem);
          transform: scale(0);
          height: 0.2px;
          background: #000;
          transition: all 2s;
          background: linear-gradient(0deg, #ee0979 0, #ff6a00);
        }

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
    width: 110px;
    transform: rotate(180deg);
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
    /* stroke: ${props => props.theme.color.font.textLight}; */
  }

  .plate2 .line1 {
    stroke-dasharray: 10 185.62753295898438;
    transition-delay: 0;
  }
  .plate2 .line2 {
    stroke-dasharray: 2 178.6514129638672;
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
  background: ${props => props.theme.color.background.site};
  z-index: 5;

  .phone-menu {
    display: block;
  }
`
