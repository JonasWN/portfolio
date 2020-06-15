import styled from "styled-components"

export const StyledNav = styled.nav`
  ul {
    color: ${props => props.theme.color.textDark};
    display: flex;
    align-items: center;

    li {
      &:first-child {
        font-size: ${props => props.theme.fontSize.md};
        font-family: Orbitron;
        text-shadow: 0 5px 15px rgba(2, 11, 22, 0.3);
        margin-right: auto;
      }
      :not(:first-child) {
        font-size: ${props => props.theme.fontSize.sm};
        margin-left: 10px;
        text-transform: uppercase;
      }
    }
  }
`
