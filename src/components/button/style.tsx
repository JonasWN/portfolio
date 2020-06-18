import styled from "styled-components"
import { device } from "../../styles/layout-styles"

export const StyledButton = styled.button`
  position: absolute;
  left: 50%;
  bottom: -50%;
  transform: translate(-50%, -50%);
  width: 170px;
  height: 50px;
  background: ${props => props.theme.color.background.containerDark};
  color: ${props => props.theme.color.font.textLight};
  font-size: ${props => props.theme.fontSize.xs};
  letter-spacing: 0.2rem;
  font-weight: 100;
  text-transform: uppercase;
  border: none;
  padding: 0;

  @media ${device.desktop} {
    left: inherit;
    right: 0;
    bottom: -60%;
    transform: translate(0, 0);
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: inherit;
    position: relative;
    z-index: 4;
    transition: all 0.4s ease-in-out;
  }
`
