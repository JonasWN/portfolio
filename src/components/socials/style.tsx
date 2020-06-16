import styled from "styled-components"

export const StyledSocials = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  left: 5%;
  bottom: 31vh;
  transform: translate(-50%, -0%);
  li:last-child a span:nth-child(3) {
    height: 1px;
  }

  li a {
    display: block;
    position: relative;
    width: 50px;
    height: 50px;
    line-height: 40px;
    font-size: 30px;
    text-align: center;
    text-decoration: none;
    color: ${props => props.theme.color.font.title};
    margin: 0px 0px;
    opacity: 0.5;
    transition: 0.5s;

    &:hover {
      opacity: 1;
    }

    &:hover span:nth-child(1) {
      transform-origin: left;
      transform: scaleX(0);
      transition: transform 0.5s;
    }
    &:hover span:nth-child(2) {
      transform-origin: top;
      transform: scaleY(1);
      transition: transform 0.5s;
    }

    &:hover span:nth-child(3) {
      transform-origin: right;
      transform: scaleX(0);
      transition: transform 0.5s;
    }

    &:hover span:nth-child(4) {
      transform-origin: top;
      transform: scaleY(1);
      transition: transform 0.5s;
    }
    span {
      position: absolute;
      transition: transform 0.5s;
      background: ${props => props.theme.color.background.containerDark};

      :nth-child(1) {
        top: 0;
        left: 0;
        transform-origin: right;
        width: 100%;
        height: 1px;
      }

      :nth-child(2) {
        top: 0;
        left: 0;
        transform-origin: bottom;
        transform: scaleY(0);
        width: 1px;
        height: 100%;
      }

      :nth-child(3) {
        bottom: 0;
        left: 0;
        transform-origin: left;
        width: 100%;
        height: 0px;
      }
      :nth-child(4) {
        top: 0;
        right: 0;
        transform-origin: top;
        transform: scaleY(0);
        width: 1px;
        height: 100%;
      }
    }
  }
`
