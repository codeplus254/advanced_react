import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

const Test = (props) => {
  return(
    <>
      <h1>{props.str}</h1>
      <h1>{(props.bool? 'passed in a bool' : 'no bool provided')}</h1>
      <h1>{props.stringOrNumber}</h1>
      <div>
        {
          props.numberArray.map((val)=> {
            return(<li key={val}>{val}</li>);
          })
        }
      </div>
      <div>
        {
          props.objectArray.map((val)=> {
            return(<li key={val.age}>{val.name}</li>);
          })
        }
      </div>
      <div><h1>{props.children}</h1></div>
    </>
  );
}

Test.propTypes = {
  str: PropTypes.string,
  bool: PropTypes.bool,
  stringOrNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  numberArray: PropTypes.arrayOf(PropTypes.number),
  objectArray:PropTypes.arrayOf(PropTypes.shape(
    {
      name: PropTypes.string,
      age: PropTypes.number
    }
  )),
  children: PropTypes.element.isRequired
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Test 
          str={'Yay'}
          bool
          stringOrNumber={10}
          numberArray={[1,6,9]}
          objectArray={[{name:'john', age:10}, {name: 'Peter', age:11}]}
          >
          <div>
            Child
          </div>
        </Test>
          
      </div>
    );
  };
};

export default App;
