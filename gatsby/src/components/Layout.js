import React from 'react';

import Nav from './Nav';
import Footer from './Footer';

import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import SetupStyles from '../styles/Setup';

export default function Layout({ children }) {
  return (
    <div>
      <SetupStyles />
      <GlobalStyles />
      <Typography />
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
