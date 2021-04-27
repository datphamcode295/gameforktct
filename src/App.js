import './App.css';
import Login from './components/login/login';
import React, { Component } from 'react';
import Home from './components/home/home';
import firebase from './database/firebase';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      login:false
    }
  }
  
  componentDidMount = ()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      this.setState({login:!!user});
      
    });
  }
  
  render() {
    
    return (
      <div className="App">
          {!this.state.login ? (<Login className="a" > </Login>) : <Home/>}
      </div>
  );}
}

export default App;
