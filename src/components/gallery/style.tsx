import styled from "styled-components"
import { motion } from "framer-motion"
import { device } from "../../styles/layout-styles"
import { ScaleRight, FadeIn } from "../../styles/animations"

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
    background: #336;
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

  button {
    position: absolute;
    right: 5%;
    bottom: 5%;
  }

  @media ${device.mobile} {
    width: 90%;
    bottom: 5%;
    height: 40vh;
    left: 7%;
  }
`
