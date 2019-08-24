import React, { PureComponent } from 'react';
import './App.css';

const Temp = (props) => {
  return (<div>{props.val}</div>)
}

class App extends PureComponent {
  state = {
    val: 1,
  };

  componentDidMount(){
    setInterval(()=>{
      this.setState(()=>{
        return { val: 1}
      })
    }, 2000)
  }
  // // prevent unnecessary re-renders when data is still the same
  // shouldComponentUpdate(nextProps, nextState) {
  //   return ( this.state.val === nextState.val ? false : true ); 
  // };

  render() {
    return (
      <div className="App">
        <Temp val={this.state.val}/>
      </div>
    );
  };
};

export default App;
