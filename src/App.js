import React, { Component } from 'react';
import './App.css';

const StatelessNestedComponent = (props) => {
  return (
    <>
    <input
      ref={props.inputRef}
      type="text" />
    </>
    
  )
}
const FunctionalComponent = () => {
  let inputRef = null;
  const onClick = () => {
    inputRef.focus();
  }
  return (
    <>
      <div>
        <span>My Input</span>
        <StatelessNestedComponent 
         inputRef={(input) => {inputRef = input}}
        />
        <input 
          type="submit" 
          onClick={onClick} 
          value="submit"/>
      </div>

    </>
  )
}

class App extends Component {
  onClick = () => {
    alert(`yey : ${this.firstName.value} | ${this.lastName.value} submitted!!!`)
  }

  onKeyUp = (target, e) => {
    if(e.keyCode === 13) {  // "ENTER" key on keyboard
      this.lastName.focus();
      switch(target) {
        case 'firstName':
          this.lastName.focus();
          break;
        case 'lastName':
          this.age.focus();
          break;
        case 'age':
          this.submit.focus();
          break;
        default:
          this.firstName.focus();
      }
    }
  }

  render() {
    return (
      <div className="App">
        <FunctionalComponent />
        <div>
          <span>First Name:</span>
          <input 
            ref={(input)=> {this.firstName = input}}
            onKeyUp={this.onKeyUp.bind(this, 'firstName')}
            type="text" />
        </div>
        <div>
          <span>Last Name:</span>
          <input 
            ref={(input)=> {this.lastName = input}}
            onKeyUp={this.onKeyUp.bind(this, 'lastName')}
            type="text" />
        </div>
        <div>
          <span>Age:</span>
          <input 
            ref={(input)=> {this.age = input}}
            onKeyUp={this.onKeyUp.bind(this, 'age')}
            type="text" />
        </div>
        <div>
          <input 
            ref={(input)=> {this.submit = input}}
            onKeyUp={this.onKeyUp.bind(this, 'submit')}
            type="submit" value="submit"
            onClick = {this.onClick} />
        </div>
      </div>
    );
  };
};

export default App;
