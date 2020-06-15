import styled from "styled-components"

export const StyledHero = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 90vh;
  img {
    min-height: 80vh;
  }
`

export const StyledCard = styled.article`
  width: 35vw;
  height: 70vh;
  background: ${props => props.theme.color.background.containerLight};
  box-shadow: ${props => props.theme.shadow.container};
`
