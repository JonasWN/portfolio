import styled from "styled-components"
import { device } from "../../styles/layout-styles"

export const StyledAbout = styled.section`
  margin: 30vh 0 15vh 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    color: #072142;
    font-family: orbitron;
    font-weight: 500;
    letter-spacing: 0.2rem;
    font-size: 1.9rem;
    margin: 0 0 15vh 10vw;

    @media ${device.mobile} {
      display: none;
    }
  }

  ul {
    grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 300px));
    display: grid;
    place-content: center;
    place-items: center;
    grid-gap: 20vh 80px;
    margin-right: 5vw;
    margin-bottom: 10vh;

    @media ${device.mobile} {
      grid-template-columns: repeat(auto-fit, minmax(min(200px, 100%), 80vw));
    }
  }
`
