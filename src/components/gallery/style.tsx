import styled from "styled-components"
import { device } from "../../styles/layout-styles"

export const StyledGallery = styled.main`
  position: relative;
  width: 70vw;
  height: 80vh;
  background: rgba(0, 0, 0, 0);
  margin: 50vh auto;

  @media ${device.desktop} {
    width: 80vw;
    margin: 50vh 5vw;
  }

  @media ${device.mobile} {
    width: 90vw;
    height: 85vh;
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

  @media ${device.mobile} {
    width: 70vw;
    height: 70vh;
  }

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
        background: #fe6935;
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
    max-width: 75%;

    @media ${device.mobile} {
      max-width: 100%;

      h3 {
        color: red;
      }
    }
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

      @media ${device.mobile} {
        letter-spacing: 0.1rem;
        line-height: 1.2rem;
      }
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
  padding: 4% 4%;
  z-index: 2;
  color: ${props => props.theme.color.font.textDark};

  @media ${device.mobile} {
    width: 100%;
    height: 100%;
  }

  header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 25%;

    @media ${device.mobile} {
      position: absolute;
      bottom: -10%;
      left: 0;
      flex-direction: row;
      height: auto;
    }

    h2,
    h3 {
      font-size: ${props => props.theme.fontSize.md};
      font-family: orbitron;
      font-weight: 100;
      letter-spacing: 0.2rem;
      text-shadow: ${props => props.theme.shadow.text};
    }

    h3 {
      @media ${device.mobile} {
        display: none;
      }
    }
  }

  article {
    display: flex;
    justify-content: space-space-between;

    @media ${device.mobile} {
      display: none;
    }

    figure {
      object-fit: cover;
      margin: 0;
      min-width: 50%;
    }

    section {
      display: flex;
      position: relative;
      flex-direction: column;
      justify-content: center;
      width: 50%;

      h4 {
        position: absolute;
        top: -25%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-weight: 100;
        font-size: 1.5rem;
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
          font-size: min(max(0.6rem, 1vw), 0.8rem);
          letter-spacing: 0.2rem;
          width: fit-content;
          margin-left: auto;

          :not(:last-child) {
            margin-bottom: 15%;
          }

          &:before {
            content: "";
            position: absolute;
            left: -30%;
            top: 50%;
            transform: translate(-50%, 0);
            width: 15px;
            height: 1px;
            z-index: 2;
            background: ${props => props.theme.color.font.textDark};
            opacity: 0.3;
          }
        }
      }
    }
  }
`
export const StyledContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 65%;
  width: 70%;
  background: ${props => props.theme.color.background.containerLight};
  box-shadow: ${props => props.theme.shadow.card};

  @media ${device.mobile} {
    width: 85%;
    height: 40vh;
    left: 5%;
  }
`
