import styled from "styled-components"

export const StyledNav = styled.nav`
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
      }
    }
  }
`
