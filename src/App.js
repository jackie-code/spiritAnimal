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
      d: 0,
      e: 0,
      f: 0,
      g: 0,
      h: 0,
      i: 0,
      j: 0
    }
  }

  updateUserName = (event) => {
    this.setState({
      username: event.currentTarget.value
    })
    console.log(event.currentTarget.value);
  }

  updateAnimal = (value) => {
    console.log('value sent to App.js State', value);
    this.setState({[value]: this.state[value] + 1}, () => {
      console.log(this.state)
    })
  }

  clearState = () => {
    this.setState({
      username: "",
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      e: 0,
      f: 0,
      g: 0,
      h: 0,
      i: 0,
      j: 0
    });
  }


  render(){
    console.log(this.state)
  return (
    <div className="App">
      <Switch>
      {/* home only needs / bc nothing shows on home page */}
      <Route exact path = '/' render={(props) => <Home {...props} updateUserName={this.updateUserName} />}/>
      <Route exact path = '/question/:number' render={(props) => <Question {...props} updateAnimal={this.updateAnimal}  />}/>
      <Route exact path = '/result' render={(props) => <Result {...props} results={this.state} clearState={this.clearState}/> }/> 
      </Switch>
    </div>
  );
}
}
export default App;

// WITHOUT USING SWITCH
// <Component propNameToPass={valueToPass} />

