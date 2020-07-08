import styled from "styled-components"
import { motion } from "framer-motion"
import { device } from "../../styles/layout-styles"
import {
  ScaleRight,
  FadeIn,
  FadeInSlow,
  wheel,
  FillRight,
  FillDown,
  FillUp,
  FillLeft,
} from "../../styles/animations"

export const StyledHero = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 90vh;

  .particle {
    opacity: 0;
    animation: ${FadeInSlow} 1s ease-in-out;
    animation-delay: 1.7s;
    animation-fill-mode: forwards;
  }

  @media ${device.mobile} {
    align-items: inherit;
    margin-top: 10%;
    margin-top: 90px;
  }

  .face {
    min-height: 80vh;
    width: 35vw;
    opacity: 0;
    animation: ${FadeInSlow} 1s ease-in-out;
    animation-fill-mode: forwards;
    animation-delay: 1.2s;

    @media ${device.tablet} {
      position: absolute;
      top: 15%;
      left: 53%;
      transform: translate(-50%, -0%);
      width: 80vw;
      min-height: 55vw;
      max-height: 55vh;
    }
    @media ${device.mobile} {
      max-height: 50vh;
      top: 15%;
    }
  }
`

export const StyledCard = styled.article`
  position: relative;
  width: 35vw;
  height: 70vh;

  > span:nth-child(1) {
    position: absolute;
    top: 0;
    right: 0;
    width: 15%;
    border-top: 1px solid #254063;
    transform: scaleX(0);
    animation: ${FillLeft} 0.3s ease-in-out forwards;
    animation-delay: 2.2s;
  }
  > span:nth-child(2) {
    position: absolute;
    top: 0;
    right: 0;
    height: 15%;
    border-right: 1px solid #254063;
    transform: scale(0);
    animation: ${FillUp} 0.3s ease-in-out forwards;
    animation-delay: 2s;
  }
  > span:nth-child(4) {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 15%;
    border-left: 1px solid #254063;
    transform: scale(0);
    animation: ${FillDown} 0.3s ease-in-out forwards;
    animation-delay: 1.6s;
  }
  > span:nth-child(5) {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 15%;
    border-bottom: 1px solid #254063;
    transform: scale(0);
    animation: ${FillRight} 0.3s ease-in-out forwards;
    animation-delay: 1.8s;
  }

  &:after {
    content: "";
    opacity: 1 !important;
    background: #111833;
    transform: scale(0);
    width: 100%;
    height: 100%;
    animation: ${ScaleRight} 1.6s cubic-bezier(0.77, 0, 0.175, 1);
    animation-delay: 0.2s;
    position: absolute;
    z-index: 5;
    right: 0;
    bottom: 0;
  }

  @media ${device.tablet} {
    width: 60vw;
  }

  @media ${device.mobile} {
    width: 85vw;
    height: 75vh;
  }

  section {
    padding: 8%;
    display: flex;
    align-items: flex-end;
    border-radius: 4px;
    opacity: 0;
    animation: ${FadeIn} 1.4s;
    animation-fill-mode: forwards;
    width: 100%;
    height: 100%;
  }

  h1 {
    position: absolute;
    font-family: Orbitron;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 6rem;
    left: -5vw;
    top: 10%;
    font-size: 5rem;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${props =>
      props.theme.color.background.containerDark};
    color: ${props => props.theme.color.font.title};
    text-shadow: ${props => props.theme.shadow.text};
    font-size: min(max(1.5rem, 8vw), 5rem);
    line-height: min(max(4rem, 10vw), 6rem);

    @media ${device.tablet} {
      top: inherit;
      bottom: -20%;
      left: 20px;
      white-space: nowrap;
    }

    @media ${device.mobile} {
      font-weight: 100;
    }
    span {
      margin-left: 7.4vw;

      @media ${device.tablet} {
        margin-left: 0;
      }
    }
  }

  div {
    position: relative;
    display: flex;
    justify-content: space-between;
  }

  h2 {
    bottom: 10%;
    left: 3.4vw;
    font-size: 1.3rem;
    font-size: min(max(0.9rem, 2vw), 1.3rem);
    font-family: orbitron;
    text-shadow: ${props => props.theme.shadow.text};
    font-weight: 100;
    color: #19254c;
    max-width: 90%;
    letter-spacing: 0.2rem;
    line-height: 2.5rem;

    @media ${device.tablet} {
      line-height: 2rem;
    }

    span :first-child {
      color: ${props => props.theme.color.accent.burlywood};
    }
    span :last-child {
      color: #ee0a78;
    }
  }

  .scroll {
    align-self: flex-end;

    @media ${device.mobile} {
      align-self: center;
    }
  }
`

export const StyledScroll = styled(motion.div)`
  width: 25px;
  height: 50px;
  border: 1px solid #333;
  opacity: 0.5;
  border-radius: 60px;
  position: relative;
  &::before {
    content: "";
    width: 1px;
    height: 20px;
    position: absolute;
    top: 0px;
    left: 50%;
    transform: scaleY(0);
    background-color: #333;
    border-radius: 50%;
    opacity: 1;
    animation: ${wheel} 2s infinite;
  }
`
