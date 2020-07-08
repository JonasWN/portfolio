import styled from "styled-components"
import { motion } from "framer-motion"
import { FadeIn } from "../../styles/animations"
import { device } from "../../styles/layout-styles"

export const StyledProject = styled<any>(motion.section)`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${FadeIn} 1.6s;
  animation-play-state: ${props => (props.enter ? "running" : "paused")};
  animation-delay: 0.4s;
  opacity: 0;
  animation-fill-mode: forwards;
  left: 0;
  top: 0;
  z-index: 2;
  height: 85%;
  width: 40%;

  background: ${props => props.theme.color.background.containerDark};
  color: #d2def5;
  box-shadow: ${props => props.theme.shadow.card};
  font-family: Orbitron;
  padding: 5%;

  @media ${device.mobile} {
    width: 73vw;
    height: 65vh;
    padding: 10%;
  }

  .gallery-swiper {
    position: absolute;
    top: 25%;
    left: 0;
    width: 100%;
    height: 50%;
  }

  header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: fit-content;

    h2 {
      position: relative;
      letter-spacing: 0.5rem;
      font-weight: 100;
      font-size: ${props => props.theme.fontSize.sm};
      text-transform: uppercase;
    }
    section {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 3%;

      div {
        height: 0.5px;
        width: 90px;
        background: #ffb68c;
      }

      p {
        align-self: flex-end;
        margin-right: 2%;
        font-size: ${props => props.theme.fontSize.md};
        letter-spacing: 0.4rem;
        width: 5px;
      }

      span {
        align-self: flex-end;
        margin-right: 2%;
        font-size: ${props => props.theme.fontSize.md};
        letter-spacing: 0.4rem;
        width: 20px;
      }
    }
  }

  nav {
    align-self: flex-end;

    @media ${device.mobile} {
      position: absolute;
      top: 40%;
      right: -25%;
      transform: translate(-50%, -50%);
    }

    ul {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;

      li {
        position: relative;
        z-index: 50;
        height: 1px;
        width: 20px;
        background: #e0e8f7;
        opacity: 0.5;
        transition: width 0.4s ease-in-out, background 0.4s ease-in-out;

        :hover {
          cursor: pointer;
        }

        :not(:last-child) {
          margin-bottom: 0.75rem;
        }

        :nth-child(${props => props.current}) {
          background: #ffb68c;
          width: 30px;
        }

        @media ${device.mobile} {
          background: ${props => props.theme.color.background.containerDark};
        }
      }
    }
  }

  article {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    max-width: 75%;
    height: 50%;
    position: relative;

    div {
      height: 15px;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      div:first-child {
        width: 10%;
        height: 1px;
        background: #ffb68c;
        z-index: 20;
      }
      div:nth-child(2) {
        width: 30%;
        height: 1px;
        background: #ffb68c;
        z-index: 20;

        @media ${device.mobile} {
          top: -5%;
        }
      }
    }

    @media ${device.mobile} {
      max-width: 100%;
      height: 70%;

      h3 {
        color: red;
      }
    }
    h3 {
      color: ${props => props.theme.color.accent.beige};
      font-weight: 100;
      text-transform: uppercase;
      margin-bottom: 5%;
    }

    p {
      font-family: orbitron;
      font-size: 0.7rem;
      font-weight: 100;
      line-height: 2rem;
      letter-spacing: 0.2em;

      @media ${device.mobile} {
        letter-spacing: 0.1rem;
        line-height: 1.2rem;
      }
    }
  }
`
