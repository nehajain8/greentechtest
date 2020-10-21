import React , { Component } from 'react';
import Title from './Title.js';
import Login from './Login.js';

class App extends Component {
  render() {
    return(
     <div className="login-form">
        <Title />
        <Login />
     </div> 
    )
  }
}

export default App;
