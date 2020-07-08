import styled from "styled-components"
import { device } from "../../styles/layout-styles"

export const StyledTextBox = styled.article`
  width: 40vw;
  align-self: center;
  font-family: orbitron;
  margin-bottom: 30vh;
  margin-left: 30%;

  @media ${device.mobile} {
    width: 85vw;
    margin-left: inherit;
  }

  h3 {
    position: relative;
    color: #072142;
    font-weight: 600;
    font-size: 1.4rem;
    letter-spacing: 0.2rem;
    margin-bottom: 20px;

    :before {
      content: "";
      position: absolute;
      top: 50%;
      left: 20%;
      height: 1px;
      width: 85%;
      background: #72767a6e;

      @media ${device.mobile} {
        display: none;
      }
    }

    :after {
      content: "";
      position: absolute;
      top: -80%;
      right: -5%;
      height: 40vh;
      width: 1px;
      background: #72767a6e;

      @media ${device.mobile} {
        display: none;
      }
    }
  }
  p {
    color: #254063;
    font-size: 14px;
    font-weight: 100;
    line-height: 2;
    letter-spacing: 0.1rem;
  }
`
