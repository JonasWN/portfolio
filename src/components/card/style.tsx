import styled from "styled-components"
import { device } from "../../styles/layout-styles"
import { motion } from "framer-motion"

export const StyledCard = styled<any>(motion.li)`
  position: relative;
  height: 400px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 10% 15%;
  align-items: center;
  position: relative;
  /* border: 1px solid #72767a6e; */

  svg:last-child {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  .svg-path {
    stroke-dasharray: 2047.8309326171875;
    stroke-dashoffset: 2047.8309326171875;
    animation: dash 8s linear forwards;
    animation-play-state: ${props => (props.enter ? "running" : "paused")};
  }

  .svg-path-2 {
    stroke-dasharray: 2209.302001953125;
    stroke-dashoffset: 2209.302001953125;
    animation: dash 8s linear forwards;
    animation-play-state: ${props => (props.enter ? "running" : "paused")};
  }

  .card-border {
    stroke-dasharray: 1254.32666015625;
    stroke-dashoffset: 1254.32666015625;
    animation: dash 2.5s cubic-bezier(0.42, 0, 0, 1) forwards;
    animation-play-state: ${props => (props.enter ? "running" : "paused")};
    animation-delay: 1.3s;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }

  h4 {
    position: absolute;
    top: -20%;
    font-size: 1.6rem;
    left: -19%;
    color: #254063;
    font-family: orbitron;
    font-weight: 100;

    @media ${device.mobile} {
      left: 50%;
      transform: translate(-50%, 0) !important;
    }
  }
  p {
    color: #254063;
    font-family: orbitron;
    line-height: 1.8rem;
    font-size: 0.8rem;
    text-align: center;
  }
`
