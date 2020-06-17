import styled from "styled-components"

export const StyledGallery = styled.main`
  position: relative;
  width: 70vw;
  height: 80vh;
  background: rgba(0, 0, 0, 0);
  margin: 50vh auto;
`

export const StyledProject = styled.article`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  left: 0;
  top: 0;
  z-index: 2;
  height: 85%;
  width: 40%;
  background: ${props => props.theme.color.background.containerDark};
  color: ${props => props.theme.color.font.textLight};
  box-shadow: ${props => props.theme.shadow.card};
  font-family: Orbitron;
  padding: 5%;

  header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: fit-content;

    h2 {
      position: relative;
      letter-spacing: 0.5rem;
      font-weight: 100;
      font-size: ${props => props.theme.fontSize.sm};
      text-transform: uppercase;
    }
    section {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 3%;

      div {
        height: 1px;
        width: 90px;
        background: ${props => props.theme.color.background.containerLight};
      }

      p {
        align-self: flex-end;
        margin-right: 2%;
        font-size: ${props => props.theme.fontSize.md};
        letter-spacing: 0.4rem;
      }
    }
  }

  nav {
    align-self: flex-end;

    ul {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      li {
        height: 1px;
        width: 20px;
        background: ${props => props.theme.color.background.containerLight};
        opacity: 0.5;

        :hover {
          cursor: pointer;
        }

        :not(:last-child) {
          margin-bottom: 0.75rem;
        }
      }
    }
  }

  footer {
    h3 {
      color: ${props => props.theme.color.accent.beige};
      font-weight: 100;
      text-transform: uppercase;
      margin-bottom: 5%;
    }

    p {
      font-size: ${props => props.theme.fontSize.xs};
      font-weight: 100;
      line-height: 1.5rem;
      letter-spacing: 0.2rem;
    }
  }
`

export const StyledStack = styled.article`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 65%;
  width: 70%;
  background: ${props => props.theme.color.background.containerLight};
  box-shadow: ${props => props.theme.shadow.card};
`
