import styled from "styled-components"
import { device } from "../../styles/layout-styles"
import { aHover } from "../../components/nav/style"

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin: 0 auto;
  color: #254063;
  font-size: 0.9rem;
  font-family: orbitron;
  font-weight: 100;

  @media ${device.mobile} {
    flex-direction: column-reverse;
    height: 8vh;
    margin: 10vh auto 2vh auto;
  }

  p {
    text-transform: uppercase;
  }

  ul {
    display: flex;
    justify-content: space-between;
    width: 220px;

    a {
      position: relative;

      &:after {
        content: "";
        position: absolute;
        top: 50%;
        left: -0.2rem;
        width: calc(100% + 0.4rem);
        transform: scale(0);
        height: 0.2px;
        background: #000;
        transition: all 2s;
        background: linear-gradient(0deg, #ee0979 0, #ff6a00);
      }

      &:hover :after {
        cursor: pointer;
        animation: ${aHover} 0.8s alternate cubic-bezier(0.77, 0, 0.175, 1);
      }
    }
  }
`
