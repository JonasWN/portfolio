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
  left: 0;
  top: 0;
  z-index: 2;
  height: 85%;
  width: 35%;
  background: ${props => props.theme.color.background.containerDark};
  box-shadow: ${props => props.theme.shadow.card};
`

export const StyledStack = styled.article`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 65%;
  width: 75%;
  background: ${props => props.theme.color.background.containerLight};
  box-shadow: ${props => props.theme.shadow.card};
`
