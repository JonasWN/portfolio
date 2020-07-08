import styled from "styled-components"
import { device } from "../../styles/layout-styles"

export const StyledCard = styled.li`
  height: 400px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 2% 10%;
  align-items: center;
  position: relative;
  border: 1px solid #72767a6e;

  h4 {
    position: absolute;
    top: -20%;
    font-size: 1.6rem;
    left: -19%;
    color: #254063;
    font-family: orbitron;
    font-weight: 100;

    @media ${device.mobile} {
      left: 0;
    }
  }
  p {
    color: #254063;
    font-family: orbitron;
    line-height: 1.8rem;
    font-size: 0.9rem;
  }
`
