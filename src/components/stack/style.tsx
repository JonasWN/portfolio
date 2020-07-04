import styled from "styled-components"
import { motion } from "framer-motion"
import { device } from "../../styles/layout-styles"
import { FadeIn, TextAppearY } from "../../styles/animations"

export const StyledStack = styled<any>(motion.section).attrs({
  initial: "initial",
})`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  right: 0;
  top: 0;
  height: 85%;
  width: 60%;
  padding: 4% 4%;
  z-index: 2;
  color: ${props => props.theme.color.font.textDark};
  animation: ${FadeIn} 1.4s;
  animation-play-state: ${props => (props.enter ? "running" : "paused")};

  .test {
    content: "";
    opacity: 1 !important;
    background: #336;
    transform: scaleX(0);
    z-index: 2;
    height: 102%;
    width: 100%;
    position: absolute;
    z-index: 100;
    left: 0;
    top: 0;
  }

  @media ${device.mobile} {
    width: 100%;
    height: 100%;
    z-index: inherit;
  }

  header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 25%;

    @media ${device.mobile} {
      position: absolute;
      bottom: -7.5%;
      left: 0;
      flex-direction: row;
      height: auto;
    }

    h2,
    h3 {
      font-size: ${props => props.theme.fontSize.md};
      font-family: orbitron;
      font-weight: 100;
      letter-spacing: 0.2rem;
      text-shadow: ${props => props.theme.shadow.text};
      opacity: 0;
      animation: ${TextAppearY} 0.4s easing;
      animation-play-state: ${props => (props.enter ? "running" : "paused")};
      animation-delay: 1.4s;
      animation-fill-mode: forwards;
    }

    h3 {
      @media ${device.mobile} {
        display: none;
      }
    }
  }

  article {
    display: flex;
    justify-content: space-space-between;

    @media ${device.mobile} {
      display: none;
    }

    figure {
      width: 90%;
      max-width: 400px;
      box-shadow: ${props => props.theme.shadow.card};
      border: 1px solid #d0d0d0;
      position: relative;
      -webkit-filter: contrast(120%) saturate(125%);
      filter: contrast(120%) saturate(125%);
    }

    section {
      display: flex;
      position: relative;
      flex-direction: column;
      justify-content: center;
      width: 50%;

      h4 {
        position: absolute;
        top: -25%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-weight: 100;
        font-size: 1.5rem;
        color: ${props => props.theme.color.accent.bodo};
        letter-spacing: 0.2rem;
        text-shadow: ${props => props.theme.shadow.text};
      }
      ul {
        align-self: flex-end;

        li {
          position: relative;
          text-transform: uppercase;
          text-align: right;
          font-size: min(max(0.6rem, 1vw), 0.8rem);
          letter-spacing: 0.2rem;
          width: fit-content;
          margin-left: auto;

          :not(:last-child) {
            margin-bottom: 0.95rem;
          }

          &:before {
            content: "";
            position: absolute;
            left: -1.75rem;
            top: 50%;
            transform: translate(-50%, 0);
            width: 15px;
            height: 1px;
            z-index: 2;
            background: ${props => props.theme.color.font.textDark};
            opacity: 0.3;
          }
        }
      }
    }
  }
`
