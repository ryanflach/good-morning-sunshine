import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: 10
    };
  }

  componentDidMount() {
    const rootRef = firebase.database().ref();
    const userRef = rootRef.child('user');
    userRef.on('value', snap => {
      this.setState({
        users: snap.val()
      });
    });
  }

  render() {
    return (
      <div className="App">
        <img src="gms_logo.png" alt='logo'></img><br />
        <h1>Good Morning, Sunshine?</h1><br />
        <h3>{this.state.users}</h3>
      </div>
    );
  }
}

export default App;
