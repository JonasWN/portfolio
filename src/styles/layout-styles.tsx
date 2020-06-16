import styled from "styled-components"

const sizes = {
  sm: "375px",
  md: "768px",
  lg: "1280px",
  xl: "1920px",
}

export const device = {
  mobile: `(max-width: ${sizes.sm})`,
  tablet: `(max-width: ${sizes.md})`,
  desktop: `(max-width: ${sizes.lg})`,
  desktopL: `(max-width: ${sizes.xl})`,
}

export const Container = styled.div`
  padding: 2%;
`