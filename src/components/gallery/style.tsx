import styled from "styled-components"
import { device } from "../../styles/layout-styles"
import { motion } from "framer-motion"
import {
  ScaleRight,
  FadeIn,
  TextAppearY,
  easing,
} from "../../styles/animations"

export const StyledGallery = styled<any>(motion.main)`
  position: relative;
  width: 70vw;
  height: 80vh;
  background: rgba(0, 0, 0, 0);
  margin: 15vh auto;

  @media ${device.desktop} {
    width: 90vw;
    margin: 50vh 0vw;
  }

  @media ${device.mobile} {
    width: 90vw;
    height: 85vh;
    margin: 10vh 2%;
  }

  &:before {
    content: "";
    opacity: 1 !important;
    background: #b68c70;
    transform: scaleX(0);
    z-index: 2;
    height: 85%;
    width: 40%;
    animation: ${ScaleRight} 1.6s cubic-bezier(0.77, 0, 0.175, 1);
    animation-play-state: ${props => (props.enter ? "running" : "paused")};
    animation-delay: 0.4s;
    position: absolute;
    z-index: 100;
    left: 0;
    top: 0;

    @media ${device.mobile} {
      width: 73vw;
      height: 65vh;
    }
  }

  &:after {
    content: "";
    opacity: 1 !important;
    background: ${props => props.theme.color.background.containerDark};
    height: 65%;
    width: 70%;
    transform: scaleX(0);
    z-index: 100;
    animation: ${ScaleRight} 1.6s cubic-bezier(0.77, 0, 0.175, 1);
    animation-play-state: ${props => (props.enter ? "running" : "paused")};
    position: absolute;
    z-index: 5;
    right: 0;
    bottom: 0;

    @media ${device.mobile} {
      width: 90%;
      height: 40vh;
      left: 7%;
      bottom: 5%;
    }
  }
`

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
  color: ${props => props.theme.color.font.textLight};
  box-shadow: ${props => props.theme.shadow.card};
  font-family: Orbitron;
  padding: 5%;

  @media ${device.mobile} {
    width: 73vw;
    height: 65vh;
    padding: 10%;
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
        height: 1px;
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

      li {
        height: 1px;
        width: 20px;
        background: ${props => props.theme.color.background.containerLight};
        opacity: 0.5;

        :hover {
          cursor: pointer;
        }

        :not(:last-child) {
          margin-bottom: 0.75rem;
        }

        :nth-child(${props => props.current}) {
          background: #ffb68c;
        }

        @media ${device.mobile} {
          background: ${props => props.theme.color.background.containerDark};
        }
      }
    }
  }

  article {
    max-width: 75%;
    height: 40%;
    position: relative;

    :before {
      content: "";
      position: absolute;
      top: -15%;
      left: 0;
      width: 30%;
      height: 1px;
      background: #ffb68c;
      z-index: 20;
    }

    :after {
      content: "";
      position: absolute;
      top: -20%;
      left: 0;
      width: 15%;
      height: 1px;
      background: #ffb68c;
      z-index: 20;

      @media ${device.mobile} {
        top: -25%;
      }
    }

    @media ${device.mobile} {
      max-width: 100%;
      height: 55%;

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
      font-family: oswald;
      font-size: 1.1rem;
      font-weight: 100;
      line-height: 1.5rem;
      letter-spacing: 0.1em;

      @media ${device.mobile} {
        letter-spacing: 0.1rem;
        line-height: 1.2rem;
        font-size: 1rem;
      }
    }
  }
`

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

  @media ${device.mobile} {
    width: 100%;
    height: 100%;
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

export const StyledContainer = styled<any>(motion.div)`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 65%;
  width: 70%;
  background: ${props => props.theme.color.background.containerLight};
  box-shadow: ${props => props.theme.shadow.card};
  animation: ${FadeIn} 1.6s;
  animation-play-state: ${props => (props.enter ? "running" : "paused")};

  @media ${device.mobile} {
    width: 90%;
    bottom: 5%;
    height: 40vh;
    left: 7%;
  }
`
