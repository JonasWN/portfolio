import styled from "styled-components"
import { device } from "../../styles/layout-styles"

export const StyledNav = styled.nav`
  @media ${device.mobile} {
    display: flex;
    justify-content: space-between;
  }

  ul {
    color: ${props => props.theme.color.font.textDark};
    display: flex;
    align-items: center;
    li,
    a {
      &:first-child {
        font-size: ${props => props.theme.fontSize.md};
        font-family: Orbitron;
        text-shadow: ${props => props.theme.shadow.text};
        margin-right: auto;
      }
      :not(:first-child) {
        font-size: ${props => props.theme.fontSize.sm};
        text-shadow: ${props => props.theme.shadow.text};
        margin-left: 10px;
        font-weight: 300;
        text-transform: uppercase;

        @media ${device.mobile} {
          display: none;
        }
      }
    }
  }

  @media ${device.tablet} {
    margin: 4%;
  }
`

export const StyledPhone = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  display: none;

  @media ${device.mobile} {
    display: block;
  }
  .active .x {
    transform: scale(1);
    transition: transform 400ms 350ms;
  }

  .plate {
    height: 80px;
    width: 80px;
  }
  svg {
    height: 80px;
    position: absolute;
    width: 80px;
  }
  .burger {
    filter: url(#gooeyness);
  }
  .x {
    transform: scale(0);
    transition: transform 400ms;
  }
  .line {
    fill: none;
    stroke: #181e2d;
    stroke-width: 4.5px;
    stroke-linecap: round;
    stroke-linejoin: round;
    transform-origin: 50%;
    transition: stroke-dasharray 500ms 200ms, stroke-dashoffset 500ms 200ms,
      transform 500ms 200ms;
  }
  .x .line {
    stroke-width: 3px;
  }

  .plate2 .line1 {
    stroke-dasharray: 21 185.62753295898438;
    transition-delay: 0;
  }
  .plate2 .line2 {
    stroke-dasharray: 21 178.6514129638672;
    transition-delay: 30ms;
  }
  .plate2 .line3 {
    stroke-dasharray: 21 197.92425537109375;
    transition-delay: 60ms;
  }
  .plate2 .line4 {
    stroke-dasharray: 21 190.6597137451172;
    transition-delay: 90ms;
  }
  .plate2 .line5 {
    stroke-dasharray: 21 208.52874755859375;
    transition-delay: 120ms;
  }
  .plate2 .line6 {
    stroke-dasharray: 21 186.59703063964844;
    transition-delay: 150ms;
  }
  .active.plate2 .line1 {
    stroke-dasharray: 5 185.62753295898438;
    stroke-dashoffset: -141px;
  }
  .active.plate2 .line2 {
    stroke-dasharray: 5 178.6514129638672;
    stroke-dashoffset: -137px;
  }
  .active.plate2 .line3 {
    stroke-dasharray: 5 197.92425537109375;
    stroke-dashoffset: -176px;
  }
  .active.plate2 .line4 {
    stroke-dasharray: 5 190.6597137451172;
    stroke-dashoffset: -159px;
  }
  .active.plate2 .line5 {
    stroke-dasharray: 5 208.52874755859375;
    stroke-dashoffset: -139px;
  }
  .active.plate2 .line6 {
    stroke-dasharray: 5 186.59703063964844;
    stroke-dashoffset: -176px;
  }
  .active.plate2 .x {
    transition: transform 400ms 250ms;
  }
`
