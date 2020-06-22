import styled from "styled-components"
import { device } from "../../styles/layout-styles"

export const StyledButton = styled.button`
  position: absolute;
  right: 5%;
  bottom: 5%;
  z-index: 4;
  overflow: hidden;

  transition: all 0.3s ease-out;

  &:hover {
    box-shadow: 0rem 0rem 1rem 0rem rgba(0, 0, 0, 0.2);
  }

  &:hover a {
    color: ${props => props.theme.color.font.textDark};
  }

  &:hover :after {
    transform: translateX(0);
    transition: transform 0.3s ease-out;
  }

  &:after {
    content: "";
    content: "";
    transition: transform 0.3s ease-out;
    background: #c9d9e8;
    background: ${props => props.theme.color.background.containerLight};
    position: left;
    position: absolute;
    left: -5%;
    top: 0;
    width: 120%;
    height: 100%;
    display: block;
    transform: translate(-100%) skew(-25deg);
  }
  &:before {
    transition: transform 0.3s ease-out;
    content: "";
    background: ${props => props.theme.color.background.containerDark};
    position: left;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

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

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: inherit;
    position: relative;
    z-index: 4;
  }
`
