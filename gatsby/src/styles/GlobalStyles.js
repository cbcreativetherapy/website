import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

/* *{border: 1px solid red;} */

:root {
  --main-bg: #f6f6f6;
  --grey-bg: #e4e0e1;
  --dark-green: #116530;
  --mid-green: #18a558;
  --light-green: #a3ebb1;
  --accent-blue: #21b6a8;
  --accent-coral: #ff8882;
  --text-color: #000501;
}

html {
  font-size: 62.5%;
  background-color: var(--main-bg);
  color: var(--text-color);
}

.gatsby-image-wrapper img[src*=base64\\,] {
  image-rendering: -moz-crisp-edges;
  image-rendering: pixelated;
}

.wrapper {
  width: 95%;
  max-width: 1400px;
  margin: 0 auto;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

h1, h2, h3, h4, p, a, ul, li {
  font-weight: normal;
  margin: 0;
  padding: 0;
  color: var(--text-color);
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  cursor: pointer;
}

`;

export default GlobalStyles;
