import styled from "styled-components"

const sizes = {
  mobile: "375px",
  tablet: "768px",
  desktop: "1280px",
  desktopL: "1920px",
}

export const device = {
  mobile: `(max-width: ${sizes.mobile})`,
  tablet: `(max-width: ${sizes.tablet})`,
  desktop: `(max-width: ${sizes.desktop})`,
  desktopL: `(max-width: ${sizes.desktopL})`,
}

export const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 30px 0;
`
