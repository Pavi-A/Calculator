
import React, { Component } from 'react';
import './Calculator.css';
class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      display: '',
      result: 0,
    };
  }

  handleButtonClick = (button) => {
    if (button === '=') {
      try {
        const result = eval(this.state.display);
        this.setState({ result });
      } catch (error) {
        this.setState({ result: 'Error' });
      }
    } else if (button === 'C') {
      this.setState({ display: '', result: 0 });
    } else {
      this.setState({ display: this.state.display + button });
    }
  };

  render() {
    return (
      <div className="calculator">
        <div className="display">
          <input type="text" value={this.state.display}/>
        </div>
        <div className="buttons">
          <button onClick={() => this.handleButtonClick('7')}>7</button>
          <button onClick={() => this.handleButtonClick('8')}>8</button>
          <button onClick={() => this.handleButtonClick('9')}>9</button>
          <button onClick={() => this.handleButtonClick('+')}>+</button>
          <button onClick={() => this.handleButtonClick('4')}>4</button>
          <button onClick={() => this.handleButtonClick('5')}>5</button>
          <button onClick={() => this.handleButtonClick('6')}>6</button>
          <button onClick={() => this.handleButtonClick('-')}>-</button>
          <button onClick={() => this.handleButtonClick('1')}>1</button>
          <button onClick={() => this.handleButtonClick('2')}>2</button>
          <button onClick={() => this.handleButtonClick('3')}>3</button>
          <button onClick={() => this.handleButtonClick('*')}>*</button>
          <button onClick={() => this.handleButtonClick('0')}>0</button>
          <button onClick={() => this.handleButtonClick('.')}>.</button>
          <button onClick={() => this.handleButtonClick('=')}>=</button>
          <button onClick={() => this.handleButtonClick('/')}>/</button>
          <button onClick={() => this.handleButtonClick('C')}>C</button>
        </div>
        <div className="result">
          <input type="text" value={this.state.result} readOnly />
        </div>
      </div>
    );
  }
}

export default Calculator;
