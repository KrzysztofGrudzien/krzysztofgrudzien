import React from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

class App extends React.Component {
  render() {
    return (
      <>
        <Navigation></Navigation>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </>
    );
  }
}

export default App;
