import React from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import SubNavigation from './components/SubNavigation';
import { BrowserRouter as Router } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navigation></Navigation>
        <Header></Header>
        <SubNavigation></SubNavigation>
        <Main></Main>
        <Footer></Footer>
      </Router>
    );
  }
}

export default App;
