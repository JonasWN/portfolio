import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

@font-face {
          font-family: "Oswald";
          src: url("https://fonts.googleapis.com/css2?family=Oswald:wght@300;500;700&display=swap");
        }

@font-face {
          font-family: "Orbitron";
          src: url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap");
        }

*,
*::before,
*::after {
  box-sizing: border-box;
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
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: #dce0ff5e;
}

ul,
ol {
  list-style: none;
}

a {
  text-decoration: none;
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
