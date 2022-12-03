import './App.css';
import React, { Component } from 'react';
import About from './about';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
      <About />
      <Header />
      <Content />
      <Footer />
      </div>
    );
  }
}

export default App;
