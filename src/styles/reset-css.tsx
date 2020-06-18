import { createGlobalStyle } from "styled-components"
import { ThemeType } from "./theme-styles"

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
*,
*::before,
*::after {
  box-sizing: border-box;
  scrollbar-width: none !important;
  -webkit-tap-highlight-color: transparent;
  -webkit-overflow-scrolling: touch;
  touch-action: manipulation;
}

ul,
ol {
  padding: 0;
}

body,
h1,
h2,
h3,
h4,
p,
ul,
ol,
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

body {
  min-height: 100vh;
  scroll-behavior: smooth;
  line-height: 1.5;
  font-family: 'Oswald', sans-serif;
  background: ${props => props.theme.color.background.site};

  ::-webkit-scrollbar { width: 0 !important };
  -ms-overflow-style: none;
}
 
::-webkit-scrollbar {
display: none !important;
}

ul,
ol {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  max-width: 100%;
  display: block;
}

input,
button,
textarea,
select {
  font: inherit;
}

`

export default GlobalStyle
