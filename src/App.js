import React from 'react';
import logo from './logo.svg';
import './App.css';
import Joke from './Joke'
class App extends React.Component {
  render() {
    //return <h2>Hi, I am a Car!</h2>;
    return(
      <div>
        <Joke punchLine="aaa"/>
        <Joke question="BBB" punchLine="bbb"/>
        <Joke question="CCC" punchLine="ccc"/>
        <Joke question="DDD"/>
      </div>
    );
  }
}

export default App;
