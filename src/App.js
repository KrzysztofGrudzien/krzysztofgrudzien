import React from 'react';
import Menu from './components/Menu';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <>
        <Menu></Menu>
        <Header></Header>
        <Footer></Footer>
      </>
    );
  }
}

export default App;
