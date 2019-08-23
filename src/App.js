import React, { Component,Fragment } from 'react';
import './App.css';

const Temp = (props) => {
  return (
    <>
      {
        props.greetings === 'hi'
        ? <Fragment>&lt;div&gt;{props.greetings}&lt;/div&gt;</Fragment>
        :  props.greetings
      }
    </>
  );
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Temp greetings="hi"/>
      </div>
    );
  };
};

export default App;
