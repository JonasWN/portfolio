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
  border: 1px solid #72767a6e;
  background: ${props => props.theme.color.background.site};
  /* color: #d2def5; */
  /* box-shadow: ${props => props.theme.shadow.card}; */
  font-family: Orbitron;
  padding: 5%;

  @media ${device.tablet} {
   width: 60%;
  }

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
      color: #072142;
      font-size: 1.5rem;
      text-transform: uppercase;

      @media ${device.mobile} {
        font-size: 1.2rem;
      }
    }
    section {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 3%;
      color: #254063;

      div {
        height: 0.5px;
        width: 130px;
        background: #FE6935;

        @media ${device.mobile} {
        width: 110px;
      }
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
        background: #254063;
        opacity: 0.5;
        transition: width 0.4s ease-in-out, background 0.4s ease-in-out;

        :hover {
          cursor: pointer;
        }

        :not(:last-child) {
          margin-bottom: 0.75rem;
        }

        :nth-child(${props => props.current}) {
          background: #FE6935;
          width: 30px;
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
    }

    h3 {
      color: #254063;
      font-family: orbitron;
      font-weight: 100;
      align-self: flex-start;
      font-size: 1.3rem;
      text-transform: uppercase;

      @media ${device.mobile} {
        font-size: 1rem;
    
      }
    }

    p {
      color: #254063;
      font-size: 0.9rem;
      font-weight: 100;
      line-height: 2;
      letter-spacing: 0.1rem;
      font-size: min(max(0.7rem, 1vw), 0.9rem);

      @media ${device.tablet} {
       font-size: 0.8rem;
      }

      @media ${device.mobile} {
        font-size: 0.7rem;
        letter-spacing: 0.1rem;
        line-height: 1.2rem;
      }
    }
  }
`
