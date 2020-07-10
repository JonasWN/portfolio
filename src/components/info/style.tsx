import styled from "styled-components"
import { device } from "../../styles/layout-styles"

export const StyledInfo = styled.section`
  position: relative;
  width: 70vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${device.tablet} {
    width: 85vw;
  }

  h3 {
    color: #072142;
    font-weight: 600;
    font-size: 2.4rem;
    font-family: orbitron;
    margin-bottom: 15px;

    @media ${device.mobile} {
      text-align: center;
      margin-bottom: 30px;
    }
  }

  h4 {
    color: #254063;
    font-weight: 100;
    font-size: 1rem;
    font-family: orbitron;
    letter-spacing: 0.1rem;
    width: 50%;

    @media ${device.mobile} {
      width: 85vw;
      text-align: center;
      margin-bottom: 20px;
    }
  }

  article {
    display: flex;
    justify-content: space-between;

    @media ${device.tablet} {
      flex-direction: column;
    }

    div {
      align-self: flex-end;
      display: flex;
      justify-content: space-between;

      @media ${device.tablet} {
        justify-content: inherit;
        align-self: inherit;
        margin-top: 20px;
      }
    }

    button:first-child {
      margin-right: 10px;

      @media ${device.mobile} {
        margin-bottom: 10px;
      }
    }
  }
`
