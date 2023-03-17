// src/App.js
import { type } from '@testing-library/user-event/dist/type';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.handleButtonOne = this.handleButtonOne.bind(this);
    this.handleButtonTwo = this.handleButtonTwo.bind(this);
    this.handleButtonThree = this.handleButtonThree.bind(this);

    this.state = {
      clicksBtnOne: 0,
      clicksBtnTwo: 0,
      clicksBtnThree: 0,
    };
  }

  handleButtonOne() {
    const { clicksBtnOne } = this.state;
    this.setState((prevState) => ({
      clicksBtnOne: prevState.clicksBtnOne + 1,
    }), () => {
      console.log(`Botão 1 ${this.getButtonColor(clicksBtnOne)}`);
    });
  }

  handleButtonTwo() {
    const { clicksBtnTwo } = this.state;
    this.setState((prevState) => ({
      clicksBtnTwo: prevState.clicksBtnTwo + 1,
    }), () => {
      console.log(`Botão 2 ${this.getButtonColor(clicksBtnTwo)}`);
    });
  }

  handleButtonThree() {
    const { clicksBtnThree } = this.state;
    this.setState((prevState) => ({
      clicksBtnThree: prevState.clicksBtnThree + 1,
    }), () => {
      console.log(`Botão 3 ${this.getButtonColor(clicksBtnThree)}`);
    });
  }

  getButtonColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const { clicksBtnOne, clicksBtnTwo, clicksBtnThree } = this.state;
    return (
      <div>
        <button
        onClick={ this.handleButtonOne } 
        type="button"
        style={ { backgroundColor: this.getButtonColor(clicksBtnOne) } }
        >
          {`Cliques botao 1: ${clicksBtnOne}`}
        </button>
        <button 
        onClick={ this.handleButtonTwo }
        type="button"
        style={ { backgroundColor: this.getButtonColor(clicksBtnTwo) } }
        >
          {`Cliques botao 2: ${clicksBtnTwo}`}
        </button>
        <button 
        onClick={ this.handleButtonThree } 
        type="button"
        style={ { backgroundColor: this.getButtonColor(clicksBtnThree) } }>
          {`Cliques botao 3: ${clicksBtnThree}`}
        </button>
      </div>
    );
  }
}

export default App;