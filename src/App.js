import React, {Component} from 'react';
import {Switch, Link, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Question from './Questions';
import Home from './Home';
import Result from './Result';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      a: 0,
      b: 0,
      c: 0,
      d: 0
    }
  }

  updateUserName = (event) => {
    this.setState({
      username: event.currentTarget.value
    })
    console.log(event.currentTarget.value);
  }

  render(){
  return (
    <div className="App">
      <Switch>
      {/* home only needs / bc nothing shows on home page */}
  <Route exact path = '/' render={(props) => <Home {...props} updateUserName={this.updateUserName} />}/>
      <Route exact path = '/question/:number' render={(props) => <Question {...props}  />}/>
      <Route exact path = '/result' render={(props) => <Result {...props} results={this.state}/> }/> 
      </Switch>
    </div>
  );
}
}
export default App;

// WITHOUT USING SWITCH
// <Component propNameToPass={valueToPass} />

