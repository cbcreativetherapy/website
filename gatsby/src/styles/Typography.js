import { createGlobalStyle } from 'styled-components';

import MontserratRegular from '../assets/fonts/Montserrat/Montserrat-Regular.ttf';
import MontserratSemiBolded from '../assets/fonts/Montserrat/Montserrat-SemiBold.ttf';
import QuicksandRegular from '../assets/fonts/Quicksand/static/Quicksand-Regular.ttf';
import QuicksandLight from '../assets/fonts/Quicksand/static/Quicksand-Light.ttf';
import RalewayRegular from '../assets/fonts/Raleway/static/Raleway-Regular.ttf';
import RalewayBold from '../assets/fonts/Raleway/static/Raleway-Bold.ttf';

const Typography = createGlobalStyle`

@font-face {
  font-family: MontserratReg;
  src: url(${MontserratRegular})
}

@font-face {
  font-family: MontserratSemiBold;
  src: url(${MontserratSemiBolded});
}

@font-face {
  font-family: QuicksandReg;
  src: url(${QuicksandRegular})
}

@font-face {
  font-family: QuicksandLite;
  src: url(${QuicksandLight})
}

@font-face {
  font-family: RalewayReg;
  src: url(${RalewayRegular})
}

@font-face {
  font-family: RalewayBold;
  src: url(${RalewayBold})
}

html {
  font-family: MontserratReg, --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}

p, li {
  letter-spacing: 0.5px;
}

.link {
  color: var(--dark-green);
  border-bottom: 1px solid var(--main-bg);
  transition: border-bottom 0.3s;
  &:hover, 
  &:focus {
    border-bottom: 1px solid var(--dark-green);
    transition: border-bottom 0.3s;
  }
}
.link-blue {
  color: var(--dark-green);
  border-bottom: 1px solid var(--main-bg);
  transition: border-bottom 0.3s;
  &:hover,
  &:focus {
    border-bottom: 1px solid var(--dark-green);
    transition: border-bottom 0.3s;
  }
}

`;

export default Typography;
