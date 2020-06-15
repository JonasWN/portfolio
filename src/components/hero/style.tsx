import styled from "styled-components"

export const StyledHero = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 90vh;
  img {
    min-height: 80vh;
    width: 35vw;
  }
`

export const StyledCard = styled.article`
  position: relative;
  width: 35vw;
  height: 70vh;
  background: ${props => props.theme.color.background.containerLight};
  box-shadow: ${props => props.theme.shadow.card};

  h1 {
    position: absolute;
    font-family: Orbitron;
    font-weight: 100;
    text-transform: uppercase;
    line-height: 6rem;
    left: -7.4vw;
    top: 15%;
    font-size: 5rem;
    width: 400px;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${props =>
      props.theme.color.background.containerDark};
    color: ${props => props.theme.color.font.title};
    text-shadow: ${props => props.theme.shadow.text};

    span {
      margin-left: 7.4vw;
    }
  }

  p {
    position: absolute;
    bottom: 10%;
    left: 3.4vw;
    font-size: 2rem;
    font-size: 1.5rem;
    font-weight: 100;
    color: ${props => props.theme.color.font.textDark};
    text-shadow: ${props => props.theme.shadow.text};
    width: 350px;
    max-width: 100%;
    letter-spacing: 0.4rem;

    span {
      color: ${props => props.theme.color.accent.bodo};
    }
  }
`
