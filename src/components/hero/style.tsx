import styled, { keyframes } from "styled-components"
import { motion } from "framer-motion"
import { device } from "../../styles/layout-styles"

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

  @media ${device.mobile} {
    align-items: inherit;
    margin-top: 10%;
  }

  .face {
    min-height: 80vh;
    width: 35vw;

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

  #tsparticles {
    @media ${device.mobile} {
      display: none;
    }
  }
`

export const StyledCard = styled.article`
  position: relative;
  display: flex;
  align-items: flex-end;
  width: 35vw;
  height: 70vh;
  padding: 3%;
  background: ${props => props.theme.color.background.containerLight};
  box-shadow: ${props => props.theme.shadow.card};
  border-radius: 4px;

  @media ${device.tablet} {
    width: 60vw;
    padding: 5%;
  }

  @media ${device.mobile} {
    width: 85vw;
    height: 70vh;
  }

  h1 {
    position: absolute;
    font-family: Orbitron;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 6rem;
    left: -7.4vw;
    top: 15%;
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
      bottom: -22%;
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
    display: flex;
    justify-content: space-between;
  }

  p {
    bottom: 10%;
    left: 3.4vw;
    font-size: 1.3rem;
    font-size: min(max(0.9rem, 2vw), 1.3rem);
    font-family: orbitron;
    font-weight: 100;
    background: #f5f5f580;
    color: #19254cd6;
    text-shadow: ${props => props.theme.shadow.text};
    max-width: 90%;
    letter-spacing: 0.2rem;
    line-height: 2.5rem;

    @media ${device.tablet} {
      line-height: 1.5rem;
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
    right: 10%;
    bottom: 10%;

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
