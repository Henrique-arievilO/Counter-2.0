import React from 'react';
import { GlobalStyle } from './Style/GlobalStyle';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

export default class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}
