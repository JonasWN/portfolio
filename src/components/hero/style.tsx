import styled, { keyframes } from "styled-components"
import { motion } from "framer-motion"

const wheel = keyframes`
 from {
    transform: scaleY(0) translateY(0);
  }
  50% {
    transform: scaleY(1) translateY(20px);
  }
  to {
    opacity: 0;
    transform: scaleY(0) translateY(60px);
  }
`

export const StyledHero = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 90vh;

  .face {
    min-height: 80vh;
    width: 35vw;
  }
`

export const StyledCard = styled.article`
  position: relative;
  width: 35vw;
  height: 70vh;
  background: ${props => props.theme.color.background.containerLight};
  box-shadow: ${props => props.theme.shadow.card};

  h1 {
    position: absolute;
    font-family: Orbitron;
    font-weight: 100;
    text-transform: uppercase;
    line-height: 6rem;
    left: -7.4vw;
    top: 15%;
    font-size: 5rem;
    width: 400px;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${props =>
      props.theme.color.background.containerDark};
    color: ${props => props.theme.color.font.title};
    text-shadow: ${props => props.theme.shadow.text};

    span {
      margin-left: 7.4vw;
    }
  }

  p {
    position: absolute;
    bottom: 10%;
    left: 3.4vw;
    font-size: 2rem;
    font-size: 1.5rem;
    font-family: orbitron;
    font-weight: 100;
    color: #19254cd6;
    text-shadow: ${props => props.theme.shadow.text};
    width: 420px;
    max-width: 100%;
    letter-spacing: 0.4rem;

    span {
      color: ${props => props.theme.color.accent.burlywood};
    }
  }

  .scroll {
    position: absolute;
    right: 10%;
    bottom: 10%;
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
