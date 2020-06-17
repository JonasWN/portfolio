import styled from "styled-components"

export const StyledGallery = styled.main`
  position: relative;
  width: 70vw;
  height: 80vh;
  background: rgba(0, 0, 0, 0);
  margin: 50vh auto;

  &:after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    height: 65%;
    width: 70%;
    background: ${props => props.theme.color.background.containerLight};
    box-shadow: ${props => props.theme.shadow.card};
  }
`

export const StyledProject = styled.section`
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

  article {
    h3 {
      color: ${props => props.theme.color.accent.beige};
      font-weight: 100;
      text-transform: uppercase;
      margin-bottom: 5%;
    }

    p {
      font-size: 0.6rem;
      font-weight: 100;
      line-height: 1.5rem;
      letter-spacing: 0.2rem;
    }
  }
`

export const StyledStack = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  right: 0;
  top: 0;
  height: 85%;
  width: 60%;
  padding: 4% 5%;
  z-index: 2;
  color: ${props => props.theme.color.font.textDark};

  header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 25%;

    h2,
    h3 {
      font-size: ${props => props.theme.fontSize.md};
      font-family: orbitron;
      font-weight: 100;
    }
  }

  article {
    display: flex;
    justify-content: space-space-between;

    figure {
      object-fit: cover;
      margin: 0;
    }

    section {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 45%;

      h4 {
        align-self: center;
        font-weight: 100;
        color: ${props => props.theme.color.accent.bodo};
        letter-spacing: 0.2rem;
        text-shadow: ${props => props.theme.shadow.text};
      }
      ul {
        align-self: flex-end;

        li {
          position: relative;
          text-transform: uppercase;
          text-align: right;
          font-size: ${props => props.theme.fontSize.xs};

          :not(:last-child) {
            margin-bottom: 10%;
          }

          &:before {
            content: "";
            position: absolute;
            left: -20%;
            top: 50%;
            transform: translate(-50%, 0);
            width: 20px;
            height: 1px;
            z-index: 2;
            color: ${props => props.theme.color.font.textDark};
          }
        }
      }
    }
  }
`
