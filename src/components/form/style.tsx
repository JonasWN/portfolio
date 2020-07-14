import styled from "styled-components"
import { device } from "../../styles/layout-styles"

export const StyledForm = styled.form`
  border: 1px solid #72767a6e;
  padding: 10% 5% 5% 5%;
  width: 100%;
  border-radius: 5px;

  @media ${device.mobile} {
    padding: 10%;
    height: 60vh;
  }

  h1 {
    color: #072142;
    font-weight: 600;
    font-size: 2.4rem;
    font-family: orbitron;

    @media ${device.mobile} {
      font-size: 1.5rem;
    }
  }

  ul {
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;

    li {
      label {
        font-size: 1.2rem;
        color: #254063;
        font-family: orbitron;
        font-weight: 100;
        margin-right: 20px;

        @media ${device.mobile} {
          font-size: 0.8rem;
        }
      }

      input {
        font-family: oswald;
        font-weight: 600;
        font-size: 1.2rem;
        color: #072142;
        background: ${props => props.theme.color.background.site};
        border: none;
        outline: none;
        border-bottom: 1px solid #72767a6e;

        @media ${device.mobile} {
          font-size: 0.9rem;
        }
      }
    }

    li:last-child {
      height: 40%;
      display: flex;
      flex-direction: column;

      label {
        margin-bottom: 10px;
      }

      textarea {
        font-family: oswald;
        font-weight: 600;
        font-size: 1.2rem;
        color: #072142;
        border-radius: 5px;
        outline: none;
        padding: 5%;
        border: 1px solid #72767a6e;
        background: ${props => props.theme.color.background.site};
        height: 100%;
        width: 100%;
        resize: none;

        @media ${device.mobile} {
          font-size: 0.9rem;
        }
      }
    }
  }

  button {
    position: absolute;
    bottom: -70px;
    left: 50%;
    transform: translate(-50%, 0);
    background: none;
    border: none;
    font-size: 1.8rem;
    color: #254063;
    font-family: orbitron;
    font-weight: 100;
    outline: none;

    :hover {
      cursor: pointer;
    }

    @media ${device.mobile} {
      bottom: -30px;
    }
  }

  svg {
    position: absolute;
    top: -20px;
    right: 0;
    width: 150px;
    height: 170px;

    @media ${device.mobile} {
      width: 100px;
      height: 120px;
    }
  }
`
