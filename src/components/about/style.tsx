import styled from "styled-components"
import { device } from "../../styles/layout-styles"

export const StyledAbout = styled.section`
  margin: 30vh auto 15vh auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  justify-content: space-between;

  h2 {
    color: #072142;
    font-weight: 600;
    font-size: 2.4rem;
    font-family: orbitron;
    margin: 0 0 15vh 5vw;

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
    margin-bottom: 20vh;

    @media ${device.mobile} {
      grid-template-columns: repeat(auto-fit, minmax(min(200px, 100%), 80vw));
    }
  }
`
