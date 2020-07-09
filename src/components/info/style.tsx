import styled from "styled-components"
import { device } from "../../styles/layout-styles"

export const StyledInfo = styled.section`
  position: relative;
  width: 70vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media ${device.tablet} {
    flex-direction: column;
    width: 85vw;
  }

  h3 {
    color: #254063;
    font-weight: 600;
    font-size: 1.4rem;
    font-family: orbitron;
    letter-spacing: 0.1rem;
    width: 50%;

    @media ${device.mobile} {
      font-size: 1.2rem;
      width: 85vw;
    }
  }

  div {
    align-self: flex-end;
    width: 400px;

    @media ${device.mobile} {
      width: 170px;
      align-self: center;
    }

    button:first-child {
      margin: 10vh 10px 10px 0;
    }
  }
`
